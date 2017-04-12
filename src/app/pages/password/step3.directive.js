/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function step3() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/password/step3.html',
            link: function (scope, el) {
               
            }
        };
    }

    angular.module('app.pages.password')
        .directive('step3', step3);

})();