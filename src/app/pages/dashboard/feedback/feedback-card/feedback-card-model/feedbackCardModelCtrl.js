/**
 * Created by tangniye on 17/4/20.
 */
(function () {
  'use strict';

  /** @ngInject */
  function feedbackCardModelCtrl($scope, $uibModalInstance, Feedback) {
    var vm = $scope;
    vm.courseOptions = ['托福', '雅思', 'SAT', 'GCSE', 'GRE', 'GMAT', 'LSAT', 'AP', 'IB', 'CRITICAL READING', '其他'];

    var cur_user = vm.cur_user;

    vm.dateOptions = {
      startingDay: 1
    };

    if (vm.edit && vm.item) {
      vm.item = angular.copy(vm.item);

      var class_time_stamp = vm.item.study_date + ' ' + vm.item.class_time;
      var leave_time_stamp = vm.item.study_date + ' ' + vm.item.leave_time;

      var d1 = new Date(class_time_stamp);
      var d2 = new Date(leave_time_stamp);

      vm.item.class_time = d1;
      vm.item.leave_time = d2;
      vm.item.study_date = new Date(vm.item.study_date);
    }

    vm.is_class_time_valid = function () {
      return vm.form.class_time && vm.form.class_time.$viewValue && vm.form.class_time.$valid;
    };

    vm.is_leave_time_valid = function () {
      return vm.form.leave_time && vm.form.leave_time.$viewValue && vm.form.leave_time.$valid;
    };

    vm.submit = function (item) {

      if (vm.form.$valid && vm.is_class_time_valid() && vm.is_leave_time_valid()) {
        var _item = angular.copy(item);

        _item.study_date = moment(item.study_date).format('YYYY-MM-DD');
        _item.class_time = moment(item.class_time).format('HH:mm');
        _item.leave_time = moment(item.leave_time).format('HH:mm');

        if (vm.add) {
          Feedback.add(cur_user.id, _item).then(function (res) {
            $uibModalInstance.close();
            debugger
            vm.getdata(1);
          });
        }

        if (vm.edit) {
          Feedback.modify(_item.id, _item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata(1);
          })
        }

      }
    };

  }

  angular.module('app.pages.dashboard.feedback.card').controller('feedbackCardModelCtrl', feedbackCardModelCtrl);
})();
