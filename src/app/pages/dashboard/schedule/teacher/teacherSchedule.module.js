/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.schedule.teacher', {
        url: '/teacher',
        title: '老师课表',
        templateUrl: '/app/pages/dashboard/schedule/teacher/teacherSchedule.html',
        controller: 'teacherScheduleCtrl'
      });
  }

  angular.module('app.pages.dashboard.schedule.teacher', [])
    .config(routeConfig);
})();
