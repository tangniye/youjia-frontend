(function () {
  'use strict';

  /** @ngInject */
  function mNavigation() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'app/components/mNavigation/index.html',
      controller: 'pageTopCtrl',
      link: function (scope, element) {
        var sidebar = $(element).find('.mNavigation__sidebar');
        scope.toggleMenu = function () {
          sidebar.toggleClass('show');
        };
        sidebar.on('click', function () {
          sidebar.removeClass('show');
        });
      }
    };
  }

  angular.module('app.components')
    .directive('mNavigation', mNavigation);

})();
