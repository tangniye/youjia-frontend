/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function staffCtrl($scope, User, Audition, toastr) {
    var vm = $scope;

    vm.queryStr = {
      show: true
    };

    vm.pageLenghth = 5; // esp for desktop
    vm.totalPages = 0; // esp for desktop
    vm.pageIndex = 0; // esp for desktop

    vm.activeIndexInStaffs = 0; // esp for mobile
    vm.staffLength = 0;

    // esp for desktop
    vm.showPreviousPage = function () {
      if (vm.pageIndex > 0) {
        vm.pageIndex--;
        vm.activeStaffs = _.slice(vm.staffs, vm.pageIndex * vm.pageLenghth, (vm.pageIndex + 1) * vm.pageLenghth);
        var tempStaff = vm.activeStaffs[Math.floor(vm.pageLenghth / 2)];
        getProfileById(tempStaff.id);
      }
    };
    vm.showNextPage = function () {
      if (vm.pageIndex < vm.totalPages - 1) {
        vm.pageIndex++;
        vm.activeStaffs = _.slice(vm.staffs, vm.pageIndex * vm.pageLenghth, (vm.pageIndex + 1) * vm.pageLenghth);
        var activeLength = vm.activeStaffs.length;
        var midIndex = Math.floor(vm.pageLenghth / 2);
        var tempStaff = midIndex > activeLength - 1 ? vm.activeStaffs[activeLength - 1] : vm.activeStaffs[midIndex];
        getProfileById(tempStaff.id);
      }
    };
    vm.selectStaffById = function (userId) {
      getProfileById(userId);
    };
    function getProfileById(userId) {
      var indexInStaffs = _.findIndex(vm.staffs, function (e) {
        return e.id === userId;
      });
      vm.activeStaff = vm.staffs[indexInStaffs];
    }

    // esp for mobile
    vm.showPreviousStaff = function () {
      if (vm.activeIndexInStaffs > 0) {
        getProfileByIndex(vm.activeIndexInStaffs - 1)
      }
    };
    vm.showNextStaff = function () {
      if (vm.activeIndexInStaffs < vm.staffLength - 1) {
        getProfileByIndex(vm.activeIndexInStaffs + 1)
      }
    };
    function getProfileByIndex(indexInStaffs) {
      vm.activeIndexInStaffs = indexInStaffs;
    }


    function getStaffList(queryStr) {
      User.getTeacherList(queryStr).then(function (res) {
        vm.staffs = res.items;
        vm.staffLength = vm.staffs.length;
        vm.totalPages = Math.ceil(vm.staffLength / vm.pageLenghth);

        initialActiveStaffs();
      })
    }

    function initialActiveStaffs() {
      if (vm.staffLength > 0) {
        //for mobile
        getProfileByIndex(0);
        vm.activeIndexInStaffs = 0;

        //for desktop
        vm.pageIndex = 0;
        vm.activeStaffs = _.slice(vm.staffs, vm.pageIndex * vm.pageLenghth, (vm.pageIndex + 1) * vm.pageLenghth);
        var activeLength = vm.activeStaffs.length;
        var midIndex = Math.floor(vm.pageLenghth / 2);
        var tempStaff = midIndex > activeLength - 1 ? vm.activeStaffs[activeLength - 1] : vm.activeStaffs[midIndex];
        getProfileById(tempStaff.id);
      }
    }

    getStaffList(vm.queryStr);

    vm.regx = /^\d{11}$/;

    vm.apply = function () {
      if (vm.form.$valid) {
        Audition.add(vm.item).then(function (res) {
          toastr.success('请等待通知', '预约成功', {'closeButton': true});
          vm.form.$setPristine();
          vm.form.$setUntouched();
          delete vm.item
        })
      }

    };

    $('.tutor').on('swipeLeft', function () {
      vm.$apply(function() {
        vm.showNextStaff();
      })
    }).on('swipeRight', function () {
      vm.$apply(function() {
        vm.showPreviousStaff();
      })
    })

  }

  angular.module('app.pages.staff').controller('staffCtrl', staffCtrl);
})();
