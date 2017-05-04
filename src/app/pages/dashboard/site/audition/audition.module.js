/**
 * Created by tangniye on 17/4/14.
 */
(function () {
  'use strict';

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('app.pages.dashboard.site.audition', {
        url: '/audition',
        title: '预约试听',
        templateUrl: 'app/pages/dashboard/site/audition/audition.html',
        controller: 'auditionCtrl'
      });
  }

  angular.module('app.pages.dashboard.site.audition', [])
    .config(routeConfig);
})();
