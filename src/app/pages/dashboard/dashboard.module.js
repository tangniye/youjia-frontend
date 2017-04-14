/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        title: '个人中心',
        templateUrl: '/app/pages/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      });

  }

  angular.module('app.pages.dashboard', [
      'ui.router',
      // 'app.pages.dashboard.personal',
      'app.pages.dashboard.students'
      // 'app.pages.dashboard.history',
      // 'app.pages.dashboard.schedule',
      // 'app.pages.dashboard.feedback',
      // 'app.pages.dashboard.teachers',
      // 'app.pages.dashboard.case'
    ])
    .config(routeConfig);
})();
