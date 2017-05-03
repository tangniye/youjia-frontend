(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.mobileUserCenter', {
        abstract: true,
        url: '/user-center',
        title: '个人中心',
        views: {
          'app': {
            templateUrl: '/app/mobile-user-center/index.html',
            controller: 'mobileUserCenterCtrl'
          }
        }
      });
  }

  angular.module('app.mobileUserCenter', [
    'ui.router',
    'app.mobileUserCenter.userInfo',
    'app.mobileUserCenter.userSchedule',
    'app.mobileUserCenter.userFeedback',
    'app.mobileUserCenter.updatePassword',
    'app.mobileUserCenter.forgetPassword',
  ]).config(routeConfig);
})();
