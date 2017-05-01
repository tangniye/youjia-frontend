/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function auditionCtrl($scope, Audition, Common, toastr) {
    var vm = $scope;
    var audition_model_template_url = 'app/pages/dashboard/site/audition/audition-model/audition-model.html';

    vm.tableColumns = [
      {name: '用户姓名', col: 'name', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '预约老师', col: 'teacher', show: true},
      {name: '申请时间', col: 'create_time', show: true},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: [view, deleteItem]}
    ];
    vm.tableState = {
      pagination: {
        page: 1,
        page_size: 10,
        page_total: 50
      }
    };
    vm.tableConfig = {
      delete: true,
      select: true
    };

    function optionHtml() {
      var html = '<a ng-click="(item.handler[0])(data)" title="查看"><i class="iconfont icon-magnifier"></i></a>' +
        '<a ng-click="(item.handler[1])(data)" title="删除"><i class="iconfont icon-delete"></i></a>';
      return html
    }

    function view(data) {
      Common.model.promptModel('', audition_model_template_url, 'md', true, 'common-modal', {
        view: true,
        item: data
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
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选试听用户吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Audition.delete(ids).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
          });
          vm.pipe();
        }
      });

    }

    vm.callServer = function callServer(queryStr) {
      Audition.getList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };


  }

  angular.module('app.pages.dashboard.site.audition').controller('auditionCtrl', auditionCtrl);
})();
