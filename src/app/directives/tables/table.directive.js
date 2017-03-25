/**
 * Created by tangniye on 2016/11/2.
 */
'use strict';
(function () {
  function reTable() {
    'ngInject';
    var linkFn = function (scope, elem, attr) {
    };

    return {
      restrict: 'EA',
      scope: true,
      replace: true,
      templateUrl: '/app/directives/tables/table.html',
      link: linkFn
    }
  }

  angular.module('app').directive('reTable', reTable);
})();
