/**
 * Created by tangniye on 17/4/12.
 */
(function () {
    'use strict';

    /** @ngInject */
    function Common($uibModal, $rootScope) {

        /* *
         * 弹出层
         *
         * @param controller string
         * @param templateUrl string
         * @param size string 'md'or 'sm' or'lg'
         * @param backdrop true or false or 'static'. Controls presence of a backdrop
         * @param obj object  传进的scope变量
         * @return 返回处理之后的数据集合
         *
         * */
        function promptModel(controller, templateUrl, size, backdrop, windowClass, obj) {
            var scope = $rootScope.$new(true);
            angular.forEach(obj, function (value, key) {
                scope[key] = value;
            });

            $uibModal.open({
                animation: true,
                templateUrl: templateUrl || '',
                controller: controller || '',
                size: size || 'md',
                backdrop: backdrop || true,
                windowClass: windowClass || '',
                scope: scope

            });

        }

        return {
            model: {
                promptModel: promptModel
            }
        };
    }

    angular.module('app')
        .service('Common', Common);

})();



