/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reSelect($parse,reConfig) {

    var linkFn = function (scope, elem, attr, ctrl) {
      var mode = attr.reSelectMode || reConfig.select.mode;
      var selectAllElement = angular.element('input[re-select-all]')[0];
      elem.bind('click', function () {
        scope.$apply(function () {
          ctrl.select(scope.row, mode);
        });
      });

      scope.$watch('row.isSelected', function (newValue) {
        if (newValue === true) {
          // elem.addClass(reConfig.select.selectedClass);
          debugger;
          if(ctrl.selectedAll){
            selectAllElement.checked = true;
          }
        } else {
          // elem.removeClass(reConfig.select.selectedClass);
          selectAllElement.checked = false;
        }
      });

      // var data = $parse(attr.reSlect)(scope);
      //
      // if (data) {
      //   elem.bind('click', function (event) {
      //     // var checkboxes = document.querySelectorAll('input[re-check]');
      //     var idx = ctrl.getTableState().checkedIds.indexOf(data.id);
      //     if (idx > -1) {
      //       elem.checked = false;
      //       ctrl.getTableState().checkedIds.splice(idx, 1);
      //     }
      //     else {
      //       elem.checked = true;
      //       ctrl.getTableState().checkedIds.push(data.id);
      //     }
      //     // options.checkAll = _.findIndex(checkboxes, {checked: true}) > -1 ? true : false;
      //
      //   })
      // }


    };

    return {
      restrict: 'A',
      require: '^reTable',
      scope: {
        row: '=reSelect'
      },
      link: linkFn

    }
  }

  angular.module('app').directive('reSelect', reSelect);
})();
