/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reSort($parse, $timeout, reConfig) {

    return {
      restrict: 'A',
      require: '^reTable',
      link: function (scope, element, attr, ctrl) {

        var item = $parse(attr.reSort)(scope);
        var is_sort = item.sort;
        var predicate = item.sortName;
        var index = 0;
        var defaltClass = attr.reDefaltClass || reConfig.sort.defaltClass;
        var ascClass = attr.reAscClass || reConfig.sort.ascClass;
        var descClass = attr.reDescClass || reConfig.sort.descClass;
        var stateClasses = [ascClass, descClass];
        var descFirst = attr.reDescFirst ? attr.reDescFirst : reConfig.sort.descFirst;
        var promise = null;
        var throttle = attr.reDelay || reConfig.sort.delay;


        //view --> table state
        function sort() {
          if (descFirst) {
            index = index === 0 ? 2 : index - 1;
          } else {
            index++;
          }

          var func;

          if (index % 3 === 0) {
            //manual reset
            index = 0;
            ctrl.tableState().sort = {};
            ctrl.tableState().pagination.page = 1;
            func = ctrl.pipe.bind(ctrl);
          } else {
            func = ctrl.sortBy.bind(ctrl, predicate, index % 2 === 0);
          }
          if (promise !== null) {
            $timeout.cancel(promise);
          }
          if (throttle < 0) {
            func();
          } else {
            promise = $timeout(func, throttle);
          }
        }


        //table state --> view

        if (is_sort && predicate) {

          element.bind('click', function () {
            scope.$apply(sort);
          });

          scope.$watch(function () {
            return ctrl.tableState().sort;
          }, function (newValue) {
            if (newValue.predicate !== predicate) {
              index = 0;
              element
                .removeClass(ascClass)
                .removeClass(descClass)
                .addClass(defaltClass);
            } else {
              index = newValue.reverse === true ? 2 : 1;
              element
                .removeClass(defaltClass)
                .removeClass(stateClasses[index % 2])
                .addClass(stateClasses[index - 1]);
            }
          }, true);

        }

      }
    };
  }

  angular.module('app').directive('reSort', reSort);
})();
