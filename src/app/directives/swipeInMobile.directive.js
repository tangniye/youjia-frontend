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
        var length = slides.length;
        var centerIndex = 1;
        $(element).on('swipeLeft', function () {
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
          });
        }).on('swipeRight', function () {
          var left = parseInt($(element).css('left'));
          if (centerIndex == 1) {
            $(element).css({
              left: minLeft
            });
            left = minLeft;
            centerIndex =4;
          }
          $(element).animate({
            left: left + baseStep
          }, animateTime, function () {
            centerIndex--;
          });
        });
        function init() {
          $(element).css({
            left: maxLeft
          });
          _.forEach(slides, function (slide, index) {
            $(slide).css({left: index*baseStep})
          });
        }
        init();
      }
    }
  }

  angular.module('app').directive('swipeInMobile', swipeInMobile)
})();
