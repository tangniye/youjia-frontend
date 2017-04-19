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
          getCaseDetailList(vm.queryStr);
        };

        vm.next = function () {
            if (vm.queryStr.page >= vm.page_total) {
                return;
            }
            vm.queryStr.page += 1;
          getCaseDetailList(vm.queryStr);
        };

        vm.prev = function () {
            if (vm.queryStr.page <= 1) {
                return
            }
          getCaseDetailList(vm.queryStr);
        };

        function getCaseDetailList(queryStr) {
            Case.getCaseDetailList(queryStr).then(function (res) {
                vm.cases = res.items;
                vm.queryStr.page = res.page;
                vm.page_total = res.page_total;
            })
        }

        getCaseDetailList(vm.queryStr);

    }

    angular.module('app.pages.case').controller('caseCtrl', caseCtrl);
})();
