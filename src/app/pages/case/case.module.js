/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('case', {
                url: '/case',
                title: '成功案例',
                templateUrl: '/app/pages/case/case.html',
                controller: 'caseCtrl'
            });
    }

    angular.module('app.pages.case', [])
        .config(routeConfig);
})();
