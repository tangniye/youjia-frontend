/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function step1(User) {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/password/step1.html',
            link: function (scope, el) {

                scope.submit = function (item) {
                    if (scope.form.$valid) {
                        User.verify(item).then(function (res) {
                            scope.$parent.step = 2;
                            scope.$parent.token = res.token;
                        });
                    }

                }
            }
        };
    }

    angular.module('app.pages.password')
        .directive('step1', step1);

})();