/**
 * Created by tangniye on 17/4/2.
 */
(function () {
  'use strict';

  /** @ngInject */
  function staffCtrl($scope, User) {
    var vm = $scope;

    $scope.queryStr = {
      show: true
    };

    $scope.pageLenghth = 5; // esp for desktop
    $scope.totalPages = 0; // esp for desktop
    $scope.pageIndex = 0; // esp for desktop

    $scope.activeIndexInStaffs = 0; // esp for mobile

    $scope.staffLength = 0;
    //$scope.activeStaff = { // esp for desktop
    //  "chinese_name": "袁夏雨",
    //  "country": "美国",
    //  "english_name": "Larlie",
    //  "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //  "graduated": "哈佛",
    //  "id": 1001,
    //  "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //  "major": "英语",
    //  "phone": "13550000000",
    //  "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //  "update_time": "2017-04-06 11:01:59"
    //};

    //$scope.staffs = [
    //  {
    //    "chinese_name": "袁夏雨1",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1001,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨2",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨3",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨4",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨5",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨6",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1001,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨7",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨3",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨4",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨5",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //];
    //$scope.activeStaffs = [
    //  {
    //    "chinese_name": "袁夏雨1",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1001,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨2",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨3",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨4",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //  {
    //    "chinese_name": "袁夏雨5",
    //    "country": "美国",
    //    "english_name": "Larlie",
    //    "feature": "拥有五年以上美国高中与大学申请经验。近千名学生,从初高中规划到大学申请辅导都是Claire老师亲自把关,和家长学生打成共识而制定的个性方案。几年的默契配合,让Claire老师成为了家长和学生的家人——不仅熟悉孩子的兴趣爱好,而且成为了学生的导师。Claire老师的强项在于,能站在孩子的角度讲分析学生的问题,教会学生发掘自己的内动力,让厌学生成为自己学习的主人。家长对于美国的教育体系不了解,Claire老师善于深入浅出地把中美教育体系进行对比,讲解美国学生在不同年级和不同阶段要关注的一些事情,不让家长和学生错过任何重要的时间节点。",
    //    "graduated": "哈佛",
    //    "id": 1002,
    //    "introduce": "美国留学五年，曾多次在商学院演讲以及为animalphysiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课。美国留学五年，曾多次在商学院演讲以及为animal physiology课程的新生讲课，同时在印第安纳拉法叶初中全英文教授中国文化课",
    //    "major": "英语",
    //    "phone": "13550000000",
    //    "success_case": "Lakeside School (湖滨中学,比尔盖茨母校)、The Overlake School(欧弗克莱中学)、Eastside Preparatory School(东区中学)、The Bear Creek School(熊溪中学)、Lakeside School (湖滨中学,比尔盖茨母校)。",
    //    "update_time": "2017-04-06 11:01:59"
    //  },
    //]

    // esp for desktop
    $scope.showPreviousPage = function () {
      if ($scope.pageIndex > 0) {
        $scope.pageIndex--;
        $scope.activeStaffs = _.slice($scope.staffs, $scope.pageIndex * $scope.pageLenghth, ($scope.pageIndex + 1) * $scope.pageLenghth);
        var tempStaff = $scope.activeStaffs[Math.floor($scope.pageLenghth / 2)];
        getProfileById(tempStaff.id);
      }
    };
    $scope.showNextPage = function () {
      if ($scope.pageIndex < $scope.totalPages - 1) {
        $scope.pageIndex++;
        $scope.activeStaffs = _.slice($scope.staffs, $scope.pageIndex * $scope.pageLenghth, ($scope.pageIndex + 1) * $scope.pageLenghth);
        var activeLength = $scope.activeStaffs.length;
        var midIndex = Math.floor($scope.pageLenghth / 2);
        var tempStaff = midIndex > activeLength - 1 ? $scope.staffs[activeLength - 1] : $scope.staffs[midIndex];
        getProfileById(tempStaff.id);
      }
    };
    $scope.selectStaffById = function (userId) {
      getProfileById(userId);
    };
    function getProfileById(userId) {
      var indexInStaffs = _.findIndex($scope.staffs, function (e) {
        return e.id === userId;
      });
      User.get(userId).then(function (res) {
        $scope.staffs[indexInStaffs].profile = res;
        $scope.activeStaff = $scope.staffs[indexInStaffs];
      })
    }

    // esp for mobile
    $scope.showPreviousStaff = function () {
      if ($scope.activeIndexInStaffs > 0) {
        getProfileByIndex($scope.activeIndexInStaffs - 1)
      }
    };
    $scope.showNextStaff = function () {
      if ($scope.activeIndexInStaffs < $scope.staffLength - 1) {
        getProfileByIndex($scope.activeIndexInStaffs + 1)
      }
    };
    function getProfileByIndex(indexInStaffs) {
      if (!$scope.staffs[indexInStaffs].profile) {
        var userid = $scope.staffs[indexInStaffs].id;
        User.get(userid).then(function (res) {
          $scope.staffs[indexInStaffs].profile = res;
          $scope.activeIndexInStaffs = indexInStaffs;
        })
      }
    }


    function getStaffList(queryStr) {
      User.getTeacherList(queryStr).then(function (res) {
        console.log(res)
        $scope.staffs = res.items;
        $scope.staffLength = $scope.staffs.length;
        if ($scope.staffLength > 0) {
          getProfileByIndex(0);
          $scope.activeIndexInStaffs = 0;

          $scope.pageIndex = 0;
          $scope.activeStaffs = _.slice($scope.staffs, $scope.pageIndex * $scope.pageLenghth, ($scope.pageIndex + 1) * $scope.pageLenghth);
          var activeLength = $scope.activeStaffs.length;
          var midIndex = Math.floor($scope.pageLenghth / 2);
          var tempStaff = midIndex > activeLength - 1 ? $scope.staffs[activeLength - 1] : $scope.staffs[midIndex];
          getProfileById(tempStaff.id);
        }
      })
    }

    getStaffList($scope.queryStr);

  }

  angular.module('app.pages.staff').controller('staffCtrl', staffCtrl);
})();
