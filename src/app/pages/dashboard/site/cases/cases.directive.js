/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function cases() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/site/cases/cases.html',
            controller:'casesCtrl'
        };
    }

    angular.module('app.pages.dashboard.site')
        .directive('cases', cases);

})();
