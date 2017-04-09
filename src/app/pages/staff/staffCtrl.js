/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';
    function staffCtrl($scope, Staff, toastr) {
        'ngInject';
        var vm = $scope;
        vm.activeIndex = 3;

        vm.page_total = 1;
        vm.queryStr = {
            page: 1,
            page_size: 5,
            key: '',
            show: true
        };

        getStaffList(vm.queryStr);

        function getStaffList(queryStr) {
            Staff.getStaffList(queryStr).then(function (res) {
                vm.staffs = res.items;

                vm.activeIndex = 3;
                vm.queryStr.page = res.page;
                vm.page_total = res.page_total;

                getProfile(vm.staffs[2].id);
            })
        }

        function getProfile(userid) {
            Staff.getProfile(userid).then(function (res) {
                vm.activeStaff = res;
            })
        }

        // angular.element('.tutors-slider-container-inner').css('width', 1800);
        var margin = parseInt(angular.element('.tutor-item').css('marginRight')),
            itemWidth = angular.element('.avatar-container').outerWidth();
        var anchorDom = angular.element('.anchor');

        vm.seeMore = function (index) {
            if (index === vm.activeIndex) {
                return;
            }
            var offset = "translateX(" + (index - 3) * (margin + itemWidth) + "px)";
            anchorDom.css('transition', 'none').css('transform', offset).css('transform');

            vm.activeIndex = index;
        }

        vm.next = function () {
            vm.queryStr.page += 1;
            vm.queryStr.page = vm.queryStr.page >= vm.page_total ? vm.page_total : vm.queryStr.page;
            getStaffList(vm.queryStr);
        };

        vm.prev = function () {
            vm.queryStr.page -= 1;
            vm.queryStr.page = vm.queryStr.page <= 1 ? 1 : vm.queryStr.page;
            getStaffList(vm.queryStr);
        };

    }

    angular.module('app.pages.staff').controller('staffCtrl', staffCtrl);
})();
