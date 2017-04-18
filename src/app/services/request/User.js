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
    };

    this.get = function (userid) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.PROFILE + '?user_id=' + userid).success(function (res) {
        res.photo = 'data:image/png;base64,' + res.photo;
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.delete = function (userids) {
      var defer = $q.defer();
      $http.delete(URL_CONFIG.DELETE_USER + '?user_ids=' + userids).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getTeacherList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.TEACHER_LIST, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.addTeacher = function (teacher) {
      var defer = $q.defer();
      teacher.photo = teacher.photo.slice(22);
      var _teacher = _.pick(teacher, ['photo', 'chinese_name', 'english_name', 'graduated', 'major', 'country', 'phone', 'wechat', 'introduce', 'success_case', 'feature', 'show']);
      $http.post(URL_CONFIG.ADD_TEACHER, _teacher).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.modifyTeacher = function (userid, teacher) {
      var defer = $q.defer();
      teacher.photo = teacher.photo.slice(22);
      var _teacher = _.pick(teacher, ['photo', 'chinese_name', 'english_name', 'graduated', 'major', 'country', 'phone', 'wechat', 'introduce', 'success_case', 'feature', 'show']);
      $http.put(URL_CONFIG.PROFILE + '?user_id=' + userid, _teacher).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getStudentList = function (query) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.STUDENT_LIST, {params: query}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.addStudent = function (student) {
      var defer = $q.defer();
      var _student = _.pick(student, ['chinese_name', 'english_name', 'sexual', 'location', 'age', 'school', 'grade', 'study_country', 'enrollment_time', 'major', 'course_name', 'learn_range', 'wechat', 'phone', 'parent_phone', 'remark']);
      $http.post(URL_CONFIG.ADD_STUDENT, _student).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.modifyStudent = function (userid, student) {
      var defer = $q.defer();
      var _student = _.pick(student, ['chinese_name', 'english_name', 'sexual', 'location', 'age', 'school', 'grade', 'study_country', 'enrollment_time', 'major', 'course_name', 'learn_range', 'wechat', 'phone', 'parent_phone', 'remark']);
      $http.put(URL_CONFIG.PROFILE + '?user_id=' + userid, _student).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.uploadAvatar = function (userid, file) {
      var defer = $q.defer();
      $http.post(URL_CONFIG.AVATAR + '?user_id=' + userid, {data: file}).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    };

    this.getAvatar = function (userid) {
      var defer = $q.defer();
      $http.get(URL_CONFIG.AVATAR + '?user_id=' + userid).success(function (res) {
        defer.resolve(res);
      }).error(function (res) {
        defer.reject(res);
      });
      return defer.promise;
    }

  }

  angular.module('app').service('User', User);
})();

