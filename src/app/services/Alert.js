/**
 * Created by tangniye on 2016/11/2.
 */
'use strict';
(function () {
  function Alert($http, URL_CONFIG, $q) {
    'ngInject';

    function getSummary() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_NEWSSUMMARY).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    function getNews(parameter) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_NEWS,{params: parameter}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    function getIncidents() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_INCIDENTS).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    function getIncidentsDetail(parameter) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_INCIDENTS_DETAIL,{params: parameter}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    function getInformation() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_INFORMATION).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

    function getPolicies() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_POLICIES).success(function (res) {
        defer.resolve(res.data);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }
   function getCommany() {
      var defer = $q.defer();
      $http.get(URL_CONFIG.ALERT_COMMANY).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

     function postReport(parameter,isbatch) {
      var defer = $q.defer();
      var url=isbatch?URL_CONFIG.ALERT_REPORTS:URL_CONFIG.ALERT_REPORT;
      $http.post(url,$.param(parameter)).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }
    this.getSummary = getSummary;
    this.getCommany= getCommany;
    this.postReport=postReport;
    this.getNews = getNews;
    this.getIncidents = getIncidents;
    this.getIncidentsDetail = getIncidentsDetail;
    this.getInformation = getInformation;
    this.getPolicies = getPolicies;

  }

  angular.module('app').service('Alert', Alert);
})();

