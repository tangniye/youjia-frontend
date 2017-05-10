/**
 * Created by tangniye on 17/4/12.
 */
(function () {
  'use strict';

  /** @ngInject */
  function loginModelCtrl($rootScope, $scope, $cookies, $uibModalInstance, $state, User, IS_MOBILE) {
    var vm = $scope;

    vm.error = {
      message: ''
    };

    vm.login = function () {
      vm.form.$submitted = true;
      if (vm.form.$invalid) {
        vm.error.message = '请输入用户名和密码';
        return
      }
      User.login(vm.user).then(function (res) {
        $cookies.putObject('me', res);
        $rootScope.me = res;
        $uibModalInstance.close();
        $state.go('app.pages.index');
      }, function (res) {
        vm.form.$invalid = true;
        vm.error.message = res.message;
      })
    };

    vm.forget = function () {
      if (!IS_MOBILE) {
        $state.go('app.pages.password');
      } else {
        $state.go('app.mobileUserCenter.forgetPassword')
      }
      $uibModalInstance.close();
    }
  }

  angular.module('app.components').controller('loginModelCtrl', loginModelCtrl);
})();
