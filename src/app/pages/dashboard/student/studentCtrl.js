/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function studentCtrl($scope, Common, User) {
    var vm = $scope;
    var student_model_template_url = 'app/pages/dashboard/student/student-model/student-model.html';
    var archive_model_template_url = 'app/pages/dashboard/student/archive-model/archive-model.html';

    vm.tableData = [
      {
        "id": 1001,
        "age": 18,
        "chinese_name": "中文名称",
        "course_name": "托福",
        "location": "成都",
        "phone": "13709065417",
        "school": "学校",
        "sexual": "男",
        "update_time": "2017-04-01 11:17:31"
      },
      {
        "id": 1002,
        "age": 18,
        "chinese_name": "中文名称",
        "course_name": "托福",
        "location": "成都",
        "phone": "13709065417",
        "school": "学校",
        "sexual": "男",
        "update_time": "2017-04-01 11:17:31"
      },
      {
        "id": 1003,
        "age": 18,
        "chinese_name": "中文名称",
        "course_name": "托福",
        "location": "成都",
        "phone": "13709065417",
        "school": "学校",
        "sexual": "男",
        "update_time": "2017-04-01 11:17:31"
      }
    ];
    vm.tableColumns = [
      {name: '中文名称', col: 'chinese_name', show: true},
      {name: '性别', col: 'sexual', show: true},
      {name: '年龄', col: 'age', show: true},
      {name: '学校', col: 'school', show: true},
      {name: '目前地址', col: 'location', show: true},
      {name: '学习课程', col: 'course_name', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: 'order_update_time'},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: [view, edit, archive, print]}
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
    vm.tableConfig = {
      add: true,
      search: true
    };

    function optionHtml() {
      var html = '<a ng-click="(item.handler[0])(data)" title="查看"><i class="iconfont icon-magnifier"></i></a>' +
        '<a ng-click="(item.handler[1])(data)" title="修改"><i class="iconfont icon-pencil"></i></a>' +
        '<a ng-click="(item.handler[2])(data)" title="归档"><i class="iconfont icon-archive"></i></a>' +
        '<a ng-click="(item.handler[2])(data)" title="导出"><i class="iconfont icon-print"></i></a>';
      return html
    }

    vm.add = function () {
      Common.model.promptModel('studentModelCtrl', student_model_template_url, 'md', true, 'common-modal', {
        add: true,
        getdata: vm.pipe
      })
    };

    function edit(data) {
      User.get(data.id).then(function (res) {
        Common.model.promptModel('studentModelCtrl', student_model_template_url, 'md', true, 'common-modal', {
          edit: true,
          item: res,
          getdata: vm.pipe
        })
      })
    }

    function view(data) {
      User.get(data.id).then(function (res) {
        Common.model.promptModel('studentModelCtrl', student_model_template_url, 'md', true, 'common-modal', {
          view: true,
          item: res
        })
      })
    }

    function archive(data) {
      Common.model.promptModel('archiveModelCtrl', archive_model_template_url, 'md', true, 'common-modal', {
        id: data.id,
        getdata: vm.pipe
      })
    }

    function print(data) {

    }

    vm.callServer = function callServer(queryStr) {
      User.getStudentList(queryStr).then(function (res) {
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

  angular.module('app.pages.dashboard.student').controller('studentCtrl', studentCtrl);
})();
