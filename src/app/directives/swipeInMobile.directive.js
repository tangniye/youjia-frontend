(function () {
  'use strict';

  /** @ngInject */
  function swipeInMobile($timeout, $interval) {
    return {
      link: function(scope, element, attrs) {
        console.log('working....')
        var slides = angular.element.find('[swipe-in-mobile-index]');
        function swipe () {
          _.forEach(slides, function(slide, index) {
            angular.element(slide).animation({

            })
          });
        }
        $interval(function () {
          swipe()
        }, 3000)
      }
    }
  }

  angular.module('app').directive('swipeInMobile', swipeInMobile)
})();
