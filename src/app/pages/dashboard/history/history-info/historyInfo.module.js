/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.history.info', {
        url: '/history/:id',
        title: '历史信息',
        templateUrl: 'app/pages/dashboard/history/history-info/historyInfo.html',
        controller: 'historyInfoCtrl'
      });
  }

  angular.module('app.pages.dashboard.history.info', [])
    .config(routeConfig);
})();
