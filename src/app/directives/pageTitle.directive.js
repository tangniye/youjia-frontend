(function () {
  'use strict';

  /** @ngInject */
  function pageTitle($rootScope, $timeout) {
    return {
      link: function(scope, element) {
        var listener = function(event, toState, toParams, fromState, fromParams) {
          var title = '优加教育';
          // Create your own title pattern
          if (toState.title) title = '优加教育 | ' + toState.title;

          $timeout(function () {
            element.text(title);
          });
        };
        $rootScope.$on('$stateChangeSuccess', listener);
      }
    }
  }

  angular.module('app').directive('pageTitle', pageTitle)
})();
