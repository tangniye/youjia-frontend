/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function personalInfoCtrl($scope, User) {
    var vm = $scope;

    // vm.data = {
    //   "chinese_name": "中文名称",
    //   "english_name": "英文名称",
    //   "sexual": "性别， 可不填",
    //   "location": "所在地",
    //   "age": "年龄， 可不填",
    //   "school": "学校",
    //   "grade": "年级",
    //   "study_country": "期望留学国家",
    //   "enrollment_time": "预计入学时间, 可不填",
    //   "major": "期望留学专业, 可不填",
    //   "course_name": "课程名字，多个用,分割",
    //   "learn_range": "学习范围",
    //   "wechat": "微信",
    //   "phone": "手机号码",
    //   "parent_phone": "家长手机号码",
    //   "remark": "备注, 可不填",
    //   "photo": "base64编码"
    // };
    vm.data = {
      "chinese_name": "中文名称",
      "english_name": "英文名称",
      "graduated": "毕业学校",
      "major": "毕业专业",
      "country": "毕业国家",
      "phone": "手机号码",
      "wechat": "微信",
      "introduce": "个人简介",
      "success_case": "成功案例",
      "feature": "个人特色",
      "show": true,
      "photo": "base64编码"
    };
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
