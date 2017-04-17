/**
 * Created by tangniye on 17/4/9.
 */
(function () {
    'use strict';

    /** @ngInject */
    function Case($http, $q, URL_CONFIG) {

        this.getCaseList = function (query) {
            var defer = $q.defer();
            $http.get(URL_CONFIG.CASE_LIST, {params: query}).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        };
        
    }

    angular.module('app').service('Case', Case);
})();

