(function () {
  'restrict';

  /** @ngInject */
  function routeConfig ($stateProvider) {
    $stateProvider.state('app.mobileUserCenter.updatePassword', {
      url: '/update-password',
      title: '修改密码',
      views: {
        'mobileUserCenterHeader': {},
        'mobileUserCenterContent': {
          templateUrl: '/app/mobile-user-center/update-password/index.html',
        }
      }
    })
  }
  angular.module('app.mobileUserCenter.updatePassword', [])
    .config(routeConfig)
})();
