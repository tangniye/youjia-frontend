(function () {
  'use strict';

  /** @ngInject */
  function scrollToFix(IS_MOBILE, $timeout) {
    return {
      restrict: 'EA',
      scope: true,
      link: function (scope, elem, attr) {

        $timeout(function () {
          if(IS_MOBILE) {
            var offset = elem.offset().top;
            var marginStyle = elem.css('margin');

            $(window).on('scroll',function () {

              if (document.body.scrollTop > offset) {
                elem.css({
                  position: 'fixed',
                  top: 0,
                  width: '100%',
                  margin: 0,
                  'z-index': 100
                })
              } else {
                elem.css({
                  position: 'relative',
                  margin: marginStyle
                })
              }
            })
          }
        })

      }
    }
  }

  angular.module('app').directive('scrollToFix', scrollToFix);
})();
