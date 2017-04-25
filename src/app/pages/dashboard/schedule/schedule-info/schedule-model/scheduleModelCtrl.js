/**
 * Created by tangniye on 17/4/23.
 */
(function () {
  'use strict';

  /** @ngInject */
  function scheduleModelCtrl($scope, $uibModalInstance, Schedule) {
    var vm = $scope;
    vm.courseOptions = ['托福', '雅思', 'SAT', 'GCSE', 'GRE', 'GMAT', 'LSAT', 'AP', 'IB', 'CRITICAL READING', '其他'];
    vm.teacherOptions = [
      {
        "chinese_name": "中文名称",
        "id": 1006
      }, {
        "chinese_name": "hah",
        "id": 1003
      },
      {
        "chinese_name": "hehe",
        "id": 1002
      }

    ];

    vm.item = vm.data[vm.col] ? angular.copy(vm.data[vm.col]) : {
      student_user_id: vm.userid,
      day: parseInt(vm.col.slice(3)),
      start_time: vm.data.time.start_time,
      stop_time: vm.data.time.stop_time
    };
    console.log(vm.item)

    switch (vm.col) {
      case 'day1':
        vm.week = '星期一';
        break;
      case 'day2':
        vm.week = '星期二';
        break;
      case 'day3':
        vm.week = '星期三';
        break;
      case 'day4':
        vm.week = '星期四';
        break;
      case 'day5':
        vm.week = '星期五';
        break;
      case 'day6':
        vm.week = '星期六';
        break;
      case 'day7':
        vm.week = '星期天';
        break;
    }

    getAvailableTeacher();
    function getAvailableTeacher() {
      var query = {
        day: vm.item.day,
        start_time: vm.item.start_time,
        stop_time: vm.item.stop_time
      };

      Schedule.getAvailableTeacher(query).then(function (res) {
        vm.teacherOptions = res;
      })
    }

    vm.submit = function (item) {

      if (vm.form.$valid) {
        if (vm.add) {
          Schedule.add(item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          })
        }

        if (vm.edit) {
          Schedule.modify(item.id, item).then(function (res) {
            $uibModalInstance.close();
            vm.getdata();
          });
        }

      }
    };

    vm.cancel = function () {
      $uibModalInstance.close();
    };

  }

  angular.module('app.pages.dashboard.schedule.info').controller('scheduleModelCtrl', scheduleModelCtrl);
})();
