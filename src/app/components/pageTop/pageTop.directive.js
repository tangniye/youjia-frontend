/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function pageTop() {
    return {
      restrict: 'E',
      scope: true,
      replace: true,
      templateUrl: 'app/components/pageTop/pageTop.html',
      controller: 'pageTopCtrl'
    }
  }

  function pageTopCtrl($scope, $rootScope, $cookies, $state, Common, User) {

    $rootScope.me = $cookies.getObject('me');

    $scope.promptLogin = function () {
      Common.model.promptModel('loginModelCtrl', 'app/components/login-model/login-model.html', 'sm', '', 'login-modal')
    };

    $scope.logout = function () {
      User.logout().then(function () {
        $cookies.remove('me');
        $rootScope.me = null;
        $state.go('app.pages.index');
      })
    }
  }

  angular.module('app.components')
    .controller('pageTopCtrl', pageTopCtrl)
    .directive('pageTop', pageTop);

})();
