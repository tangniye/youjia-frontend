(function () {
  'use strict';
  function courseCtrl($scope, Case, Common) {
    'ngInject';
    $scope.promptAudition = function () {
      Common.model.promptModel('auditionModalCtrl', 'app/components/audition-modal/audition-modal.html', 'sm', '', 'login-modal audition-modal')
    };

  }

  angular.module('app.pages.course').controller('courseCtrl', courseCtrl);
})();
