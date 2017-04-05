/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    
    function pageTop() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/pageTop/pageTop.html',
            link: function (scope, el) {
               
            }
        };
    }

    angular.module('app.components')
        .directive('pageTop', pageTop);

})();