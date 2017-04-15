/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reTable() {
    var linkFn = function (scope, elem, attr) {
      // console.log(scope)
    };

    return {
      restrict: 'E',
      scope: {
        tableData: '=data',
        tableColumns: '=columns',
        tableOptions: '=options'
      },
      templateUrl: '/app/directives/tables/table.html',
      controller: 'reTableCtrl',
      link: linkFn
    }
  }

  angular.module('app').directive('reTable', reTable);
})();
