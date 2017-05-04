/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.feedback.card', {
        url: '/:id',
        title: '学习反馈',
        templateUrl: 'app/pages/dashboard/feedback/feedback-card/feedbackCard.html',
        controller: 'feedbackCardCtrl'
      });
  }

  angular.module('app.pages.dashboard.feedback.card', [])
    .config(routeConfig);
})();
