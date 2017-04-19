/**
 * Created by tangniye on 17/4/19.
 */
(function () {
  'use strict';

  /** @ngInject */
  function avatarModelCtrl($scope, $uibModalInstance, toastr) {
    var vm = $scope;

    vm.cancel = function () {
      $uibModalInstance.close();
    };

    vm.save = function () {
      if (!vm.picFile) {
        toastr.warning('请选择您要上传的头像', '', {timeOut: 2000})
      }
      if (vm.picFile) {
        var avatar = {
          picFile: vm.picFile,
          croppedDataUrl: vm.croppedDataUrl
        };
        $uibModalInstance.dismiss(avatar);
      }
    }

  }

  angular.module('app.pages.dashboard.site.teacher').controller('avatarModelCtrl', avatarModelCtrl);
})();
