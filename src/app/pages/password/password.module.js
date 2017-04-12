/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('password', {
                url: '/password',
                title: '忘记密码',
                templateUrl: '/app/pages/password/password.html',
                controller: 'passwordCtrl'
            });
    }

    angular.module('app.pages.password', [])
        .config(routeConfig);
})();
