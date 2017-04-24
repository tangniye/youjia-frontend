'use strict';
/*
 * app config
 * including http interceptor and http default config
 */
/** @ngInject */
function appConfig($provide, $httpProvider) {

    // Intercept http calls.
    $provide.factory('ErrorHttpInterceptor', ['$q', '$injector', function ($q, $injector) {
        return {
            // On request failure
            requestError: function (rejection) {
                return $q.reject(rejection);
            },

            // On response failure
            responseError: function (rejection) {
                var toastr = $injector.get('toastr');
                // 弹出对话框错误提示
                switch (rejection.status) {
                    case 400:
                        toastr.error(rejection.data.message, '错误请求', {'closeButton': true});
                        break;
                    case 401:
                        toastr.error(rejection.statusText, '未授权', {'closeButton': true});
                        break;
                    case 403:
                        toastr.error(rejection.statusText, '服务器拒绝请求', {'closeButton': true});
                        break;
                    case 404:
                        toastr.error(rejection.statusText, '未找到', {'closeButton': true});
                        break;
                    case 500:
                        toastr.error(rejection.statusText, '服务器内部错误', {'closeButton': true});
                        break;
                    default:
                        toastr.error('', '请求超时', {'closeButton': true});
                }
                return $q.reject(rejection);
            }
        };
    }]);

    $httpProvider.interceptors.push('ErrorHttpInterceptor');

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.delete = {'Content-Type': 'application/json'};

}

/*
 * app run function
 */
function appRun($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  if ($(window).width() < 768) {
    $rootScope.isMobile = true;
  } else {
    $rootScope.isMobile == false;
  }
}

angular.module('app', [
        'ngCookies',
        'ui.router',
        'ui.bootstrap',
        'toastr',
        'ngFileUpload',
        'ngImgCrop',
        'app.components',
        'app.pages'
    ])
    .config(appConfig)
    .constant('URL_CONFIG', window.urlConfig)
    .run(appRun);
