/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.history', {
        abstract: true,
        title: '历史信息',
        templateUrl: '/app/pages/dashboard/history/history.html',
        data: {
          permissions: {
            only: 'ADMIN',
            redirectTo: 'app.pages.dashboard.personal.info'
          }
        }
      });
  }

  angular.module('app.pages.dashboard.history', [
    'app.pages.dashboard.history.list',
    'app.pages.dashboard.history.info'
  ])
    .config(routeConfig);
})();
