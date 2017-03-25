"use strict";
(function () {

  function layoutConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          root: {
            templateUrl: '/app/layout/index.html',
            controller: 'layoutCtrl'
          }
        }
      });
    $urlRouterProvider.otherwise('/overall');
  }

  angular.module('app.layout', ['ui.router'])
    .config(layoutConfig);
})();
