/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('index', {
                url: '/index',
                title: '首页',
                templateUrl: '/app/pages/index/index.html',
                controller: 'indexCtrl'
            });
    }

    angular.module('app.pages.index', [])
        .config(routeConfig);
})();
