/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.student', {
        url: '/student',
        title: '学生信息',
        templateUrl: 'app/pages/dashboard/student/student.html',
        controller: 'studentCtrl',
        data: {
          permissions: {
            only: 'ADMIN',
            redirectTo: 'app.pages.dashboard.personal.info'
          }
        }
      });
  }

  angular.module('app.pages.dashboard.student', [])
    .config(routeConfig);
})();
