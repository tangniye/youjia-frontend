/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.site.successCase', {
        url: '/successCase',
        title: '成功案例',
        templateUrl: '/app/pages/dashboard/site/successCase/successCase.html',
        controller: 'successCaseCtrl'
      });
  }

  angular.module('app.pages.dashboard.site.successCase', [])
    .config(routeConfig);
})();
