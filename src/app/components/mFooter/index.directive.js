(function () {
    'use strict';

    /** @ngInject */
    function mFooter(Browser, Constant) {
        return {
            restrict: 'EA',
            templateUrl: 'app/components/mFooter/index.html',
            link: function (scope, element) {
                scope.tel = Constant.contact.tel;
                var qq = Constant.contact.qq;

                if (Browser.versions.mobile) {
                    var ua = navigator.userAgent.toLowerCase();
                    if (ua.match(/MicroMessenger/i) == "micromessenger") {
                        scope.toggleTip = function () {
                            angular.element('.wechat-tip').show();
                        };
                    }
                    if (Browser.versions.ios) {
                        scope.qqLink = 'mqq://im/chat?chat_type=wpa&uin=' + qq + '&version=1&src_type=web';
                    }
                    if (Browser.versions.android) {
                        scope.qqLink = 'mqqwpa://im/chat?chat_type=wpa&uin=' + qq;
                    }
                } else {
                    scope.qqLink = 'tencent://message/?uin=' + qq + '&amp;Site=www.xxx.com&amp;Menu=yes'
                }

                var windowWidth = $(window).width();
                if (windowWidth < 768) {
                    var firstLevelLinks = $('.mfooter__menu > li > a');
                    var secondLevelMenus = $('.mfooter__dropdown-menu');

                    _.forEach(firstLevelLinks, function (link) {
                        $(link).on('click', function (e) {
                            if ($(this).hasClass('mfooter__dropdown-toggle')) {
                                var secondMenu = $(this).next();
                                if (!secondMenu.hasClass('show')) {
                                    secondLevelMenus.removeClass('show');
                                }
                                secondMenu.toggleClass('show');
                            } else {
                                secondLevelMenus.removeClass('show');
                            }
                            e.stopPropagation();
                        });
                    });

                    $('body').on('click', function (e) {
                        secondLevelMenus.removeClass('show');
                    })
                }
            }
        };
    }

    angular.module('app.components')
        .directive('mFooter', mFooter);

})();
