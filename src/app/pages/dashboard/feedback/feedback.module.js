/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.feedback', {
        abstract: true,
        url: '/feedback',
        title: '学习反馈',
        templateUrl: 'app/pages/dashboard/feedback/feedback.html'
      });
  }

  angular.module('app.pages.dashboard.feedback', [
      'app.pages.dashboard.feedback.list',
      'app.pages.dashboard.feedback.card'
    ])
    .config(routeConfig);
})();
