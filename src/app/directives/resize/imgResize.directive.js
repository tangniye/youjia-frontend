/**
 * Created by tangniye on 17/4/3.
 */
(function () {
    'use strict';

    /** @ngInject */
    function imgResize($window, $parse) {

        return function (scope, element, attrs) {
            var w_scale = 1.0, h_scale = 1.0, w_screen = 1920,
                parsedObj = $parse(attrs['imgResize'])(scope);
            
            if (parsedObj) {
                w_scale = parsedObj.width / w_screen;
                h_scale = parsedObj.height / w_screen;
            }

            var w = angular.element($window);
            var changeSize = function () {
                element.css('height', h_scale * w.innerWidth());
                element.css('width', w_scale * w.innerWidth());
                element.children().first().find('li').css('width', w_scale * w.innerWidth());
            };
            
            w.bind('resize', function () {
                changeSize();
            });
            changeSize();

        }
    }

    angular.module('app')
        .directive('imgResize', imgResize);

})();