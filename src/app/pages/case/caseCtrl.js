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

        vm.toggle = function (tag) {
            if (tag === vm.queryStr.tag) {
                return
            }
            vm.queryStr.tag = tag;
            vm.queryStr.page = 1;
            vm.queryStr.page_size = 1;
          getCaseDetailList(vm.queryStr);
        };

        vm.next = function () {
            if (vm.queryStr.page >= vm.page_total) {
                return;
            }
            vm.queryStr.page += 1;
            vm.queryStr.page_size = 1;
            getCaseDetailList(vm.queryStr);
        };

        vm.prev = function () {
            if (vm.queryStr.page <= 1) {
                return
            }
            vm.queryStr.page -= 1;
            vm.queryStr.page_size = 1;
            getCaseDetailList(vm.queryStr);
        };

        vm.seeMore = function () {
            vm.queryStr.page = 1;
            vm.queryStr.page_size +=5;
            getCaseDetailList(vm.queryStr);
        };

        function getCaseDetailList(queryStr) {
            Case.getCaseDetailList(queryStr).then(function (res) {
                vm.cases = res.items;
                vm.queryStr.page = res.page;
                vm.page_total = res.page_total;
                vm.total = res.total;
            })
        }

        getCaseDetailList(vm.queryStr);

    }

    angular.module('app.pages.case').controller('caseCtrl', caseCtrl);
})();
