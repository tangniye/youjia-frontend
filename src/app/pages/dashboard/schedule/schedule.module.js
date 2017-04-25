/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.schedule', {
        url: '/schedule',
        title: '课程表',
        templateUrl: '/app/pages/dashboard/schedule/schedule.html',
        controller: 'scheduleCtrl'
      });
  }

  angular.module('app.pages.dashboard.schedule', [
    'app.pages.dashboard.schedule.student',
    'app.pages.dashboard.schedule.teacher'
  ])
    .config(routeConfig);
})();
