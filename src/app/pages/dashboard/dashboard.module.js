/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard', {
        abstract: true,
        url: '/dashboard',
        title: '个人中心',
        templateUrl: 'app/pages/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        data: {
          permissions: {
            only: 'AUTHORIZED',
            redirectTo: 'app.pages.index'
          }
        }
      });

  }

  angular.module('app.pages.dashboard', [
      'ui.router',
      'app.pages.dashboard.personal',
      'app.pages.dashboard.student',
      'app.pages.dashboard.history',
      'app.pages.dashboard.schedule',
      'app.pages.dashboard.feedback',
      'app.pages.dashboard.site'
    ])
    .config(routeConfig);
})();
