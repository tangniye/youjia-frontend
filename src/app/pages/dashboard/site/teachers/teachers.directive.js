/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function teachers() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/site/teachers/teachers.html',
            controller:'teachersCtrl'
        };
    }

    angular.module('app.pages.dashboard.site')
        .directive('teachers', teachers);

})();
