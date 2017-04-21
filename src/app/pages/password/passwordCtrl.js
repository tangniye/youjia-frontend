/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function passwordCtrl($scope, $cookies) {
    var vm = $scope;
    vm.me = $cookies.getObject('me');

    if (vm.me) {
      vm.step = 2;
      vm.stepLines = ['设置新密码', '完成'];
    } else {
      vm.step = 1;
      vm.stepLines = ['验证身份', '设置新密码', '完成'];
    }

  }

  angular.module('app.pages.password').controller('passwordCtrl', passwordCtrl);
})();
