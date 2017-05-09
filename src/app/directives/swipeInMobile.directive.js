(function () {
  'use strict';

  /** @ngInject */
  function swipeInMobile($timeout, $interval) {
    return {
      link: function(scope, element, attrs) {
        var basewidth = 200;
        var basePadding = 20;
        var baseStep = basewidth + basePadding;
        var animateTime = 500;
        var windowWidth = $(window).width();
        var maxLeft = windowWidth*0.5 - basewidth*1.5 - basePadding;
        var minLeft = maxLeft - baseStep * 3;
        var slides = angular.element.find('.staff-standard-bg');
        var centerIndex = 1;
        var swiping = false;

        function init() {
          $(element).css({
            left: maxLeft
          });
          _.forEach(slides, function (slide, index) {
            $(slide).css({
              left: index*baseStep,
              display: 'block'
            })
          });

          $(element).on('swipeLeft', function () {
            if (!swiping) {
              swiping = true;
              var left = parseInt($(element).css('left'));
              if (centerIndex == 4) {
                $(element).css({
                  left: maxLeft
                });
                left = maxLeft;
                centerIndex = 1;
              }
              $(element).animate({
                left: left - baseStep
              }, animateTime, function () {
                centerIndex++;
                swiping = false;
              });
            }
          }).on('swipeRight', function () {
            if (!swiping) {
              swiping = true;
              var left = parseInt($(element).css('left'));
              if (centerIndex == 1) {
                $(element).css({
                  left: minLeft
                });
                left = minLeft;
                centerIndex = 4;
              }
              $(element).animate({
                left: left + baseStep
              }, animateTime, function () {
                centerIndex--;
                swiping = false;
              });
            }
          });
        }
        if (windowWidth < 768) {
          init();
        }
      }
    }
  }

  angular.module('app').directive('swipeInMobile', swipeInMobile)
})();
