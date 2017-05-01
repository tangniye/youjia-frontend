(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter.userInfo', {
        url: '/info',
        title: '用户信息',
        views: {
          'mobileUserCenterHeader': {
            templateUrl: '/app/mobile-user-center/header.html'
          },
          'mobileUserCenterContent': {
            templateUrl: '/app/mobile-user-center/user-info/index.html',
          }
        },
        data: {
          permissions: {
            only: 'AUTHORIZED',
            redirectTo: 'app.pages.index'
          }
        }
      });

  }

  angular.module('app.mobileUserCenter.userInfo', [
  ])
    .config(routeConfig);
})();
