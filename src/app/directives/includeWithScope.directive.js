(function () {
  'use strict';

  /** @ngInject */
  function includeWithScope() {
    return {
      restrict: 'AE',
      templateUrl: function (ele, attrs) {
        return attrs.includeWithScope;
      },
      link:function (scope,elem,attrs,ctrl) {
        console.log(scope)
        // console.log(ctrl)
      }
    };
  }

  angular.module('app').directive('includeWithScope', includeWithScope)
})();
