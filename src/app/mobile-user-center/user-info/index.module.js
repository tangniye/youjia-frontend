(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter.userInfo', {
        url: '/info',
        title: '用户信息',
        templateUrl: '/app/mobile-user-center/user-info/index.html',
      });

  }

  angular.module('app.mobileUserCenter.userInfo', [])
    .config(routeConfig);
})();
