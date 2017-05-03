/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function staffCtrl($scope, User) {
    var vm = $scope;

    $scope.queryStr = {
      show: true
    };

    $scope.pageLenghth = 5; // esp for desktop
    $scope.totalPages = 0; // esp for desktop
    $scope.pageIndex = 0; // esp for desktop

    $scope.activeIndexInStaffs = 0; // esp for mobile
    $scope.staffLength = 0;

    // esp for desktop
    $scope.showPreviousPage = function () {
      if ($scope.pageIndex > 0) {
        $scope.pageIndex--;
        $scope.activeStaffs = _.slice($scope.staffs, $scope.pageIndex * $scope.pageLenghth, ($scope.pageIndex + 1) * $scope.pageLenghth);
        var tempStaff = $scope.activeStaffs[Math.floor($scope.pageLenghth / 2)];
        getProfileById(tempStaff.id);
      }
    };
    $scope.showNextPage = function () {
      if ($scope.pageIndex < $scope.totalPages - 1) {
        $scope.pageIndex++;
        $scope.activeStaffs = _.slice($scope.staffs, $scope.pageIndex * $scope.pageLenghth, ($scope.pageIndex + 1) * $scope.pageLenghth);
        var activeLength = $scope.activeStaffs.length;
        var midIndex = Math.floor($scope.pageLenghth / 2);
        var tempStaff = midIndex > activeLength - 1 ? $scope.activeStaffs[activeLength - 1] : $scope.activeStaffs[midIndex];
        getProfileById(tempStaff.id);
      }
    };
    $scope.selectStaffById = function (userId) {
      getProfileById(userId);
    };
    function getProfileById(userId) {
      var indexInStaffs = _.findIndex($scope.staffs, function (e) {
        return e.id === userId;
      });
      $scope.activeStaff = $scope.staffs[indexInStaffs];
    }

    // esp for mobile
    $scope.showPreviousStaff = function () {
      if ($scope.activeIndexInStaffs > 0) {
        getProfileByIndex($scope.activeIndexInStaffs - 1)
      }
    };
    $scope.showNextStaff = function () {
      if ($scope.activeIndexInStaffs < $scope.staffLength - 1) {
        getProfileByIndex($scope.activeIndexInStaffs + 1)
      }
    };
    function getProfileByIndex(indexInStaffs) {
      $scope.activeIndexInStaffs = indexInStaffs;
    }


    function getStaffList(queryStr) {
      User.getTeacherList(queryStr).then(function (res) {
        $scope.staffs = res.items;
        $scope.staffLength = $scope.staffs.length;
        $scope.totalPages = Math.ceil($scope.staffLength / $scope.pageLenghth);
        if ($scope.staffLength > 0) {
          //for mobile
          getProfileByIndex(0);
          $scope.activeIndexInStaffs = 0;

          //for desktop
          $scope.pageIndex = 0;
          $scope.activeStaffs = _.slice($scope.staffs, $scope.pageIndex * $scope.pageLenghth, ($scope.pageIndex + 1) * $scope.pageLenghth);
          var activeLength = $scope.activeStaffs.length;
          var midIndex = Math.floor($scope.pageLenghth / 2);
          var tempStaff = midIndex > activeLength - 1 ? $scope.activeStaffs[activeLength - 1] : $scope.activeStaffs[midIndex];
          getProfileById(tempStaff.id);
        }
      })
    }

    getStaffList($scope.queryStr);

  }

  angular.module('app.pages.staff').controller('staffCtrl', staffCtrl);
})();
