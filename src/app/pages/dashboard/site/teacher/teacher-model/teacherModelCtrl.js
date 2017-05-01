/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function teacherModelCtrl($scope, $uibModalInstance, User, Common, toastr) {
    var vm = $scope;
    vm.item = vm.item || {};

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
            toastr.success('新增成功', '', {timeOut: 2000});
            vm.getdata();
          });
        }

        if (vm.edit) {
          User.modifyTeacher(item.id, item).then(function (res) {
            $uibModalInstance.close();
            toastr.success('修改成功', '', {timeOut: 2000});
            vm.getdata();
          })
        }

      }
    };

    vm.addPic = function () {
      Common.model.promptModel('avatarModelCtrl', 'app/pages/dashboard/site/teacher/avatar-model/avatar-model.html', 'md', true, 'common-modal')
        .result.then('', function (data) {
        vm.picFile = data.picFile;
        vm.croppedDataUrl = data.croppedDataUrl;
      })
    };

    vm.editPic = function () {
      Common.model.promptModel('avatarModelCtrl', 'app/pages/dashboard/site/teacher/avatar-model/avatar-model.html', 'md', true, 'common-modal', {
          picFile: vm.picFile
        })
        .result.then('', function (data) {
        vm.picFile = data.picFile;
        vm.croppedDataUrl = data.croppedDataUrl;
      })
    }


  }

  angular.module('app.pages.dashboard.site.teacher').controller('teacherModelCtrl', teacherModelCtrl);
})();
