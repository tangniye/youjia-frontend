(function () {
  'use strict';

  /** @ngInject */
  function auditionModalCtrl($scope, $uibModalInstance, Audition, toastr) {
    var vm = $scope;

    var regx = /^\d{11}$/;

    vm.is_phone_valid = function () {
      return vm.form.phone && vm.form.phone.$viewValue && regx.test(vm.form.phone.$viewValue)
    };

    vm.submit = function (item) {
      if (vm.form.$valid && vm.is_phone_valid()) {
        Audition.add(item).then(function (res) {
          toastr.success('请等待通知', '预约成功', {'closeButton': true});
          $uibModalInstance.close();
        })
      }

    };

  }

  angular.module('app.components').controller('auditionModalCtrl', auditionModalCtrl);
})();
