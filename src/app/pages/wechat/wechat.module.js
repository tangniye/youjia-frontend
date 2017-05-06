/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.wechat', {
        url: '/wechat',
        title: '关注微信',
        templateUrl: 'app/pages/wechat/wechat.html',
        controller: 'staffCtrl'
      });
  }

  angular.module('app.pages.wechat', ['ui.router'])
    .config(routeConfig);
})();
