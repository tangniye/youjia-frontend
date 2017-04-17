/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.feedback', {
        url: '/feedback',
        title: '学习反馈',
        templateUrl: '/app/pages/dashboard/feedback/feedback.html',
        controller: 'feedbackCtrl'
      });
  }

  angular.module('app.pages.dashboard.feedback', [])
    .config(routeConfig);
})();
