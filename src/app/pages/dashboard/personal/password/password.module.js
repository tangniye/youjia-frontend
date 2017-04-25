/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.personal.password', {
        url: '/password',
        title: '修改密码',
        templateUrl: '/app/pages/dashboard/personal/password/password.html',
        controller: 'passwordCtrl'
      });
  }

  angular.module('app.pages.dashboard.personal.password', [])
    .config(routeConfig);
})();
