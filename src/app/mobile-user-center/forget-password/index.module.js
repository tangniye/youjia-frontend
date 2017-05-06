(function () {
  'restrict';

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.mobileUserCenter.forgetPassword', {
      url: '/forget-password',
      title: '修改密码',
      views: {
        'mobileUserCenterHeader': {
          templateUrl: 'app/mobile-user-center/return-header.html'
        },
        'mobileUserCenterContent': {
          templateUrl: 'app/mobile-user-center/forget-password/index.html'
        }
      }
    })
  }
  angular.module('app.mobileUserCenter.forgetPassword', [])
    .config(routeConfig)
})();
