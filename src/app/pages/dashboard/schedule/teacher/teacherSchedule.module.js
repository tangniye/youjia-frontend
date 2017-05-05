/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.schedule.teacher', {
        url: '/teacher',
        title: '老师课表',
        templateUrl: 'app/pages/dashboard/schedule/teacher/teacherSchedule.html',
        controller: 'teacherScheduleCtrl',
        data: {
          permissions: {
            only: 'ADMIN',
            redirectTo: 'app.pages.dashboard.personal.info'
          }
        }
      });
  }

  angular.module('app.pages.dashboard.schedule.teacher', [])
    .config(routeConfig);
})();
