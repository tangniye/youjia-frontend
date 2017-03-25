'use strict';
(function () {

  function overallConfig($stateProvider) {
    'ngInject';
    $stateProvider
      .state('app.overall', {
        url: '/overall',
        views: {
          "content@app": {
            templateUrl: '/app/overall/index.html',
            controller: 'overallCtrl'
          }
        }
      })
  }

  angular.module('app.overall', ['ui.router'])
    .config(overallConfig);
})();
