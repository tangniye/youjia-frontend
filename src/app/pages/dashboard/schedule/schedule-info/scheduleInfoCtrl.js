/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function scheduleInfoCtrl($scope, $stateParams, $cookies, $state, Schedule, Common, toastr) {
    var vm = $scope;
    var schedule_model_template_url = 'app/pages/dashboard/schedule/schedule-info/schedule-model/schedule-model.html';

    vm.userid = $stateParams.id;
    vm.role = $stateParams.role;

    vm.edit = $cookies.get('scheduleOption') === 'edit' ? true : false;

    vm.tableColumns = [
      {name: '节次', col: 'meridian', show: true},
      {name: '时间', col: 'time', show: true, html: timeHtml},
      {name: '星期一', col: 'day1', show: true, html: courseHtml, handler: [add, edit, del]},
      {name: '星期二', col: 'day2', show: true, html: courseHtml, handler: [add, edit, del]},
      {name: '星期三', col: 'day3', show: true, html: courseHtml, handler: [add, edit, del]},
      {name: '星期四', col: 'day4', show: true, html: courseHtml, handler: [add, edit, del]},
      {name: '星期五', col: 'day5', show: true, html: courseHtml, handler: [add, edit, del]},
      {name: '星期六', col: 'day6', show: true, html: courseHtml, handler: [add, edit, del]},
      {name: '星期天', col: 'day7', show: true, html: courseHtml, handler: [add, edit, del]}
    ];

    function timeHtml(data) {
      return data.start_time + '-' + data.stop_time;
    }

    function courseHtml(data) {
      if (!data) {
        return '<i class="iconfont icon-pencil-circle-o" ng-click="(item.handler[0])(data,item.col)" ng-if="edit" title="编辑" permission permission-only="\'ADMIN\'"></i>';
      }
      var html = '<p class="main-color font24">' + data.course_name + '</p>' +
        '<p>' + data.chinese_name + '<i class="iconfont icon-note ml5" ng-click="(item.handler[1])(data,item.col)" title="编辑" ng-if="edit" permission permission-only="\'ADMIN\'"></i>' +
        '<i class="iconfont icon-delete ml5" ng-click="(item.handler[2])(data,item.col)" title="删除" ng-if="edit" permission permission-only="\'ADMIN\'"></i></p>';
      return html;
    }

    function add(data, col) {
      Common.model.promptModel('scheduleModelCtrl', schedule_model_template_url, 'md', true, 'common-modal', {
        add: true,
        data: data,
        col: col,
        userid: vm.userid,
        getdata: callServer
      })
    }

    function edit(data, col) {
      Common.model.promptModel('scheduleModelCtrl', schedule_model_template_url, 'md', true, 'common-modal', {
        edit: true,
        data: data,
        col: col,
        userid: vm.userid,
        getdata: callServer
      })
    }

    function del(data, col) {
      var id = data[col].id;
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除该课程吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Schedule.delete(id).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
            callServer(vm.userid);
          });
        }
      });
    }

    callServer(vm.userid);

    function callServer(userid) {
      Schedule.getByUserId(userid).then(function (res) {
        vm.tableData = courseHandler(res);
      })
    }

    function courseHandler(arr) {
      var data = [
        {
          "meridian": "上午",
          "time": {"start_time": "08:30", "stop_time": "10:00"},
          "day1": '',
          "day2": '',
          "day3": '',
          "day4": '',
          "day5": '',
          "day6": '',
          "day7": ''
        },
        {
          "meridian": "上午",
          "time": {"start_time": "10:00", "stop_time": "12:00"},
          "day1": '',
          "day2": '',
          "day3": '',
          "day4": '',
          "day5": '',
          "day6": '',
          "day7": ''
        },
        {
          "meridian": "下午",
          "time": {"start_time": "13:30", "stop_time": "15:30"},
          "day1": '',
          "day2": '',
          "day3": '',
          "day4": '',
          "day5": '',
          "day6": '',
          "day7": ''
        },
        {
          "meridian": "下午",
          "time": {"start_time": "15:30", "stop_time": "17:30"},
          "day1": '',
          "day2": '',
          "day3": '',
          "day4": '',
          "day5": '',
          "day6": '',
          "day7": ''
        },
        {
          "meridian": "晚上",
          "time": {"start_time": "19:00", "stop_time": "21:00"},
          "day1": '',
          "day2": '',
          "day3": '',
          "day4": '',
          "day5": '',
          "day6": '',
          "day7": ''
        }
      ];

      for (var i in arr) {
        var idx;
        switch (arr[i].start_time) {
          case '08:30':
            idx = 0;
            break;
          case '10:00':
            idx = 1;
            break;
          case '13:30':
            idx = 2;
            break;
          case '15:30':
            idx = 3;
            break;
          case '19:00':
            idx = 4;
            break;
        }
        data[idx]['day' + arr[i].day] = {
          id: arr[i].id,
          course_name: arr[i].course_name,
          chinese_name: arr[i].chinese_name
        };

      }
      return data
    }

    vm.deleteAll = function () {
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认清空该学生的所有课程吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Schedule.deleteAll(vm.userid).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
            callServer(vm.userid);
          });
        }
      });
    };

    vm.return = function () {
      switch (vm.role) {
        case 'student':
          $state.go('app.pages.dashboard.schedule.student');
          break;
        case 'teacher':
          $state.go('app.pages.dashboard.schedule.teacher');
          break;
      }
    }

    vm.is_delete_all_disabled = function () {
      var idx = _.findIndex(vm.tableData, function (td) {
        return td.day1 || td.day2 || td.day3 || td.day4 || td.day5 || td.day6 || td.day7
      });
      return idx < 0
    }

  }

  angular.module('app.pages.dashboard.schedule.info').controller('scheduleInfoCtrl', scheduleInfoCtrl);
})();
