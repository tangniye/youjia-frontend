(function () {
  'use strict';

  /** @ngInject */
  function scrollNav() {
    return {
      restrict: 'EA',
      scope: true,
      link: function (scope, elem, attr) {
        _.each(elem.find('li'), function (li) {
          var scrollTo = $(li).attr('scroll-to');
          if (scrollTo) {
            $(li).on('click', function () {
              _.each(elem.find('li'), function (li) {
                $(li).removeClass('active');
              });
              $(this).addClass('active');
              var height = $('#' + scrollTo).offset().top - 86;
              $('body').animate({
                scrollTop: height
              }, 500)
            })
          }
        });
      }
    }
  }

  angular.module('app').directive('scrollNav', scrollNav);
})();
