(function () {
  'use strict';

  /** @ngInject */
  function carousel($timeout, $interval) {
    return {
      link: function(scope, element, attrs) {
        var slides = angular.element(element).find('.carousel__slides').find('li');
        var indicators = angular.element(element).find('.carousel__indicators').find('li');
        var controllers = angular.element(element).find('.carousel__control').find('li');
        var index = 0;
        var number = slides.length;
        var baseWidth = angular.element(element).width();
        var interval;
        var sliding = false;
        var paused = false;

        function initCarousel() {
          $(indicators).removeClass('active');
          $(indicators[0]).addClass('active');
          sliding = false;
          _.forEach(slides, function (slide, key) {
            $(slide).css({
              left: 0 + key * baseWidth + 'px',
              display: 'block'
            })
          });
          _.forEach(indicators, function (indicator, key) {
            $(indicator).on('click', function () {
              goto(key)
            })
          });

          $(controllers[0]).on('click', function () {
            goto(index - 1)
          });
          $(controllers[1]).on('click', function () {
            goto(index + 1)
          });
          unPause();
          element.mouseenter(function () {
            pause();
          }).mouseleave(function () {
            unPause();
          });
        }

        function slide(i) {
          sliding = true;
          _.forEach(slides, function (slide, key) {
            $(slide).animate({
              left: (key - i) * baseWidth + 'px'
            }, 500)
          });
          $timeout(function () {
            sliding = false;
          }, 500)
        }

        function pause() {
          paused = true;
          interval && $interval.cancel(interval);
        }
        function unPause() {
          paused = false;
          interval = $interval(function () {
            goto(index + 1)
          }, 3000)
        }

        function goto(i) {
          if(sliding) {
            return
          }
          console.log(sliding)
          if (i > number -1) {
            i = i - number;
          } else if (i < 0) {
            i = i + number;
          }
          slide(i);

          $(indicators).removeClass('active');
          $(indicators[i]).addClass('active');

          index = i;
        }

        initCarousel();

        scope.$on("$destroy", function () {
          interval && $interval.cancel(interval);
        });
      }
    }
  }

  angular.module('app').directive('carousel', carousel)
})();
