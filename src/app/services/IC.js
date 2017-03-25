/**
 * Created by tangniye on 2016/10/14.
 */
'use strict';
(function () {
  function IC($http, URL_CONFIG, $q) {
    'ngInject';

    /**
     * Get risk grade
     *
     * return {Promise}
     */
    function getRiskGrade() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_RISK_GRADE).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the top5 device type
     *
     * return {Promise}
     */
    function getDeviceTypeTop5() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_DEVICE_TYPE_TOP5).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the device count
     *
     * return {Promise}
     */
    function getDeviceCount() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_DEVICE_COUNT).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the distribution of chengdu
     *
     * return {Promise}
     */
    function getDistribution() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_DISTRIBUTION).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the top5 risk device
     *
     * return {Promise}
     */
    function getRiskDeviceTop5() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_RISK_DEVICE_TOP5).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the recently risk device
     *
     * return {Promise}
     */
    function getRecentlyDevice() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_RECENTLY_RISK_DEVICE).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    /**
     * Get the map data
     *
     * return {Promise}
     */
    function getMap() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.IC_MAP).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    this.getRiskGrade = getRiskGrade;
    this.getDeviceTypeTop5 = getDeviceTypeTop5;
    this.getDeviceCount = getDeviceCount;
    this.getDistribution = getDistribution;
    this.getRiskDeviceTop5 = getRiskDeviceTop5;
    this.getRecentlyDevice = getRecentlyDevice;
    this.getMap = getMap;

  }

  angular.module('app').service('IC', IC);
})();
