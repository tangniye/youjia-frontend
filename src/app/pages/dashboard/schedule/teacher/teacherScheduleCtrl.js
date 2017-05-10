/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function teacherScheduleCtrl($scope, $cookies, $state, Schedule) {
    var vm = $scope;
    vm.tableColumns = [
      {name: '老师', col: 'chinese_name', show: true},
      {name: '更新日期', col: 'update_time', show: true, sort: 'order_update_time'},
      {name: '操作', col: 'id', show: true, class: 'option', html: optionHtml, handler: view}
    ];
    vm.tableState = {
      sort: {},
      search: {
        key: ''
      },
      pagination: {
        page: 1,
        page_size: 10,
        page_total: 50
      }
    };

    function optionHtml() {
      var html = '<a ng-click="(item.handler)(data)" title="查看"><i class="iconfont icon-magnifier"></i></a>';
      return html
    }

    function view(data) {
      $cookies.put('scheduleOption', 'view');
      $state.go('app.pages.dashboard.schedule.info', {id: data.id, role: 'teacher'})
    }

    vm.callServer = function callServer(queryStr) {
      Schedule.getTeacherList(queryStr).then(function (res) {
        vm.tableData = res.items;
        vm.tableState.pagination.page = res.page;
        vm.tableState.pagination.page_total = res.page_total;
      })
    };

    vm.$on('searchChanged', function (event, data) {
      vm.tableState.search.key = data;
      vm.pipe(1);
    })

  }

  angular.module('app.pages.dashboard.schedule.teacher').controller('teacherScheduleCtrl', teacherScheduleCtrl);
})();
