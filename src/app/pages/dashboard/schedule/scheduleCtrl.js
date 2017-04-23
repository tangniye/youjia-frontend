/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function scheduleCtrl($scope) {
    var vm = $scope;

    vm.search = function () {
      vm.$broadcast('searchChanged', vm.key);
    };

    vm.focus = function () {
      vm.key = '';
    }
  }

  angular.module('app.pages.dashboard.schedule').controller('scheduleCtrl', scheduleCtrl);
})();
