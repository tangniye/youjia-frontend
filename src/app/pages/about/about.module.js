/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('app.pages.about', {
                url: '/about',
                title: '关于我们',
                templateUrl: 'app/pages/about/about.html',
                controller: 'aboutCtrl'
            });
    }

    angular.module('app.pages.about', [])
        .config(routeConfig);
})();
