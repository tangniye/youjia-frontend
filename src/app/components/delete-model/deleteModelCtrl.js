/**
 * Created by tangniye on 2016/8/26.
 */
(function () {
  "use strict";

  /** @ngInject */
  function deleteModelCtrl($scope, $uibModalInstance) {

    $scope.ok = function () {
      $uibModalInstance.dismiss('ok');
    };

  }

  angular.module('app.components').controller('deleteModelCtrl', deleteModelCtrl);

})();


