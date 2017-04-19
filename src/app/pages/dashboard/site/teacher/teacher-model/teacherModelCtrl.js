/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function teacherModelCtrl($scope, $uibModalInstance, User) {
    var vm = $scope;

    vm.is_phone_valid = function () {
      var regx = /^\d{11}$/;
      if (vm.form.phone && (vm.form.phone.$viewValue == void 0 || vm.form.phone.$viewValue == '')) {
        return true
      }
      return vm.form.phone && vm.form.phone.$viewValue && regx.test(vm.form.phone.$viewValue)
    };

    vm.submit = function (item) {

      if (item && vm.picFile && vm.croppedDataUrl) {
        item.photo = vm.croppedDataUrl;
      }

      if (vm.form.$valid && vm.is_phone_valid() && item.photo) {

        if (vm.add) {
          User.addTeacher(item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          });
        }

        if (vm.edit) {
          User.modifyTeacher(item.id, item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          })
        }

      }
    };

    vm.cancel = function () {
      $uibModalInstance.close();
    };


  }

  angular.module('app.pages.dashboard.site').controller('teacherModelCtrl', teacherModelCtrl);
})();
