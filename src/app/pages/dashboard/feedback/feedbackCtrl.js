/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function feedbackCtrl($scope, $state, Feedback) {
    var vm = $scope;

    vm.tableData = [
      {
        "chinese_name": "中文名称",
        "count": 1,
        "course_name": "学习课程",
        "create_time": "注册时间",
        "id": 1005,
        "learn_range": "学习范围",
        "location": "目前地址",
        "phone": "",
        "school": "期望学校",
        "update_time": "2017-04-03"
      }, {
        "chinese_name": "中文名称",
        "count": 3,
        "course_name": "学习课程",
        "create_time": "注册时间",
        "id": 1006,
        "learn_range": "学习范围",
        "location": "目前地址",
        "phone": "",
        "school": "期望学校",
        "update_time": "2017-04-03"
      }, {
        "chinese_name": "中文名称",
        "count": 1,
        "course_name": "学习课程",
        "create_time": "注册时间",
        "id": 1007,
        "learn_range": "学习范围",
        "location": "目前地址",
        "phone": "",
        "school": "期望学校",
        "update_time": "2017-04-03"
      }

    ];
    vm.tableColumns = [
      {name: '中文名称', col: 'chinese_name', show: true},
      {name: '注册时间', col: 'create_time', show: true, sort: 'order_create_time'},
      {name: '期望学校', col: 'school', show: true},
      {name: '目前地址', col: 'location', show: true},
      {name: '学习课程', col: 'course_name', show: true},
      {name: '学习范围', col: 'learn_range', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '更新日期', col: 'update_time', show: true},
      {name: '卡片数', col: 'count', show: true},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: view}
    ];
    vm.tableState = {
      sort: {},
      search: {
        key: ''
      },
      pagination: {
        page: 1,
        page_size: 10,
        page_total: 50
      }
    };

    function optionHtml() {
      var html = '<a ng-click="(item.handler)(data)" title="查看"><i class="iconfont icon-magnifier"></i></a>';
      return html
    }

    function view(data) {

      var res = {
        "items": [
          {
            "chinese_name": "中文名",
            "class_time": "8:30-10:00",
            "contents": "课程内容",
            "course_name": "托福",
            "feedback": "课堂反馈",
            "homework": "课后作业",
            "id": 1,
            "section": "听 说 读 写",
            "study_date": "2017-05-05",
            "study_time": "8:00-11:00"
          },
          {
            "chinese_name": "中文名",
            "class_time": "8:30-10:00",
            "contents": "课程内容",
            "course_name": "托福",
            "feedback": "课堂反馈",
            "homework": "课后作业",
            "id": 2,
            "section": "听 说 读 写",
            "study_date": "2017-05-05",
            "study_time": "8:00-11:00"
          }
        ],
        "page_total": 1,
        "page": 1
      };

      $state.go('dashboard.feedbackCard', {id: data.id, data: res});

    }

    vm.callServer = function callServer(queryStr) {
      Feedback.getList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };

    vm.search = function () {
      vm.pipe();
    };

    vm.focus = function () {
      vm.tableState.search.key = '';
    }

  }

  angular.module('app.pages.dashboard.feedback').controller('feedbackCtrl', feedbackCtrl);
})();
