/**
 * Created by tangniye on 17/4/9.
 */
(function () {
  'use strict';

  /** @ngInject */
  function Case($http, $q, URL_CONFIG) {

    this.getCaseDetailList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.CASE_DETAIL, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getCaseList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.CASE, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.add = function (success_case) {
      var defer = $q.defer();
      var _success_case = _.pick(success_case, ['chinese_name', 'tag', 'school', 'feeling', 'comment', 'test1', 'score1', 'test2', 'score2']);
      $http.post(URL_CONFIG.CASE, _success_case).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.modify = function (caseid, success_case) {
      var defer = $q.defer();
      var _success_case = _.pick(success_case + '?case_id=' + caseid, ['chinese_name', 'tag', 'school', 'feeling', 'comment', 'test1', 'score1', 'test2', 'score2']);
      $http.put(URL_CONFIG.CASE, _success_case).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.delete = function (caseids) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.CASE + '?case_ids=' + caseids).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

  }

  angular.module('app').service('Case', Case);
})();

