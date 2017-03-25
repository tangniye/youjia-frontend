/**
 * Created by tangniye on 2016/10/18.
 */
'use strict';
(function () {
  function Web($http, URL_CONFIG, $q) {
    'ngInject';

    /**
     * Get web system grade
     *
     * return {Promise}
     */
    function getGrade() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.WEB_GRADE + "?r=" + Math.random()).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get web distribution
     *
     * return {Promise}
     */
    function getDistribution() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.WEB_DISTRIBUTION + "?r=" + Math.random()).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the recently risk web
     *
     * return {Promise}
     */
    function getRecentlyRisk() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.WEB_RECENTLY_RISK + "?r=" + Math.random()).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the user web system risk top5
     *
     * return {Promise}
     */
    function getUserRiskTop5() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.WEB_USER_RISK_TOP5 + "?r=" + Math.random()).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the web risk top5
     *
     * return {Promise}
     */
    function getWebRiskTop5() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.WEB_RISK_TOP5 + "?r=" + Math.random()).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the web map data
     *
     * return {Promise}
     */
    function getMap() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.WEB_MAP + "?r=" + Math.random()).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    this.getGrade = getGrade;
    this.getDistribution = getDistribution;
    this.getRecentlyRisk = getRecentlyRisk;
    this.getUserRiskTop5 = getUserRiskTop5;
    this.getWebRiskTop5 = getWebRiskTop5;
    this.getMap = getMap;

  }

  angular.module('app').service('Web', Web);
})();
