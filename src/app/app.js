'use strict';
/*
 * app config
 * including http interceptor and http default config
 */
/** @ngInject */
function appConfig($provide, $httpProvider, $stateProvider) {

  $stateProvider.state('app', {
    abstract: true,
    views: {
      root: {
        template: '<div data-ui-view="app"></div>'
      }
    }
  });

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
            toastr.error(rejection.data.message, '服务器内部错误', {'closeButton': true});
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
function appRun($rootScope, $state, $cookies, PermRoleStore) {
  $rootScope.$state = $state;

  PermRoleStore.defineManyRoles({
    'AUTHORIZED': function () {
      return isAuthenticated();
    },
    'ADMIN': function () {
      return isAdmin();
    },
    'STUDENT': function () {
      return isStudent();
    }
  });

  function isAuthenticated() {
    return $cookies.getObject('me') ? true : false;
  }

  function isAdmin() {
    var me = $cookies.getObject('me');
    return ( me && me.role === 'admin') ? true : false;
  }

  function isStudent() {
    var me = $cookies.getObject('me');
    return ( me && me.role === 'student') ? true : false;
  }
}

angular.module('app', [
    'ngCookies',
    'ui.router',
    'permission',
    'permission.ui',
    'ui.bootstrap',
    'toastr',
    'checklist-model',
    'ngFileUpload',
    'ngImgCrop',
    'app.components',
    'app.pages',
    'app.mobileUserCenter'
  ])
  .config(appConfig)
  .constant('URL_CONFIG', window.urlConfig)
  .constant('IS_MOBILE', window.isMobile)
  .run(appRun);
