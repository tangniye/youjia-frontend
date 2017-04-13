/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function step1() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/password/step1.html',
            link: function (scope, el) {
               
            }
        };
    }

    angular.module('app.pages.password')
        .directive('step1', step1);

})();