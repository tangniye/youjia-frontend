/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.history', {
        url: '/history',
        title: '历史信息',
        templateUrl: '/app/pages/dashboard/history/history.html',
        controller: 'historyCtrl'
      });
  }

  angular.module('app.pages.dashboard.history', [])
    .config(routeConfig);
})();
