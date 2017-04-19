(function () {
  'use strict';

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function (ele, attrs) {
        return attrs.includeWithScope;
      }
    };
  }

  angular.module('app').directive('includeWithScope', includeWithScope)
})();
