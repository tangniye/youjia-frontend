/**
 * Created by tangniye on 17/4/6.
 */
(function () {
  'use strict';

  /** @ngInject */
  function dashboardSidebar() {
    return {
      restrict: 'E',
      templateUrl: 'app/pages/dashboard/sidebar/dashboardSidebar.html',
      link: function (scope, el) {

      },
    };
  }

  angular.module('app.pages.dashboard')
    .directive('dashboardSidebar', dashboardSidebar);

})();
