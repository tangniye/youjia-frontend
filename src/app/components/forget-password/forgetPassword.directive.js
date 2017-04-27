(function () {
  'use strict';

  /** @ngInject */
  function forgetPassword() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/forget-password/index.html',
      controller: function ($scope) {
        $scope.step = 1;
      }
    };
  }
  function forgetPasswordStep1() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/forget-password/step-1.html',
      link: function (scope, elem, attrs) {
        scope.submit = function (item) {
          // if (scope.form.$valid) {
          //   User.verify(item).then(function (res) {
          //     scope.$parent.step = 2;
          //     scope.$parent.token = res.token;
          //   });
          // }
          scope.$parent.step = 2
        }
      }
    }
  }
  function forgetPasswordStep2() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/forget-password/step-2.html',
      link: function (scope, elem, attrs) {
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
          User.checkPwd({password:oldpwd}).then(function (res) {
            scope.is_oldpassword_valid = true;
          },function () {
            scope.is_oldpassword_valid = false;
          })
        };

        scope.submit = function (item) {
          // if (scope.form.$valid && scope.is_password_equal() && scope.is_password_valid()) {
          //
          //   if(scope.$parent.token) {
          //     item.token = scope.$parent.token;
          //   }
          //   resetPwd(item);
          // }
          scope.$parent.step = 3
        };

        function resetPwd(item) {
          User.resetPwd(item).then(function (res) {
            scope.$parent.step = 3;
          });
        }
      }
    }
  }

  function forgetPasswordStep3() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/forget-password/step-3.html',
      link: function (scope, elem, attrs) {

      }
    }
  }

  angular.module('app.components')
    .directive('forgetPasswordStep1', forgetPasswordStep1)
    .directive('forgetPasswordStep2', forgetPasswordStep2)
    .directive('forgetPasswordStep3', forgetPasswordStep3)
    .directive('forgetPassword', forgetPassword);

})();
