/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function indexCtrl($scope, $timeout) {
        var vm = $scope;

        var bannerElem = angular.element('.index-banner')[0],
            bannerSlider = angular.element('.banner-slider')[0],
            imgWidth, timer, animating = false;

        var blockages = angular.element('.blockage').children(),
            index = 1;

        $timeout(function () {
            imgWidth = parseInt(bannerElem.style.width);
            bannerSlider.style.left = -imgWidth + 'px';
        });

        vm.prev = function () {
            if (!animating) {
                index == 1 ? index = 3 : index -= 1;
                toggleBlockage();
                animate(imgWidth);
            }

        };

        vm.next = function () {
            if (!animating) {
                index == 3 ? index = 1 : index += 1;
                toggleBlockage();
                animate(-imgWidth);
            }

        };

        vm.goto = function (nowIndex) {
            if (nowIndex == index) {
                return;
            }
            if (!animating) {
                var offset = -imgWidth * (nowIndex - index);
                animate(offset);

                index = nowIndex;
                toggleBlockage();
            }
        };

        vm.autoAnimate = function () {
            vm.next();
            
            timer = $timeout(function () {
                vm.autoAnimate()
            }, 3000)
        };

        vm.stopAutoAnimate = function () {
            timer && $timeout.cancel(timer);
        };

        function animate(offset) {
            animating = true;
            var newOffset = parseInt(bannerSlider.style.left || 0) + offset;
            var time = 300;
            var interval = 10;
            var speed = offset / (time / interval);

            function go() {
                if ((speed < 0 && parseInt(bannerSlider.style.left) > newOffset) || (speed > 0 && parseInt(bannerSlider.style.left) < newOffset)) {
                    bannerSlider.style.left = parseInt(bannerSlider.style.left) + speed + 'px';

                    $timeout(go, interval);

                } else {
                    animating = false;
                    bannerSlider.style.left = newOffset + 'px';

                    if (newOffset > -imgWidth) {
                        bannerSlider.style.left = -3 * imgWidth + 'px';
                    }
                    if (newOffset < -3 * imgWidth) {
                        bannerSlider.style.left = -imgWidth + 'px';
                    }
                }
            }

            go();

        }

        function toggleBlockage() {
            for (var i = 0; i < blockages.length; i++) {
                if (blockages[i].classList.contains('active')) {
                    blockages[i].classList.remove('active');
                    break;
                }
            }
            blockages[index - 1].classList.add('active');
        }

        vm.$on("$destroy", function () {
            timer && $timeout.cancel(timer);
        });

    }

    angular.module('app.pages.index').controller('indexCtrl', indexCtrl);
})();
