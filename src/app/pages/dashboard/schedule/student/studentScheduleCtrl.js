/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function studentScheduleCtrl($scope, $state, $cookies, Schedule) {
    var vm = $scope;

    vm.tableData = [
      {
        "id": 1001,
        "chinese_name": "",
        "course_name": "学习课程",
        "create_time": "注册时间",
        "learn_range": "学习范围",
        "location": "目前地址",
        "phone": "",
        "status": "已创建/未创建",
        "study_country": "期望学校",
        "update_time": "2017-04-01"
      },
      {
        "id": 1001,
        "chinese_name": "",
        "course_name": "学习课程",
        "create_time": "注册时间",
        "learn_range": "学习范围",
        "location": "目前地址",
        "phone": "",
        "status": "已创建/未创建",
        "study_country": "期望学校",
        "update_time": "2017-04-01"
      },
      {
        "id": 1001,
        "chinese_name": "",
        "course_name": "学习课程",
        "create_time": "注册时间",
        "learn_range": "学习范围",
        "location": "目前地址",
        "phone": "",
        "status": "已创建/未创建",
        "study_country": "期望学校",
        "update_time": "2017-04-01"
      }
    ];
    vm.tableColumns = [
      {name: '中文名称', col: 'chinese_name', show: true},
      {name: '注册时间', col: 'create_time', show: true, sort: 'order_create_time'},
      {name: '期望学校', col: 'study_country', show: true},
      {name: '目前地址', col: 'location', show: true},
      {name: '学习课程', col: 'course_name', show: true},
      {name: '学习范围', col: 'learn_range', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '课表状态', col: 'status', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: 'order_update_time'},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: [view, edit]}
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
      var html = '<a ng-click="(item.handler[0])(data)" title="查看"><i class="iconfont icon-magnifier"></i></a>' +
        '<a ng-click="(item.handler[1])(data)" title="修改"><i class="iconfont icon-pencil"></i></a>';
      return html
    }

    function view(data) {
      $cookies.put('scheduleOption', 'view');
      $state.go('dashboard.scheduleInfo', {id: data.id, role: 'student'})
    }

    function edit(data) {
      $cookies.put('scheduleOption', 'edit');
      $state.go('dashboard.scheduleInfo', {id: data.id, role: 'student'})
    }

    vm.callServer = function callServer(queryStr) {
      Schedule.getStudentList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };

    vm.$on('searchChanged', function (event, data) {
      vm.tableState.search.key = data;
      vm.pipe();
    })

  }

  angular.module('app.pages.dashboard.schedule.student').controller('studentScheduleCtrl', studentScheduleCtrl);
})();
