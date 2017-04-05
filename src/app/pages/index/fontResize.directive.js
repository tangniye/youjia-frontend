/**
 * Created by tangniye on 17/4/3.
 */
(function () {
    'use strict';

    function fontResize($window, $parse) {
        'ng inject';

        return function (scope, element, attrs) {
            var scale = 1.0, parsedStr = $parse(attrs['fontResize'])(scope);
            if (parsedStr) {
                scale = parseInt(parsedStr)/1920;
            }

            var w = angular.element($window);
            var changeSize = function () {
                element.css('font-size', scale * w.innerWidth());
            };
            
            w.bind('resize', function () {
                changeSize();
            });
            changeSize();

        }
    }

    angular.module('app.pages.index')
        .directive('fontResize', fontResize);

})();