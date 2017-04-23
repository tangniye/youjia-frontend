/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function studentModelCtrl($scope, $uibModalInstance, User) {
    var vm = $scope;
    vm.gradeOptions = [
      {value:'初一',group:'初中'},
      {value:'初二',group:'初中'},
      {value:'初三',group:'初中'},
      {value:'高一',group:'高中'},
      {value:'高二',group:'高中'},
      {value:'高三',group:'高中'},
      {value:'大一',group:'大学'},
      {value:'大二',group:'大学'},
      {value:'大三',group:'大学'},
      {value:'大四',group:'大学'},
      {value:'其他',group:'其他'}
    ];
    vm.courseOptions = ['托福', '雅思', 'SAT', 'GCSE', 'GRE', 'GMAT', 'LSAT', 'AP', 'IB', 'CRITICAL READING', '其他'];
    vm.dateOptions = {
      startingDay: 1
    };

    var regx = /^\d{11}$/;

    vm.is_phone_valid = function () {
      return vm.form.phone && vm.form.phone.$viewValue && regx.test(vm.form.phone.$viewValue)
    };

    vm.is_parent_phone_valid = function () {
      return vm.form.parent_phone && vm.form.parent_phone.$viewValue && regx.test(vm.form.parent_phone.$viewValue)
    };

    vm.submit = function (item) {

      if (vm.form.$valid && vm.is_phone_valid() && vm.is_parent_phone_valid()) {

        if (vm.add) {
          User.addStudent(item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          });
        }

        if (vm.edit) {
          User.modifyStudent(item.id, item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          })
        }

      }
    };

    vm.cancel = function () {
      $uibModalInstance.close();
    };


  }

  angular.module('app.pages.dashboard.student').controller('studentModelCtrl', studentModelCtrl);
})();
