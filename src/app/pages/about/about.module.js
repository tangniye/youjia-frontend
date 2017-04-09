/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    function routeConfig($stateProvider) {
        'ngInject';
        $stateProvider
            .state('about', {
                url: '/about',
                title: '关于我们',
                templateUrl: '/app/pages/about/about.html',
                controller: 'aboutCtrl'
            });
    }

    angular.module('app.pages.about', [])
        .config(routeConfig);
})();
