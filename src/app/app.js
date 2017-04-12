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
                        toastr.error('错误请求', rejection.statusText, {'closeButton': true});
                        break;
                    case 401:
                        toastr.error('未授权', rejection.statusText, {'closeButton': true});
                        break;
                    case 403:
                        toastr.error('服务器拒绝请求', rejection.statusText, {'closeButton': true});
                        break;
                    case 404:
                        toastr.error('未找到', rejection.statusText, {'closeButton': true});
                        break;
                    case 500:
                        toastr.error('服务器内部错误', rejection.statusText, {'closeButton': true});
                        break;
                    default:
                        toastr.error('请求超时', '', {'closeButton': true});
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

angular.module('app', [
        'ngCookies',
        'ui.router',
        'ui.bootstrap',
        'toastr',
        'ngFileUpload',
        'app.components',
        'app.pages'

    ])
    .config(appConfig)
    .constant('URL_CONFIG', window.urlConfig)
    .run();
