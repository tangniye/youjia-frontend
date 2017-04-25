/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.history.list', {
        url: '/history',
        title: '历史信息',
        templateUrl: '/app/pages/dashboard/history/history-list/historyList.html',
        controller: 'historyListCtrl'
      });
  }

  angular.module('app.pages.dashboard.history.list', [])
    .config(routeConfig);
})();
