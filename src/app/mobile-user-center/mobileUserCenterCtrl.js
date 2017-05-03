(function () {
  /** @ngInject */
  function mobileUserCenterCtrl($scope, $cookies) {
    $scope.me = $cookies.getObject('me');

  }
  angular.module('app.mobileUserCenter')
    .controller('mobileUserCenterCtrl', mobileUserCenterCtrl);
})();
