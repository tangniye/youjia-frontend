(function () {
  'use strict';

  /** @ngInject */
  function updatePassword() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/update-password/index.html',
      controller: function ($scope) {
        $scope.step = 1;
      }
    };
  }

  /** @ngInject */
  function updatePasswordStep1(User) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/update-password/step-1.html',
      link: function (scope, elem, attrs) {

        scope.is_oldpassword_valid = true;
        var regx = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

        scope.is_password_equal = function () {
          return scope.form.repassword && scope.form.password.$viewValue === scope.form.repassword.$viewValue;
        };

        scope.is_password_valid = function () {
          return scope.form.password && scope.form.password.$viewValue && regx.test(scope.form.password.$viewValue);
        };

        scope.check = function (oldpwd) {
          if (!oldpwd) {
            scope.is_oldpassword_valid = false;
            return;
          }
          User.checkPwd({password: oldpwd}).then(function (res) {
            scope.is_oldpassword_valid = true;
          }, function () {
            scope.is_oldpassword_valid = false;
          })
        };

        scope.submit = function (item) {
          if (scope.form.$valid && scope.is_password_equal() && scope.is_password_valid()) {
            resetPwd(item);
          }
        };

        function resetPwd(item) {
          User.resetPwd(item).then(function (res) {
            scope.$parent.step = 2;
          });
        }

      }
    }
  }

  /** @ngInject */
  function updatePasswordStep2() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/update-password/step-2.html'
    }
  }


  angular.module('app.components')
    .directive('updatePasswordStep1', updatePasswordStep1)
    .directive('updatePasswordStep2', updatePasswordStep2)
    .directive('updatePassword', updatePassword);

})();
