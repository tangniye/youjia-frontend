/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function pageTop($rootScope, $cookies, $state, Common, User) {
    return {
      restrict: 'E',
      scope: true,
      templateUrl: 'app/components/pageTop/pageTop.html',
      link: function (scope, el) {

        $rootScope.me = $cookies.getObject('me');

        scope.promptLogin = function () {
          Common.model.promptModel('loginModelCtrl', 'app/components/login-model/login-model.html', 'sm', '', 'login-modal')
        };

        scope.logout = function () {
          User.logout().then(function () {
            $cookies.remove('me');
            $rootScope.me = null;
            $state.go('index');
          })
        }

      }
    };
  }

  angular.module('app.components')
    .directive('pageTop', pageTop);

})();
