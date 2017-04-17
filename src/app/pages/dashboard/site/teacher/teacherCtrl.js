/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function teacherCtrl($scope, User, Common, toastr) {
    var vm = $scope;

    vm.tableData = [];
    vm.tableColumns = [
      {name: '中文名称', col: 'chinese_name', show: true},
      {name: '英文名称', col: 'english_name', show: true},
      {name: '毕业学校', col: 'graduated', show: true},
      {name: '毕业专业', col: 'major', show: true},
      {name: '毕业国家', col: 'country', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: 'order_update_time'},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: [view, edit, deleteItem]}
    ];
    vm.tableState = {
      sort: {},
      search: {},
      pagination: {
        page: 1,
        page_size: 10,
        page_total: 50
      }
    };
    vm.tableConfig = {
      add: true,
      delete: true
    };

    vm.callServer = function callServer(queryStr) {
      User.getTeacherList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };

    function optionHtml() {
      var html = '<a><i class="iconfont icon-magnifier"></i></a>' +
        '<a><i class="iconfont icon-pencil"></i></a>' +
        '<a ng-click="(item.handler[2])(data)"><i class="iconfont icon-delete"></i></a>';
      return html
    }

    vm.add = function () {
      Common.model.promptModel('addTeacherModelCtrl', 'app/pages/dashboard/site/teacher/teacher-model/teacher-model.html', 'md',true,'common-modal')
    };

    function edit() {

    }

    function view() {

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
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选老师信息吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          User.delete(ids).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
          });
          vm.pipe();
        }
      });

    }

  }

  angular.module('app.pages.dashboard.site').controller('teacherCtrl', teacherCtrl);
})();
