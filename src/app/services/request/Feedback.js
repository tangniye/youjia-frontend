/**
 * Created by tangniye on 17/4/9.
 */
(function () {
  'use strict';

  /** @ngInject */
  function Feedback($http, $q, URL_CONFIG) {

    this.add = function (userid, feedback) {
      var defer = $q.defer();
      var _feedback = _.pick(feedback, ['study_date', 'class_time', 'leave_time', 'course_name', 'section', 'contents', 'homework', 'feedback']);
      $http.post(URL_CONFIG.FEEDBACK + '?user_id=' + userid, _feedback).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.FEEDBACK, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.modify = function (feedbackid, feedback) {
      var defer = $q.defer();
      var _feedback = _.pick(feedback, ['study_date', 'class_time', 'leave_time', 'course_name', 'section', 'contents', 'homework', 'feedback']);
      $http.put(URL_CONFIG.FEEDBACK + '?fb_id=' + feedbackid, _feedback).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.delete = function (feedbackid) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.FEEDBACK + '?fb_id=' + feedbackid).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.deleteAll = function (userid) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.FEEDBACK + '?user_id=' + userid).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

  }

  angular.module('app').service('Feedback', Feedback);
})();

