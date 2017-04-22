/**
 * Created by tangniye on 17/4/3.
 */
(function () {
  'use strict';

  /** @ngInject */
  function imgResize($window, $parse, $timeout) {

    return function (scope, element, attrs) {
      var w_scale = 1.0, h_scale = 1.0,
        w_screen = 1920;
      var parseObj = $parse(attrs['imgResize'])(scope);
      if (angular.element($window).width() < 768 && attrs['mSize']) {
        w_screen = 768;
        parseObj = $parse(attrs['mSize'])(scope);
      }

      if (parseObj) {
        w_scale = parseObj.width / w_screen;
        h_scale = parseObj.height / w_screen;
      }

      var w = angular.element($window);
      var changeSize = function () {
        element.css('height', h_scale * w.innerWidth());
        if (element.hasClass('index-banner')) {
          element.css('width', w_scale * w.innerWidth());
          element.children().first().find('li').css('width', w_scale * w.innerWidth());
        } else {
          element.css('width', '100%');
        }
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
