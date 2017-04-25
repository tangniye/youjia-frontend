/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function historyListCtrl($scope, $state, Common, toastr, User, History) {
    var vm = $scope;

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
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: [view, deleteItem]}
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
      delete: true,
      search: true,
      select: true
    };

    function optionHtml() {
      var html = '<a ng-click="(item.handler[0])(data)" title="查看"><i class="iconfont icon-magnifier"></i></a>' +
        '<a ng-click="(item.handler[1])(data)" title="删除"><i class="iconfont icon-delete"></i></a>';
      return html
    }

    function view(data) {
      $state.go('app.pages.dashboard.history.info', {id: data.id});
    }

    vm.deleteAll = function () {
      var selectIds = Common.table.selectIds(vm.tableData, 'id');
      if (!selectIds.length) {
        toastr.warning('请选择删除项', '', {timeOut: 2000});
        return;
      }

      _delete(selectIds);

    };

    function deleteItem(data) {
      _delete(data.id);
    }

    function _delete(ids) {
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选学生信息吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          User.delete(ids).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
          });
          vm.pipe();
        }
      });

    }

    vm.callServer = function callServer(queryStr) {
      History.getList(queryStr).then(function (res) {
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

  angular.module('app.pages.dashboard.history.list').controller('historyListCtrl', historyListCtrl);
})();
