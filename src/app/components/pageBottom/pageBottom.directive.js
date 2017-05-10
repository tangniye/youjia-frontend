/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function pageBottom() {
        return {
            restrict: 'E',
          replace: true,
            templateUrl: 'app/components/pageBottom/pageBottom.html'
        };
    }

    angular.module('app.components')
        .directive('pageBottom', pageBottom);

})();
