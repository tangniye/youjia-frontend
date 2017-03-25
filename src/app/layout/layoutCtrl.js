(function() {
    function layoutCtrl($scope, $timeout) {
        'ngInject';
        $scope.remote = false;
        $scope.active = 1;
        $scope.now = '';
        var timer;
        getNow();

        function getNow() {
            $scope.now = moment().format('YYYY年MM月DD日');
            $scope.time = moment().format('HH:mm:ss') + ' ' + moment().format('dddd');
            if (timer) $timeout.cancel(timer);
            timer = $timeout(function() {
                getNow();
            }, 1000);
        }
    }

    angular.module('app.layout').controller('layoutCtrl', layoutCtrl);
})();
