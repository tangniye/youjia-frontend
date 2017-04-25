/**
 * Created by tangniye on 17/4/25.
 */
(function () {
  'use strict';

  /** @ngInject */
  function exportCtrl($scope, $location, $http) {

    var vm = $scope;
    var userid = $location.search().user_id;

    vm.userInfo = {
      "profile": {
        "chinese_name": "中文名称",
        "english_name": "英文名称",
        "sexual": "性别",
        "location": "所在地",
        "age": "年龄",
        "school": "学校",
        "grade": "年级",
        "study_country": "期望留学国家",
        "enrollment_time": "预计入学时间",
        "major": "期望留学专业",
        "course_name": "课程名字",
        "learn_range": "学习范围",
        "wechat": "微信",
        "phone": "手机号码",
        "parent_phone": "家长手机号码",
        "remark": "备注"
      },
      "course_table": [
        {
          "chinese_name": "中文名称",
          "course_name": "托福读",
          "day": 5,
          "start_time": "19:00",
          "stop_time": "21:00"
        },
        {
          "chinese_name": "中文名称",
          "course_name": "托福读",
          "day": 4,
          "start_time": "19:00",
          "stop_time": "21:00"
        }
      ],
      "feedback": [
        {
          "chinese_name": "中文名",
          "class_time": "8:30",
          "contents": "课程内容",
          "course_name": "托福",
          "feedback": "课堂反馈",
          "homework": "课后作业",
          "section": "听 说 读 写",
          "study_date": "2017-05-05",
          "leave_time": "11:00"
        },
        {
          "chinese_name": "中文名",
          "class_time": "8:30",
          "contents": "课程内容",
          "course_name": "托福",
          "feedback": "课堂反馈",
          "homework": "课后作业",
          "section": "听 说 读 写",
          "study_date": "2017-05-05",
          "leave_time": "11:00"
        }
      ]
    };
    vm.userInfo.course_table = courseHandler(vm.userInfo.course_table);

    vm.profileColumns = [
      [
        {name: '中文名称：', col: 'chinese_name'},
        {name: '所在地：', col: 'location'},
        {name: '年级：', col: 'grade'},
        {name: '期望留学专业：', col: 'major'},
        {name: '微信：', col: 'wechat'}
      ],
      [
        {name: '英文名称：', col: 'english_name'},
        {name: '年龄：', col: 'age'},
        {name: '期望留学国家：', col: 'study_country'},
        {name: '学习课程：', col: 'course_name'},
        {name: '手机号码：', col: 'phone'}
      ],
      [
        {name: '性别：', col: 'sexual'},
        {name: '学校：', col: 'school'},
        {name: '预计入学时间：', col: 'enrollment_time'},
        {name: '学习范围：', col: 'learn_range'},
        {name: '家长手机号码：', col: 'parent_phone'}
      ]
    ];
    vm.scheduleColumns = [
      {name: '节次', col: 'meridian', show: true},
      {name: '时间', col: 'time', show: true, html: timeHtml},
      {name: '星期一', col: 'day1', show: true, html: courseHtml},
      {name: '星期二', col: 'day2', show: true, html: courseHtml},
      {name: '星期三', col: 'day3', show: true, html: courseHtml},
      {name: '星期四', col: 'day4', show: true, html: courseHtml},
      {name: '星期五', col: 'day5', show: true, html: courseHtml},
      {name: '星期六', col: 'day6', show: true, html: courseHtml},
      {name: '星期天', col: 'day7', show: true, html: courseHtml}
    ];

    function timeHtml(data) {
      return data.start_time + '-' + data.stop_time;
    }

    function courseHtml(data) {
      if (!data) {
        return '';
      }
      return '<h3>' + data.course_name + '</h3><p>' + data.chinese_name + '</p>';
    }

    callServer();
    function callServer() {
      $http.get('/api/account/summary?user_id=' + userid).success(function (res) {
        vm.userInfo = res;
        vm.userInfo.course_table = courseHandler(vm.userInfo.course_table);
        console.log(res)
      }).error(function (res) {
        console.log(res)
      });
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
      // data[0]['day1'] = '<p>雅思</p><p>杨老师</p>'
      return data
    }

  }

  angular.module('export').controller('exportCtrl', exportCtrl);
})();
