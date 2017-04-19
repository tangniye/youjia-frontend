/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function auditionModelCtrl($scope, $uibModalInstance) {
    var vm = $scope;

    vm.cancel = function () {
      $uibModalInstance.close();
    };


  }

  angular.module('app.pages.dashboard.site.audition').controller('auditionModelCtrl', auditionModelCtrl);
})();
