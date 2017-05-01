/**
 * Created by tangniye on 17/4/17.
 */
(function () {
  'use strict';

  /** @ngInject */
  function studentModelCtrl($scope, $uibModalInstance, User, Common, toastr) {
    var vm = $scope;
    var success_add_model_template_url = 'app/pages/dashboard/student/success-add-model/success-add-model.html';
    vm.item = vm.item || {};

    vm.gradeOptions = [
      {value: '初一', group: '初中'},
      {value: '初二', group: '初中'},
      {value: '初三', group: '初中'},
      {value: '高一', group: '高中'},
      {value: '高二', group: '高中'},
      {value: '高三', group: '高中'},
      {value: '大一', group: '大学'},
      {value: '大二', group: '大学'},
      {value: '大三', group: '大学'},
      {value: '大四', group: '大学'},
      {value: '其他', group: '其他'}
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

        item.enrollment_time = item.enrollment_time ? moment(item.enrollment_time).format('YYYY-MM-DD') : null;

        if (vm.add) {
          User.addStudent(item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
            Common.model.promptModel('successAddModelCtrl', success_add_model_template_url, 'md', true, 'common-modal');
          });
        }

        if (vm.edit) {
          User.modifyStudent(item.id, item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
            toastr.success('修改成功', '', {'closeButton': true});
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
