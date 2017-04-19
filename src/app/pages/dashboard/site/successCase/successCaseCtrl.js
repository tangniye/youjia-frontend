/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function successCaseCtrl($scope, Common, Case, toastr) {
    var vm = $scope;
    var success_case_model_template_url = 'app/pages/dashboard/site/successCase/success-case-model/success-case-model.html';
    vm.tableData = [
      {
        "chinese_name": "学生姓名",
        "id": 1,
        "school": "",
        "tag": "雅思",
        "update_time": "2017-04-04"
      },
      {
        "chinese_name": "学生姓名",
        "id": 2,
        "school": "",
        "tag": "雅思",
        "update_time": "2017-04-04"
      },
      {
        "chinese_name": "学生姓名",
        "id": 3,
        "school": "",
        "tag": "雅思",
        "update_time": "2017-04-04"
      },
      {
        "chinese_name": "学生姓名",
        "id": 4,
        "school": "",
        "tag": "雅思",
        "update_time": "2017-04-04"
      }
    ];
    vm.tableColumns = [
      {name: '学生姓名', col: 'chinese_name', show: true},
      {name: '录取学校', col: 'school', show: true},
      {name: '标签', col: 'tag', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: 'order_update_time'},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: [view, edit, deleteItem]}
    ];
    vm.tableState = {
      sort: {},
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

    function optionHtml() {
      var html = '<a ng-click="(item.handler[0])(data)"><i class="iconfont icon-magnifier"></i></a>' +
        '<a ng-click="(item.handler[1])(data)"><i class="iconfont icon-pencil"></i></a>' +
        '<a ng-click="(item.handler[2])(data)"><i class="iconfont icon-delete"></i></a>';
      return html
    }

    vm.add = function () {
      Common.model.promptModel('successCaseModelCtrl', success_case_model_template_url, 'md', true, 'common-modal', {
        add: true,
        getdata: vm.pipe
      })
    };

    function edit(data) {
      var query = {
        page: 1,
        page_size: 1,
        case_id: data.id
      };
      Case.getCaseDetailList(query).then(function (res) {

        Common.model.promptModel('successCaseModelCtrl', success_case_model_template_url, 'md', true, 'common-modal', {
          edit: true,
          item: res.items,
          getdata: vm.pipe
        })
      })

    }

    function view(data) {
      var query = {
        page: 1,
        page_size: 1,
        case_id: data.id
      };
      Case.getCaseDetailList(query).then(function (res) {

        Common.model.promptModel('successCaseModelCtrl', success_case_model_template_url, 'md', true, 'common-modal', {
          view: true,
          item: res.items
        })
      })
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
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选成功案例吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Case.delete(ids).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
          });
          vm.pipe();
        }
      });

    }

    vm.callServer = function callServer(queryStr) {
      Case.getCaseList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };

  }

  angular.module('app.pages.dashboard.site.successCase').controller('successCaseCtrl', successCaseCtrl);
})();
