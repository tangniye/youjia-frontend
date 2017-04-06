/**
 * Created by tangniye on 17/4/3.
 */
(function () {
    'use strict';

    function bannerResize($window, $parse) {
        'ng inject';

        return function (scope, element, attrs) {
            var scale = 1.0, parsedStr = $parse(attrs['bannerResize'])(scope);
            if (parsedStr) {
                scale = parseInt(parsedStr)/1920;
            }

            var w = angular.element($window);
            var changeSize = function () {
                element.css('height', scale * w.innerWidth());
                element.css('width', w.innerWidth());
                element.children().first().find('li').css('width', w.innerWidth());

            };
            w.bind('resize', function () {
                changeSize();
            });
            changeSize();

        }
    }

    angular.module('app')
        .directive('bannerResize', bannerResize);

})();