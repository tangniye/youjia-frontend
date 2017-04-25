/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.personal.info', {
        url: '',
        title: '个人信息',
        templateUrl: '/app/pages/dashboard/personal/personal-info/personalInfo.html',
        controller: 'personalInfoCtrl'
      });
  }

  angular.module('app.pages.dashboard.personal.info', [])
    .config(routeConfig);
})();
