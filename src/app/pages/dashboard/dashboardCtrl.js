/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function dashboardCtrl($scope, $cookies) {
    var vm = $scope;

    vm.me = $cookies.getObject('me');

  }

  angular.module('app.pages.dashboard').controller('dashboardCtrl', dashboardCtrl);
})();
