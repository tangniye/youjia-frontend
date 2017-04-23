(function () {
  'use strict';

  /** @ngInject */
  function mFooter() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/mFooter/index.html',
      link: function (scope, element) {
        var windowWidth = $(window).width();
        if (windowWidth < 768) {
          var firstLevelLinks = $('.mfooter__menu > li > a');
          var secondLevelMenus = $('.mfooter__dropdown-menu');

          _.forEach(firstLevelLinks, function (link) {
            $(link).on('click', function (e) {
              if ($(this).hasClass('mfooter__dropdown-toggle')) {
                var secondMenu = $(this).next();
                if (! secondMenu.hasClass('show')) {
                  secondLevelMenus.removeClass('show');
                }
                secondMenu.toggleClass('show');
              } else {
                secondLevelMenus.removeClass('show');
              }
              e.stopPropagation();
            });
          });

          $(document).on('click', function (e) {
            secondLevelMenus.removeClass('show');
          })
        }
      }
    };
  }

  angular.module('app.components')
    .directive('mFooter', mFooter);

})();
