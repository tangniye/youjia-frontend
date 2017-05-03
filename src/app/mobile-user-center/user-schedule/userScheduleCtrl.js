(function () {
  /** @ngInject */
  function userScheduleCtrl($scope, Schedule) {

    $scope.weeks = ['星期一','星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
    $scope.times = ['08:30-10:00', '10:00-12:00', '13:30-15:30', '15:30-17:30', '19:00-21:00']
    Schedule.getByUserId($scope.me.id).then(function (res) {
      $scope.data = handleScheduleData(res);
    });

    function handleScheduleData (data) {
      var dataByWeek = [[],[],[],[],[],[],[]];
      var dayIndex;
      var dataByTime = [];
      _.forEach(data, function (e) {
        dayIndex = e.day - 1;
        dataByWeek[dayIndex].push(e);
      });
      _.forEach(dataByWeek, function (day) {
        var temp = new Array(5);
        _.forEach(day, function (course) {
          switch (course.start_time) {
            case '08:30':
                  temp[0] = course;
                  return;
            case '10:00':
                  temp[1] = course;
                  return;
            case '13:30':
                  temp[2] = course;
                  return;
            case '15:30':
                  temp[3] = course;
                  return;
            case '19:00':
                  temp[4] = course;
            default:
                  return;
          }
        });
        dataByTime.push(temp);
      });
      return dataByTime;
    }
  }
  angular.module('app.mobileUserCenter.userSchedule')
    .controller('userScheduleCtrl', userScheduleCtrl);
})();
