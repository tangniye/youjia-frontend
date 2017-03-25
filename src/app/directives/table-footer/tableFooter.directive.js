/**
 * Created by tangniye on 2017/3/16.
 */
'use strict';
(function () {
    function tableFooter() {
        'ngInject';
        var linkFn = function (scope, elem, attr) {
        };

        return {
            restrict: 'EA',
            replace: true,
            templateUrl: '/app/directives/table-footer/index.html',
            link: linkFn
        }
    }

    angular.module('app').directive('tableFooter', tableFooter);
})();
