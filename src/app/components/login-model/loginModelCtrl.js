/**
 * Created by tangniye on 17/4/12.
 */
(function () {
  'use strict';

  /** @ngInject */
  function loginModelCtrl($rootScope, $scope, $cookies, $uibModalInstance, $state, User) {
    var vm = $scope;

    vm.user = {
      phone: '13800138000',
      password: '123456'
    };

    vm.error = {
      flag: false,
      message: ''
    };

    vm.login = function () {
      User.login(vm.user).then(function (res) {
        vm.error.flag = false;
        $cookies.putObject('me', res);
        $rootScope.me = res;
        $uibModalInstance.close();
        $state.go('app.pages.index');
      }, function (res) {
        vm.error.flag = true;
        vm.error.message = res.message;
      })
    };

    vm.cancel = function () {
      $uibModalInstance.close();
    };

    vm.forget = function () {
      $state.go('app.pages.password');
      $uibModalInstance.close();
    }
  }

  angular.module('app.components').controller('loginModelCtrl', loginModelCtrl);
})();
