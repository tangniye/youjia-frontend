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
        var timeTicker;
        var timeoutTicker;
        var slideInterval = 3000;
        var animateTime = 500;
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
          $(element).on('swipeLeft', function () {
            pause();
            goto(index + 1);
            timeoutTicker && $timeout.cancel(timeoutTicker);
            timeoutTicker = $timeout(unPause, animateTime);
          }).on('swipeRight', function () {
            pause();
            goto(index - 1 );
            timeoutTicker && $timeout.cancel(timeoutTicker);
            timeoutTicker = $timeout(unPause, animateTime);
          }).on('mouseenter touchstart', function () {
            pause();
          }).on('mouseleave touchend', function () {
            unPause();
          });
        }

        function slide(i) {
          _.forEach(slides, function (slide, key) {
            $(slide).animate({
              left: (key - i) * baseWidth + 'px'
            }, animateTime)
          });
        }

        function endToBegin (i) {
          _.forEach(slides, function (slide, key) {
            if (key) {
              $(slide).animate({
                left: (key-number) * baseWidth + 'px'
              }, animateTime, function () {
                $(slide).css({
                  left: (key - i) * baseWidth + 'px'
                })
              });
            } else {
              $(slide).css({
                left: baseWidth + 'px'
              }).animate({
                left: 0
              }, animateTime)
            }
          });
        }
        function beginToEnd (i) {
          _.forEach(slides, function (slide, key) {
            if (key != number - 1) {
              $(slide).animate({
                left: (key + 1) * baseWidth + 'px'
              }, animateTime, function () {
                $(slide).css({
                  left: (key - i) * baseWidth + 'px'
                })
              });
            } else {
              $(slide).css({
                left: - baseWidth + 'px'
              }).animate({
                left: 0
              }, animateTime)
            }
          });
        }

        function pause() {
          paused = true;
          timeTicker && $interval.cancel(timeTicker);
        }
        function unPause() {
          paused = false;
          timeTicker = $interval(function () {
            goto(index + 1)
          }, slideInterval)
        }

        function goto(i) {
          if(sliding) {
            return
          }

          sliding = true;
          if (i > number -1) {
            i = i - number;
            endToBegin(i);
          } else if (i < 0) {
            i = i + number;
            beginToEnd(i)
          } else {
            slide(i);
          }
          $timeout(function () {
            sliding = false;
          }, animateTime + 10);

          $(indicators).removeClass('active');
          $(indicators[i]).addClass('active');
          index = i;
        }

        initCarousel();

        scope.$on("$destroy", function () {
          timeTicker && $interval.cancel(timeTicker);
        });
      }
    }
  }

  angular.module('app').directive('carousel', carousel)
})();
