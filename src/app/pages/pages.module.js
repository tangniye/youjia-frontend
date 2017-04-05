/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    function routeConfig($urlRouterProvider) {

        $urlRouterProvider.otherwise('/index');

    }

    angular.module('app.pages', [
            'ui.router',
            'app.pages.index',
            'app.pages.staff'

        ])
        .config(routeConfig);

})();
