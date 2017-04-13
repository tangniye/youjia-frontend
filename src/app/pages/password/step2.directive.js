/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function step2(User) {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/password/step2.html',
            link: function (scope, el) {

                var regx = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$';

                scope.is_password_equal = function () {
                    return scope.form.repassword && scope.form.password.$viewValue === scope.form.repassword.$viewValue;
                };

                scope.is_password_valid = function () {
                    return scope.form.password && scope.form.password.$viewValue && scope.form.password.$viewValue.match(regx);
                };

                scope.submit = function (item) {
                    if (scope.form.$valid && scope.is_password_equal() && scope.is_password_valid()) {
                        User.isLogin().then(function (res) {
                            resetPwd(item);
                        }, function (res) {
                            item.token = scope.$parent.token;
                            resetPwd(item);
                        });
                    }
                };

                function resetPwd(item) {
                    User.resetPwd(item).then(function (res) {
                        scope.$parent.step = 3;
                    });
                }
            }
        };
    }

    angular.module('app.pages.password')
        .directive('step2', step2);

})();