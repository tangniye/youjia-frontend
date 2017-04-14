/**
 * Created by tangniye on 17/4/6.
 */
(function () {
    'use strict';

  /** @ngInject */
  function sidebar() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/sidebar/sidebar.html',
            controller: 'sidebarCtrl'
        };
    }

    angular.module('app.components')
        .directive('sidebar', sidebar);

})();
