/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function passwordCtrl($scope, User) {
        var vm = $scope;
        vm.step = 1;


    }

    angular.module('app.pages.password').controller('passwordCtrl', passwordCtrl);
})();
