(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter.userFeedback', {
        url: '/feedback',
        title: '学习反馈',
        views: {
          'mobileUserCenterHeader': {
            templateUrl: '/app/mobile-user-center/header.html'
          },
          'mobileUserCenterContent': {
            templateUrl: '/app/mobile-user-center/user-feedback/index.html',
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

  angular.module('app.mobileUserCenter.userFeedback', [])
    .config(routeConfig);
})();
