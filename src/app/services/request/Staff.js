/**
 * Created by tangniye on 17/4/9.
 */
(function () {
    'use strict';

    function Staff($http, $q, URL_CONFIG) {
        'ngInject';

        this.getStaffList = function (query) {
            var defer = $q.defer();
            $http.get(URL_CONFIG.STAFF_LIST, {params: query}).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }
        
        this.getProfile = function (userid) {
            var defer = $q.defer();
            $http.get(URL_CONFIG.TUTOR_LIST, {params: userid}).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }
        
    }

    angular.module('app').service('Staff', Staff);
})();

