/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.feedback.list', {
        url: '',
        title: '学习反馈',
        templateUrl: 'app/pages/dashboard/feedback/feedback-list/feedbackList.html',
        controller: 'feedbackListCtrl'
      });
  }

  angular.module('app.pages.dashboard.feedback.list', [])
    .config(routeConfig);
})();
