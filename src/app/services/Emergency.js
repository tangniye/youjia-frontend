(function () {
    function Emergency($http, URL_CONFIG, $q) {
        'ngInject';

        function getTotal() {
            var defer = $q.defer();
            $http.get(URL_CONFIG.EMERGENCY_TOTAL).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }

        function getDetail() {
            var defer = $q.defer();
            $http.get(URL_CONFIG.EMERGENCY_DETAIL).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }

        function getTop() {
            var defer = $q.defer();
            $http.get(URL_CONFIG.EMERGENCY_TOP).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }

        function getList(params) {
            var defer = $q.defer();
            var query = {};
            for (var i in params) {
                if (params[i] || params[i] === 0 || typeof params[i] == 'boolean') {
                    query[i] = params[i];
                }
            }
            $http.get(URL_CONFIG.EMERGENCY_TABLE, {params: query}).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }

        function deal(task) {
            var defer = $q.defer();
            $http.post(URL_CONFIG.EMERGENCY_DEAL, $.param(task)).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }

        this.getTotal = getTotal;
        this.getDetail = getDetail;
        this.getTop = getTop;
        this.getList = getList;
        this.deal = deal;

    }

    angular.module('app').service('Emergency', Emergency);
})();
