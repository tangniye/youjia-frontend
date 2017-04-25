(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter.userFeedback', {
        url: '/feedback',
        title: '用户信息',
        templateUrl: '/app/mobile-user-center/user-feedback/index.html',
      });

  }

  angular.module('app.mobileUserCenter.userFeedback', [])
    .config(routeConfig);
})();
