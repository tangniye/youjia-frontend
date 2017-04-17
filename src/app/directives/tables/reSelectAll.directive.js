/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reSelectAll(reConfig) {

    var linkFn = function (scope, elem, attr, ctrl) {

      var mode = attr.reSelectMode || reConfig.select.mode;
      elem.bind('click', function () {
        if (elem[0].checked) {
          ctrl.selectedAll = true;
        }
        else {
          ctrl.selectedAll = false;
        }
        scope.$apply(function () {
          angular.forEach(scope.rows, function (row, index) {
            ctrl.select(row, mode, elem[0].checked);
          })

        });
      });


    };

    return {
      restrict: 'A',
      require: '^reTable',
      scope: {
        rows: '=reSelectAll'
      },
      link: linkFn

    }
  }

  angular.module('app').directive('reSelectAll', reSelectAll);
})();
