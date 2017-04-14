/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function pageTop($rootScope, $cookies, $state, Common, User) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/pageTop/pageTop.html',
      link: function (scope, el) {

        scope.me = $cookies.getObject('me');

        scope.promptLogin = function () {
          Common.model.promptModel('loginModelCtrl', 'app/components/login/loginModel.html', 'sm', '', 'login-modal')
        };

        scope.logout = function () {
          User.logout().then(function () {
            $cookies.remove('me');
            $state.go('index');
          })
        }

      }
    };
  }

  angular.module('app.components')
    .directive('pageTop', pageTop);

})();
