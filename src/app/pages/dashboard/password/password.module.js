/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.password', {
        url: '/personal/password',
        title: '修改密码',
        templateUrl: '/app/pages/dashboard/password/password.html',
        controller: 'passwordCtrl'
      });
  }

  angular.module('app.pages.dashboard.password', [])
    .config(routeConfig);
})();
