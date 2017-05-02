/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function staffCtrl($scope, User, IS_MOBILE) {
    var vm = $scope;

    $scope.queryStr = {
      show: true
    };
    $scope.pageLenghth = 5;
    $scope.totalPages = 1;
    $scope.activeStaffIndex = 0;
    $scope.activeStaff = {
      "chinese_name": "袁夏雨",
      "country": "美国",
      "english_name": "Larlie",
      "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
      "graduated": "哈佛",
      "id": 1002,
      "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
      "major": "英语",
      "phone": "13550000000",
      "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
      "update_time": "2017-04-06 11:01:59"
    };
    $scope.staffLength = 1;
    $scope.staffs = [
      {
        "chinese_name": "袁夏雨",
        "country": "美国",
        "english_name": "Larlie",
        "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
        "graduated": "哈佛",
        "id": 1002,
        "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
        "update_time": "2017-04-06 11:01:59"
      },
      {
        "chinese_name": "袁夏雨",
        "country": "美国",
        "english_name": "Larlie",
        "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
        "graduated": "哈佛",
        "id": 1002,
        "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
        "major": "英语",
        "phone": "13550000000",
        "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
        "update_time": "2017-04-06 11:01:59"
      }
    ];

    $scope.showPreviousStaff = function () {
      if ($scope.activeStaffIndex > 0) {
        getProfile($scope.activeStaffIndex - 1)
      }
    };

    $scope.showNextStaff = function () {
      if ($scope.activeStaffIndex < $scope.staffLength - 1) {
        getProfile($scope.activeStaffIndex + 1)
      }
    };

    $scope.showPreviousPage = function () {

    }
    $scope.showNextPage = function () {

    }

    getStaffList($scope.queryStr);

    function getStaffList(queryStr) {
      User.getTeacherList(queryStr).then(function (res) {
        $scope.staffs = res.items;
        $scope.activeStaffIndex = 0;
        $scope.staffLength = res.total;
        if ($scope.staffLength > 0) {
          getProfile(0);
        }
      })
    }

    function getProfile(staffIndex) {
      if ($scope.staffs[staffIndex].profile) {
        $scope.activeStaff = $scope.staffs[staffIndex].profile
      } else {
        var userid = $scope.staffs[staffIndex].id;
        User.get(userid).then(function (res) {
          $scope.staffs[staffIndex].profile = res;
          $scope.activeStaff = res;
        })
      }
    }

    // angular.element('.tutors-slider-container-inner').css('width', 1800);
    // var margin = parseInt(angular.element('.tutor-item').css('marginRight')),
    //   itemWidth = angular.element('.avatar-container').outerWidth();
    // var anchorDom = angular.element('.anchor');
    //
    // vm.seeMore = function (index) {
    //   if (index === vm.activeIndex) {
    //     return;
    //   }
    //   var offset = "translateX(" + (index - 3) * (margin + itemWidth) + "px)";
    //   anchorDom.css('transition', 'none').css('transform', offset).css('transform');
    //
    //   vm.activeIndex = index;
    // }

    vm.next = function () {
      if (vm.queryStr.page >= vm.page_total) {
        return;
      }
      vm.queryStr.page += 1;
      getTeacherList(vm.queryStr);
    };

    vm.prev = function () {
      if (vm.queryStr.page <= 1) {
        return
      }
      getTeacherList(vm.queryStr);
    };


  }

  angular.module('app.pages.staff').controller('staffCtrl', staffCtrl);
})();
