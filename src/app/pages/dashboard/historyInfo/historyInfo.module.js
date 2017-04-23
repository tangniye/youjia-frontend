/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.historyInfo', {
        url: '/history/:id',
        title: '历史信息',
        templateUrl: '/app/pages/dashboard/historyInfo/historyInfo.html',
        controller: 'historyInfoCtrl'
      });
  }

  angular.module('app.pages.dashboard.historyInfo', [])
    .config(routeConfig);
})();
