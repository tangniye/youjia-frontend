/**
 * Created by tangniye on 17/4/6.
 */
(function () {
    'use strict';

    /** @ngInject */
    function caseCtrl($scope, Case) {
        var vm = $scope;

        vm.queryStr = {
            page: 1,
            page_size: 1,
            tag: '雅思'
        };

        vm.page_total = 1;

        vm.seeMore = function (tag) {
            if (tag === vm.queryStr.tag) {
                return
            }
            vm.queryStr.tag = tag;
            getCaseList(vm.queryStr);
        };

        vm.seeMore(vm.queryStr.tag);

        vm.next = function () {
            if (vm.queryStr.page >= vm.page_total) {
                return;
            }
            vm.queryStr.page += 1;
            getCaseList(vm.queryStr);
        };

        vm.prev = function () {
            if (vm.queryStr.page <= 1) {
                return
            }
            getCaseList(vm.queryStr);
        };

        function getCaseList(queryStr) {
            Case.getCaseList(queryStr).then(function (res) {
                vm.cases = res.items;
                vm.queryStr.page = res.page_index;
                vm.page_total = res.page_total;
            })
        }
    }

    angular.module('app.pages.case').controller('caseCtrl', caseCtrl);
})();
