/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function teachersCtrl($scope, Staff) {
    var vm = $scope;

    vm.tableData = [
      {
        "chinese_name": "10",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1010,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1009",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1009,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1008",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1008,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1007",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1007,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1006",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1006,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1005",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1005,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1004",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1004,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "1003",
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
      },
      {
        "chinese_name": "1002",
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
        "chinese_name": "1001",
        "country": "美国",
        "english_name": "zhang",
        "feature": "填入个人特色",
        "graduated": "哈佛",
        "id": 1001,
        "introduce": "填入个人简介",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "填入成功案例",
        "update_time": "2017-04-06 11:01:59"
      },

    ];
    vm.tableColumns = [
      {name: '中文名称', col: 'chinese_name', show: true},
      {name: '英文名称', col: 'english_name', show: true},
      {name: '毕业学校', col: 'graduated', show: true},
      {name: '毕业专业', col: 'major', show: true},
      {name: '毕业国家', col: 'country', show: true},
      {name: '手机号码', col: 'phone', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: 'order_update_time'},
      {name: '操作', col: 'id', show: true, html: optionHtml, class: 'option'}
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

    vm.callServer = function callServer(queryStr) {
      Staff.getStaffList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };

    function optionHtml() {
      var html = '<a><i class="iconfont icon-magnifier"></i></a>' +
        '<a><i class="iconfont icon-pencil"></i></a>' +
        '<a><i class="iconfont icon-delete"></i></a>';
      return html
    }
    
    vm.add = function () {
      
    }

  }

  angular.module('app.pages.dashboard.site').controller('teachersCtrl', teachersCtrl);
})();
