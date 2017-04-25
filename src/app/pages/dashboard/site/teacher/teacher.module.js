/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.site.teacher', {
        url: '/teacher',
        title: '老师信息',
        templateUrl: '/app/pages/dashboard/site/teacher/teacher.html',
        controller: 'teacherCtrl'
      });
  }

  angular.module('app.pages.dashboard.site.teacher', [])
    .config(routeConfig);
})();
