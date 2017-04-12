/**
 * Created by tangniye on 17/4/12.
 */
(function () {
    'use strict';

    /** @ngInject */
    function User($http, $q, URL_CONFIG) {

        this.login = function (user) {
            var defer = $q.defer();
            var _user = _.pick(user, ['phone', 'password']);
            $http.post(URL_CONFIG.LOGIN, _user).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        };

    }

    angular.module('app').service('User', User);
})();

