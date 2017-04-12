/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function step2() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/password/step2.html',
            link: function (scope, el) {
               
            }
        };
    }

    angular.module('app.pages.password')
        .directive('step2', step2);

})();