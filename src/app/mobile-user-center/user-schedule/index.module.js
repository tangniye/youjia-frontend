(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter.userSchedule', {
        url: '/schedule',
        title: '课程表',
        views: {
          'mobileUserCenterHeader': {
            templateUrl: '/app/mobile-user-center/header.html'
          },
          'mobileUserCenterContent': {
            templateUrl: '/app/mobile-user-center/user-schedule/index.html',
            controller: 'userScheduleCtrl'
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

  angular.module('app.mobileUserCenter.userSchedule', [])
    .config(routeConfig);
})();
