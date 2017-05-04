(function () {
  'use strict';
  function routeConfig($stateProvider) {
    'ngInject';
    $stateProvider
      .state('app.pages.course', {
        abstract: true,
        url: '/course',
        templateUrl: 'app/pages/course/course.html',
        controller: 'courseCtrl'
      })
      .state('app.pages.course.sat', {
        url: '/sat',
        title: 'SAT',
        templateUrl: 'app/pages/course/sat.html'
      })
      .state('app.pages.course.toefl', {
        url: '/toefl',
        title: 'TOEFL',
        templateUrl: 'app/pages/course/toefl.html'
      })
      .state('app.pages.course.ielts', {
        url: '/ielts',
        title: 'IELTS',
        templateUrl: 'app/pages/course/ielts.html'
      });
  }

  angular.module('app.pages.course', [])
    .config(routeConfig);
})();
