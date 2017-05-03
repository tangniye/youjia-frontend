/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.personal.updatePassword', {
        url: '/update-password',
        title: '修改密码',
        templateUrl: '/app/pages/dashboard/personal/update-password/index.html'
        //controller: 'passwordCtrl'
      });
  }

  angular.module('app.pages.dashboard.personal.updatePassword', [])
    .config(routeConfig);
})();
