/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function successCaseModelCtrl($scope, $uibModalInstance, Case) {
    var vm = $scope;
    vm.submit = function (item) {

      if (vm.form.$valid) {

        if (vm.add) {
          Case.add(item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          });
        }

        if (vm.edit) {
          Case.modify(item.id, item).then(function (res) {
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

  angular.module('app.pages.dashboard.site.successCase').controller('successCaseModelCtrl', successCaseModelCtrl);
})();
