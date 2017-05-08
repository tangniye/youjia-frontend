/**
 * Created by tangniye on 2017/5/8.
 */
(function () {
    'use strict';

    /** @ngInject */
    function Constant() {
        return {
            qq: '1377716383',
            wechat: 'uplusway',
            tel: '18183286948'
        };
    }

    angular.module('app')
        .service('Constant', Constant);

})();



