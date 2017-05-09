(function () {
    'use strict';

    /** @ngInject */
    function courseCtrl($scope, Common, $state, Browser, Constant) {
        var vm = $scope;
        vm.title = {};

        var qq = Constant.contact.qq;
        if (Browser.versions.mobile) {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                vm.toggleTip = function () {
                    angular.element('.wechat-tip').show();
                };
            }
            if (Browser.versions.ios) {
                vm.qqLink = 'mqq://im/chat?chat_type=wpa&uin=' + qq + '&version=1&src_type=web';
            }
            if (Browser.versions.android) {
                vm.qqLink = 'mqqwpa://im/chat?chat_type=wpa&uin=' + qq;
            }
        } else {
            vm.qqLink = 'tencent://message/?uin=' + qq + '&amp;Site=www.xxx.com&amp;Menu=yes'
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
                case 'app.pages.course.gre':
                    vm.title.main = 'GRE';
                    vm.title.sub = 'GRE';
                    break;
            }
        });

        vm.promptAudition = function () {
            Common.model.promptModel('auditionModalCtrl', 'app/components/audition-modal/audition-modal.html', 'sm', '', 'login-modal audition-modal')
        };


    }

    angular.module('app.pages.course').controller('courseCtrl', courseCtrl);
})();
