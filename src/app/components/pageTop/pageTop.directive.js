/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    
    /** @ngInject */
    function pageTop(Common) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/pageTop/pageTop.html',
            link: function (scope, el) {
                
               scope.promptLogin = function () {
                   Common.model.promptModel('loginModelCtrl','app/components/login/loginModel.html','sm','','login-modal')
               }
                
            }
        };
    }

    angular.module('app.components')
        .directive('pageTop', pageTop);

})();