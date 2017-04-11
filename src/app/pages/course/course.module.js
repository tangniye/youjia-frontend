(function () {
  'use strict';
  function routeConfig($stateProvider) {
    'ngInject';
    $stateProvider
      .state('course', {
        url: '/course',
        title: '课程列表',
        templateUrl: '/app/pages/course/course.html',
        controller: 'courseCtrl'
      });
  }

  angular.module('app.pages.course', [])
    .config(routeConfig);
})();
