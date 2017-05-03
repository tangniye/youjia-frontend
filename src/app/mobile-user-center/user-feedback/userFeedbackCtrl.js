(function () {
  /** @ngInject */
  function userFeedbackCtrl($scope, Feedback) {
    $scope.pagination = {
      pageIndex: 1,
      pageSize: 5,
      totalPages: 0
    };
    $scope.feedbackCards = [];

    function goToPage(pageIndex) {
      var query = {
        page: pageIndex,
        page_size: $scope.pagination.pageSize,
        user_id: $scope.me.id
      };

      Feedback.getList(query).then(function (res) {
        _.forEach(res.items, function (e) {
          $scope.feedbackCards.push(e)
        });
        $scope.pagination.pageIndex = res.page;
        $scope.pagination.totalPages = res.page_total;
      })
    }

    $scope.getMore = function () {
      goToPage($scope.pagination.pageIndex + 1)
    };

    goToPage(1);

  }
  angular.module('app.mobileUserCenter.userSchedule')
    .controller('userFeedbackCtrl', userFeedbackCtrl);
})();
