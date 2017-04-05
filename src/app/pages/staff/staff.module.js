/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    function routeConfig($stateProvider) {
        'ngInject';
        $stateProvider
            .state('staff', {
                url: '/staff',
                title: '师资团队',
                templateUrl: '/app/pages/staff/staff.html',
                controller: 'staffCtrl'
            });
    }

    angular.module('app.pages.staff', ['ui.router'])
        .config(routeConfig);
})();
