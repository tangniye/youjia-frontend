/**
 * Created by tangniye on 17/4/2.
 */
(function () {
    'use strict';

    /** @ngInject */
    function wechatTip() {
        return {
            restrict: 'E',
            templateUrl: 'app/components/wechat-tip/wechatTip.html',
            link: function (scope, elem, attr) {
                scope.close = function () {
                    elem.hide();
                }
            }
        };
    }

    angular.module('app.components')
        .directive('wechatTip', wechatTip);

})();
