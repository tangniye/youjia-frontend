/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function rePagination() {

    return {
      restrict: 'E',
      require: '^reTable',
      scope: true,
      templateUrl: 'app/directives/tables/table-pagination.html',
      link: function (scope, elem, attr, ctrl) {
        scope.pagination = ctrl.getTableState().pagination;

        scope.toPage = function (index) {
          ctrl.pagination(index)
        }
      }
    };
  }

  angular.module('app').directive('rePagination', rePagination);
})();
