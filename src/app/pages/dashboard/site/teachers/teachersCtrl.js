/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function teachersCtrl($scope) {
    var vm = $scope;

    vm.tableData = [
      {
        "chinese_name": "张张张",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1002,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "hehehehe",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1003,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      }
    ];

    vm.tableColumns = [
      {name: '中文名称', col: 'chinese_name', show: true},
      {name: '英文名称', col: 'english_name', show: true},
      {name: '毕业学校', col: 'graduated', show: true},
      {name: '毕业专业', col: 'major', show: true},
      {name: '毕业国家', col: 'country', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: true, sortName: 'order_update_time'},
      {name: '操作', col: 'id', show: true}
    ];

    vm.tableOptions = {
      checkOption: true,
      checkAll: false
    }

  }

  angular.module('app.pages.dashboard.site').controller('teachersCtrl', teachersCtrl);
})();
