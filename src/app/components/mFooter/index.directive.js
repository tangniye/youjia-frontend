(function () {
  'use strict';

  /** @ngInject */
  function mFooter() {
    return {
      restrict: 'EA',
      templateUrl: 'app/components/mFooter/index.html',
      link: function (scope, element) {
        var userAgent = navigator.userAgent.toLowerCase();

        if (/iphone|ipad|ipod/.test(userAgent)) {
          scope.qqLink = 'mqq://im/chat?chat_type=wpa&uin=1377716383&version=1&src_type=web';

        } else if (/android/.test(userAgent)) {
          scope.qqLink = 'mqqwpa://im/chat?chat_type=wpa&uin=1377716383';
        } else {
          scope.qqLink = 'http://wpa.qq.com/msgrd?v=3&uin=1377716383&site=qq&menu=yes'
        }

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
