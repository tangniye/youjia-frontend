/**
 * Created by tangniye on 17/4/9.
 */
(function () {
  'use strict';

  /** @ngInject */
  function Audition($http, $q, URL_CONFIG) {

    this.getList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.AUDITION, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.add = function (audition) {
      var defer = $q.defer();
      var _audition = _.pick(audition, ['phone', 'name', 'teacher']);
      $http.post(URL_CONFIG.AUDITION, _audition).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.delete = function (auditionids) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.AUDITION + '?apply_ids=' + auditionids).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

  }

  angular.module('app').service('Audition', Audition);
})();

