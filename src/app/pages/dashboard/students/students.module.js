/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.students', {
        url: '/students',
        title: '学生信息',
        templateUrl: '/app/pages/dashboard/students/students.html',
        controller: 'studentsCtrl'
      });
  }

  angular.module('app.pages.dashboard.students', [])
    .config(routeConfig);
})();
