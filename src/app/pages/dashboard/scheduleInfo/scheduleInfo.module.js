/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.scheduleInfo', {
        url: '/schedule/:role/:id',
        title: '课程表',
        templateUrl: '/app/pages/dashboard/scheduleInfo/scheduleInfo.html',
        controller: 'scheduleInfoCtrl'
      });
  }

  angular.module('app.pages.dashboard.scheduleInfo', [])
    .config(routeConfig);
})();
