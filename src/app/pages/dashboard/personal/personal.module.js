/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.personal', {
        abstract: true,
        url: '/personal',
        title: '个人信息',
        templateUrl: 'app/pages/dashboard/personal/personal.html'
      });
  }

  angular.module('app.pages.dashboard.personal', [
      'app.pages.dashboard.personal.info',
      'app.pages.dashboard.personal.updatePassword'
    ])
    .config(routeConfig);
})();
