/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.personal', {
        url: '/personal',
        title: '个人信息',
        templateUrl: '/app/pages/dashboard/personal/personal.html',
        controller: 'personalCtrl'
      });
  }

  angular.module('app.pages.dashboard.personal', [])
    .config(routeConfig);
})();
