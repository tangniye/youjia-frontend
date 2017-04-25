/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.schedule.info', {
        url: '/:role/:id',
        title: '课程表',
        templateUrl: '/app/pages/dashboard/schedule/schedule-info/scheduleInfo.html',
        controller: 'scheduleInfoCtrl'
      });
  }

  angular.module('app.pages.dashboard.schedule.info', [])
    .config(routeConfig);
})();
