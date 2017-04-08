/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    function staffCtrl($scope) {
        'ngInject';
        var vm = $scope;
        vm.activeIndex = 3;
        angular.element('.tutors-slider-container-inner').css('width', 1800);
        var margin = 85,
            itemWidth = 120,
            activeWidth = 160;
        var anchorDom = angular.element('.anchor');
        console.log(anchorDom)

        vm.seeMore = function (index) {
            if (index === vm.activeIndex) {
                return;
            }
            var offset = "translateX(" + (index - 3) * 205 + "px)";
            anchorDom.css('transition', 'none').css('transform', offset).css('transform');

            vm.activeIndex = index;
        }

    }

    angular.module('app.pages.staff').controller('staffCtrl', staffCtrl);
})();
