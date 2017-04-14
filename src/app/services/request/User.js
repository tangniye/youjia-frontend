/**
 * Created by tangniye on 17/4/12.
 */
(function () {
  'use strict';

  /** @ngInject */
  function User($http, $q, URL_CONFIG) {

    this.isLogin = function () {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IS_LOGIN).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

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

    this.logout = function () {
      var defer = $q.defer();
      $http.get(URL_CONFIG.LOGOUT).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.verify = function (obj) {
      var defer = $q.defer();
      var _obj = _.pick(obj, ['phone', 'parent_phone', 'study_country']);
      $http.post(URL_CONFIG.VERIFY, _obj).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.resetPwd = function (obj, is_login) {
      var defer = $q.defer();
      var _obj = is_login ? _.pick(obj, ['password']) : _.pick(obj, ['token', 'password']);

      $http.post(URL_CONFIG.RESET_PASSWORD, _obj).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

  }

  angular.module('app').service('User', User);
})();

