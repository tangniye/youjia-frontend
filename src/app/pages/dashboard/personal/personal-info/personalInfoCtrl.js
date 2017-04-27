/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function personalInfoCtrl($scope, User) {
    var vm = $scope;

    var adminColumns = [
      {name: '中文名称：', col: 'chinese_name'},
      {name: '英文名称：', col: 'english_name'},
      {name: '毕业学校：', col: 'graduated'},
      {name: '毕业专业：', col: 'major'},
      {name: '毕业国家：', col: 'country'},
      {name: '微信：', col: 'wechat'},
      {name: '手机号码：', col: 'phone'}
    ];
    var studentColumns = [
      {name: '中文名称：', col: 'chinese_name'},
      {name: '英文名称：', col: 'english_name'},
      {name: '性别：', col: 'sexual'},
      {name: '所在地：', col: 'location'},
      {name: '年龄：', col: 'age'},
      {name: '学校：', col: 'school'},
      {name: '年级：', col: 'grade'},
      {name: '期望留学国家：', col: 'study_country'},
      {name: '预计入学时间：', col: 'enrollment_time'},
      {name: '期望留学专业：', col: 'major'},
      {name: '学习课程：', col: 'course_name'},
      {name: '学习范围：', col: 'learn_range'},
      {name: '微信：', col: 'wechat'},
      {name: '手机号码：', col: 'phone'},
      {name: '家长手机号码：', col: 'parent_phone'}
    ];

    vm.columns = vm.me.role === 'admin' ? adminColumns : studentColumns;

    callServer();

    function callServer() {
      User.get(vm.me.id).then(function (res) {
        vm.data = res;
      })
    }

  }

  angular.module('app.pages.dashboard.personal.info').controller('personalInfoCtrl', personalInfoCtrl);
})();
