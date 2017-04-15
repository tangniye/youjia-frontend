/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function reCheck($parse) {

    var linkFn = function (scope, elem, attr, ctrl) {

      var data = $parse(attr.reCheck)(scope);

      if (data) {
        elem.bind('click', function () {
          ctrl.toggleItem(data.id);
        })
      }


    };

    return {
      restrict: 'A',
      require: '^reTable',
      link: linkFn

    }
  }

  angular.module('app').directive('reCheck', reCheck);
})();
