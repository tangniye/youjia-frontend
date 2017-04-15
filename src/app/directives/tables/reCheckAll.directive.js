/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reCheckAll($parse) {

    var linkFn = function (scope, elem, attr, ctrl) {

      var dataset = $parse(attr.reCheckAll)(scope);

      var reTableCtrl = ctrl[0];

      scope.$watch(attr.ngModel, function (newVal, oldVal) {
        if (newVal !== oldVal) {
          var ids = [];
          if (newVal) {
            for (var i = 0; i < dataset.length; i++) {
              ids.push(parseInt(dataset[i].id))
            }
          }
          reTableCtrl.toggleAll(ids);
        }
      })


    };

    return {
      restrict: 'A',
      require: ['^reTable', '^ngModel'],
      link: linkFn

    }
  }

  angular.module('app').directive('reCheckAll', reCheckAll);
})();
