(function () {
  'use strict';

  /** @ngInject */
  function carousel($timeout) {
    return {
      link: function(scope, element, attrs) {
        var slides = angular.element(element).find('.carousel__slides').find('li');
        var indicators = angular.element(element).find('.carousel__indicators').find('li');
        var controllers = angular.element(element).find('.carousel__control').find('li');
        var index = 0;
        var number = slides.length;
        var baseWidth = angular.element(element).width();
        var timer;

        function initCarousel() {
          $(indicators).removeClass('active');
          $(indicators[0]).addClass('active');
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
        }

        function doAnimate(i) {
          _.forEach(slides, function (slide, key) {
            $(slide).animate({
              left: (key - i) * baseWidth + 'px'
            }, 1000)
          });
        }

        function resetPosition(i) {
          _.forEach(slides, function (slide, key) {
            $(slide).css({
              left: (key - i) * baseWidth + 'px'
            })
          });
        }

        function goto(i) {
          if (i > number -1) {
            i = i - number;
          } else if (i < 0) {
            i = i + number;
          }
          doAnimate(i);

          $(indicators).removeClass('active');
          $(indicators[i]).addClass('active');

          index = i;
          $timeout.cancel(timer);
          timer = $timeout(function () {
            goto(++index);
          }, 3000)
        }

        initCarousel();

        timer = $timeout(function () {
          goto(++index);
        }, 3000);

        scope.$on("$destroy", function () {
          timer && $timeout.cancel(timer);
        });
      }
    }
  }

  angular.module('app').directive('carousel', carousel)
})();
