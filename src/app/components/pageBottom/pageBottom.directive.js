/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    
    function pageBottom() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/pageBottom/pageBottom.html',
            link: function (scope, el) {
               
            }
        };
    }

    angular.module('app.components')
        .directive('pageBottom', pageBottom);

})();