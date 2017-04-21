/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function feedbackCardCtrl($scope, $stateParams, $state, Feedback, Common, toastr) {
    var vm = $scope;

    var feedback_card_model_template_url = 'app/pages/dashboard/feedbackCard/feedback-card-model/feedback-card-model.html';

    var userid = $stateParams.id;
    var cur_user = {
      id: userid,
      chinese_name: 'test'
    };

    vm.tableData = [
      {
        "chinese_name": "中文名",
        "class_time": "8:30",
        "contents": "课程内容",
        "course_name": "托福",
        "feedback": "课堂反馈",
        "homework": "课后作业",
        "id": 1,
        "section": "听 说 读 写",
        "study_date": "2017-05-05",
        "leave_time": "11:00"
      }, {
        "chinese_name": "中文名",
        "class_time": "8:30",
        "contents": "课程内容",
        "course_name": "托福",
        "feedback": "课堂反馈",
        "homework": "课后作业",
        "id": 2,
        "section": "听 说 读 写",
        "study_date": "2017-05-05",
        "leave_time": "11:00"
      }
    ];
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
        user_id: userid
      };

      Feedback.getList(query).then(function (res) {
        vm.tableData = res.items;
        cur_user.chinese_name = res.chinese_name;

        vm.pagination.page = res.page;
        vm.pagination.page_total = res.page_total;
      })
    }

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
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选成功案例吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Feedback.delete(feedbackid).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
          });
          callServer();
        }
      });
    };

    vm.deleteAll = function () {
      Common.model.promptModel('deleteModelCtrl', 'app/components/delete-model/delete-model.html', 'sm', true, 'delete-modal', {prompt: '确认删除所选成功案例吗?'})
        .result.then('', function (data) {
        if (data === 'ok') {
          Feedback.deleteAll(userid).then(function (res) {
            toastr.success('删除成功', '', {timeOut: 2000});
          });
          callServer();
        }
      });

    };

  }

  angular.module('app.pages.dashboard.feedbackCard').controller('feedbackCardCtrl', feedbackCardCtrl);
})();
