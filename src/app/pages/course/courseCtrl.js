(function () {
  'use strict';

  /** @ngInject */
  function courseCtrl($scope, Common, $state) {
    var vm = $scope;
    vm.title = {};

    var userAgent = navigator.userAgent.toLowerCase();

    if (/iphone|ipad|ipod/.test(userAgent)) {
      vm.qqLink = 'mqq://im/chat?chat_type=wpa&uin=1377716383&version=1&src_type=web';

    } else if (/android/.test(userAgent)) {
      vm.qqLink = 'mqqwpa://im/chat?chat_type=wpa&uin=1377716383';
    } else {
      vm.qqLink = 'tencent://message/?uin=1377716383&amp;Site=www.xxx.com&amp;Menu=yes'
    }


    vm.$watch(function () {
      return $state.current
    }, function (newVal) {
      switch (newVal.name) {
        case 'app.pages.course.ielts':
          vm.title.main = '雅思';
          vm.title.sub = 'IELTS';
          break;
        case 'app.pages.course.toefl':
          vm.title.main = '托福';
          vm.title.sub = 'TOEFL';
          break;
        case 'app.pages.course.sat':
          vm.title.main = 'SAT';
          vm.title.sub = 'SAT';
          break;
      }
    });

    vm.promptAudition = function () {
      Common.model.promptModel('auditionModalCtrl', 'app/components/audition-modal/audition-modal.html', 'sm', '', 'login-modal audition-modal')
    };


  }

  angular.module('app.pages.course').controller('courseCtrl', courseCtrl);
})();
