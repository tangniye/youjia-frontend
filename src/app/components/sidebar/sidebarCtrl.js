/**
 * Created by tangniye on 17/4/6.
 */
(function () {
    'use strict';

    /** @ngInject */
    function sidebarCtrl($scope, Common) {
        'ngInject';

      $scope.promptAudition = function () {
        Common.model.promptModel('auditionModalCtrl', 'app/components/audition-modal/audition-modal.html', 'sm', '', 'login-modal')
      };

      $scope.backToTop = function () {
        $('html, body').animate({
          scrollTop:0
        }, 'slow');
      }

    }

    angular.module('app.components').controller('sidebarCtrl', sidebarCtrl);
})();
