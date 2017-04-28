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
      {name: '性别：', col: 'graduated'},
      {name: '所在地：', col: 'major'},
      {name: '年龄：', col: 'country'},
      {name: '学校：', col: 'wechat'},
      {name: '年级：', col: 'phone'},
      {name: '期望留学国家：', col: 'phone'},
      {name: '预计入学时间：', col: 'phone'},
      {name: '期望留学专业：', col: 'phone'},
      {name: '学习课程：', col: 'phone'},
      {name: '学习范围：', col: 'phone'},
      {name: '微信：', col: 'phone'},
      {name: '手机号码：', col: 'phone'},
      {name: '家长手机号码：', col: 'phone'}
    ];

    vm.proColumns = [
      {name: '考试科目1：', col: 'chinese_name'},
      {name: '科目1成绩：', col: 'english_name'},
      {name: '考试科目2：', col: 'graduated'},
      {name: '科目2成绩：', col: 'major'},
      {name: '考试科目3：', col: 'country'},
      {name: '科目3成绩：', col: 'wechat'},
      {name: '录取学校：', col: 'phone'},
      {name: '录取专业：', col: 'phone'}
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
