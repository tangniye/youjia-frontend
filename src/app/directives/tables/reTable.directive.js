/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reTable() {

    return {
      restrict: 'E',
      // scope: {
      //   tableData: '=data',
      //   tableColumns: '=columns',
      //   tableState: '=state'
      // },
      templateUrl: 'app/directives/tables/table.html',
      controller: 'reTableCtrl'
    }
  }

  angular.module('app').directive('reTable', reTable);
})();
