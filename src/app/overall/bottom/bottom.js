/**
 * Created by tangniye on 2016/10/14.
 */
'use strict';
(function () {
  function bottomBox($timeout, IC, Web) {
    'ngInject';
    var linkFn = function (scope, elem, attr) {

      scope.icData = [];
      scope.webData = [];
      getData();

      function getData() {
        Web.getRecentlyRisk().then(function (res) {
          scope.webData = res;
          if (res.length > 8) {
            $timeout(function () {
              new fnScrollList('tb-scroll-4', 'tr', 1, 1000);
            });
          }
        });

        IC.getRecentlyDevice().then(function (res) {
          scope.icData = res;
          if (res.length > 8) {
            $timeout(function () {
              new fnScrollList('tb-scroll-3', 'tr', 1, 1000);
            });
          }
        });

        $timeout(function () {
          getData()
        }, 1000 * 60 * 60)
      }

    };
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: '/app/overall/bottom/index.html',
      link: linkFn
    }
  }

  angular.module('app.overall').directive('bottomBox', bottomBox);
})();
