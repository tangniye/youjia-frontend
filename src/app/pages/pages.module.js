/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function routeConfig($urlRouterProvider) {

        $urlRouterProvider.otherwise('/index');

    }

    angular.module('app.pages', [
            'ui.router',
            'app.pages.index',
            'app.pages.staff',
            'app.pages.about',
            'app.pages.case',
            'app.pages.password'

        ])
        .config(routeConfig);

})();
