(function () {
  function pageTitle($rootScope, $timeout) {
    'ngInject';
    return {
      link: function(scope, element) {
        var listener = function(event, toState, toParams, fromState, fromParams) {
          // Default title - load on Dashboard 1
          var title = '优家教育';
          // Create your own title pattern
          if (toState.title) title = toState.title  + ' | 优家教育';
          $timeout(function() {
            element.text(title);
          });
        };
        $rootScope.$on('$stateChangeStart', listener);
      }
    }
  }

  angular.module('app').directive('pageTitle', pageTitle)
})();
