/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function successAddModelCtrl($scope, $uibModalInstance) {
    var vm = $scope;

    vm.cancel = function () {
      $uibModalInstance.close();
    };


  }

  angular.module('app.pages.dashboard.student').controller('successAddModelCtrl', successAddModelCtrl);
})();
