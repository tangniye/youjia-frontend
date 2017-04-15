/**
 * Created by tangniye on 2016/11/2.
 */
(function () {
  'use strict';

  var reConfig = {
    pagination: {
      template: 'template/smart-table/pagination.html',
      itemsByPage: 10,
      displayedPages: 5
    },
    search: {
      delay: 400, // ms
      inputEvent: 'input'
    },
    check: {
      mode: 'single',
      selectedClass: 'st-selected'
    },
    sort: {
      defaltClass: 'iconfont icon-caret-up-down',
      ascClass: 'iconfont icon-caret-up',
      descClass: 'iconfont icon-caret-down',
      descFirst: false,
      delay: 300
    },
    pipe: {
      delay: 100 //ms
    }
  };

  angular.module('app').constant('reConfig', reConfig);
})();
