(function () {
  'use strict';

  /** @ngInject */
  function auditionModalCtrl($rootScope, $scope, $cookies, $uibModalInstance, $state, User) {

    $scope.user = {
      phone: '13800138000',
      username: '张三'
    };

    $scope.error = {
      flag: false,
      message: ''
    };

    $scope.apply = function () {
      $uibModalInstance.close();

    };
    
  }

  angular.module('app.components').controller('auditionModalCtrl', auditionModalCtrl);
})();
