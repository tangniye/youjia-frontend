/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function historyInfoCtrl($scope, $stateParams, History) {
    var vm = $scope;
    var userid = $stateParams.id;

    vm.baseColumns = [
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

    vm.proColumns = [
      {name: '考试科目1：', col: 'test1'},
      {name: '科目1成绩：', col: 'score1'},
      {name: '考试科目2：', col: 'test2'},
      {name: '科目2成绩：', col: 'score2'},
      {name: '考试科目3：', col: 'test3'},
      {name: '科目3成绩：', col: 'score3'},
      {name: '录取学校：', col: 'admission_school'},
      {name: '录取专业：', col: 'admission_major'}
    ];

    callServer();

    function callServer() {
      History.get(userid).then(function (res) {
        vm.data = res;
      })
    }

  }

  angular.module('app.pages.dashboard.history.info').controller('historyInfoCtrl', historyInfoCtrl);
})();
