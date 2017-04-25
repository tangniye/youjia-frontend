(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter.userSchedule', {
        url: '/schedule',
        title: '用户信息',
        templateUrl: '/app/mobile-user-center/user-schedule/index.html',
      });

  }

  angular.module('app.mobileUserCenter.userSchedule', [])
    .config(routeConfig);
})();
