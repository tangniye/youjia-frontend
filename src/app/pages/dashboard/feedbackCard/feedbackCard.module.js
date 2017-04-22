/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('dashboard.feedbackCard', {
        url: '/feedback/:id',
        title: '学习反馈',
        templateUrl: '/app/pages/dashboard/feedbackCard/feedbackCard.html',
        controller: 'feedbackCardCtrl'
      });
  }

  angular.module('app.pages.dashboard.feedbackCard', [])
    .config(routeConfig);
})();
