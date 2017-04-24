/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function archiveModelCtrl($scope, $uibModalInstance, History) {
    var vm = $scope;

    vm.submit = function (item) {
      console.log(item)
      if (vm.form.$valid) {
        History.add(vm.id, item).then(function (res) {
          $uibModalInstance.close();
          vm.getdata();
        });
      }
    };

    vm.cancel = function () {
      $uibModalInstance.close();
    };


  }

  angular.module('app.pages.dashboard.student').controller('archiveModelCtrl', archiveModelCtrl);
})();