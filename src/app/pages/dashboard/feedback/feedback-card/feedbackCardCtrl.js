/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function feedbackCardCtrl($scope, $stateParams, Feedback, Common, toastr) {
    var vm = $scope;

    var feedback_card_model_template_url = 'app/pages/dashboard/feedback/feedback-card/feedback-card-model/feedback-card-model.html';

    vm.userid = $stateParams.id;
    var cur_user = {
      id: vm.userid,
      chinese_name: 'test'
    };

    vm.pagination = {
      page: 1,
      page_size: 2,
      page_total: 1
    };

    callServer();


    function callServer() {
      var query = {
        page: vm.pagination.page,
        page_size: vm.pagination.page_size,
        user_id: vm.userid
      };

      Feedback.getList(query).then(function (res) {
        vm.tableData = res.items;
        cur_user.chinese_name = res.chinese_name;

        vm.pagination.page = res.page;
        vm.pagination.page_total = res.page_total;
      })
    }

    vm.toPage = function (page) {
      page = page >= vm.pagination.page_total ? vm.pagination.page_total : (page <= 1 ? 1 : page);
      vm.pagination.page = page;

      callServer();
    };

    vm.add = function () {
      Common.model.promptModel('feedbackCardModelCtrl', feedback_card_model_template_url, 'md', true, 'common-modal', {
        add: true,
        title: '新增反馈表',
        cur_user: cur_user,
        getdata: callServer
      })
    };

    vm.edit = function (data) {
      Common.model.promptModel('feedbackCardModelCtrl', feedback_card_model_template_url, 'md', true, 'common-modal', {
        edit: true,
        title: '修改反馈表',
        cur_user: cur_user,
        item: data,
        getdata: callServer
      })
    };

    vm.delete = function (feedbackid) {
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选学习反馈吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Feedback.delete(feedbackid).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
            callServer();
          });
        }
      });
    };

    vm.deleteAll = function () {
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认清空该学生的所有学习反馈吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Feedback.deleteAll(vm.userid).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
            callServer();
          });
        }
      });

    };

  }

  angular.module('app.pages.dashboard.feedback.card').controller('feedbackCardCtrl', feedbackCardCtrl);
})();
