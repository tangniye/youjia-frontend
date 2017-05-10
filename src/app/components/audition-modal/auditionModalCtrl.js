(function () {
  'use strict';

  /** @ngInject */
  function auditionModalCtrl($scope, $uibModalInstance, Audition, toastr) {
    var vm = $scope;

    vm.regx = /^\d{11}$/;

    vm.submit = function (item) {
      if (vm.form.$valid) {
        Audition.add(item).then(function (res) {
          toastr.success('请等待通知', '预约成功', {'closeButton': true});
          vm.form.$setPristine();
          vm.form.$setUntouched();
          $uibModalInstance.close();
        })
      }

    };

  }

  angular.module('app.components').controller('auditionModalCtrl', auditionModalCtrl);
})();
