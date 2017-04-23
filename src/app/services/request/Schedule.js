/**
 * Created by tangniye on 17/4/22.
 */
(function () {
  'use strict';

  /** @ngInject */
  function Schedule($http, $q, URL_CONFIG) {

    this.add = function (schedule) {
      var defer = $q.defer();
      var _schedule = _.pick(schedule, ['course_name', 'teacher_user_id', 'student_user_id', 'day', 'start_time', 'stop_time']);
      $http.post(URL_CONFIG.SCHEDULE, _schedule).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.modify = function (scheduleId, schedule) {
      var defer = $q.defer();
      var _schedule = _.pick(schedule, ['course_name', 'teacher_user_id']);
      $http.put(URL_CONFIG.SCHEDULE + '?table_id=' + scheduleId, _schedule).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getAvailableTeacher = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.AVAILABLE_TEACHER, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getStudentList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.SCHEDULE_STUDENT_LIST, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getTeacherList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.SCHEDULE_TEACHER_LIST, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getByUserId = function (userid) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.SCHEDULE_BY_USER + '?user_id=' + userid).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };
    
    this.delete = function (scheduleId) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.SCHEDULE + '?table_id=' + scheduleId).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.deleteAll = function (userid) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.SCHEDULE + '?user_id=' + userid).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

  }

  angular.module('app').service('Schedule', Schedule);
})();

