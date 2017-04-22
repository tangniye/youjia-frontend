/**
 * Created by tangniye on 17/4/9.
 */
(function () {
  'use strict';

  /** @ngInject */
  function History($http, $q, URL_CONFIG) {

    this.add = function (userid, history) {
      var defer = $q.defer();
      var _history = _.pick(history, ['admission_school', 'admission_major', 'test1', 'score1', 'test2', 'score2', 'test3', 'score3', 'test4', 'score4', 'test5', 'score5¬']);
      $http.post(URL_CONFIG.HISTORY + '?user_id=' + userid, _history).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.HISTORY, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.get = function (userid) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.HISTORY + '?user_id=' + userid).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

  }

  angular.module('app').service('History', History);
})();

