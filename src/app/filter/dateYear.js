(function () {
  'use strict';

  angular.module('app')
    .filter('dateYear', dateYear);

  /** @ngInject */
  function dateYear() {
    return function (str) {
      return moment(str).format("YYYY");
    };
  }

})();
