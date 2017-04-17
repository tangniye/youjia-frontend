/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function teacher() {
        return {
            restrict: 'E',
            templateUrl: 'app/pages/dashboard/site/teacher/teacher.html',
            controller:'teacherCtrl'
        };
    }

    angular.module('app.pages.dashboard.site')
        .directive('teacher', teacher);

})();
