(function () {
    'use strict';
    angular.module('login', [
            'ngResource',
            'ngCookies'

        ])

        .controller('LoginController', function ($scope, $resource, $cookies) {
            if ($cookies.get('isAuth')) {
                location.href = '/';
            }
            else {
                $scope.logins = {
                    name: null,
                    password: null
                };
                $scope.showError = true;
                $scope.tipstxt;
                $scope.submit = function (from) {
                    if (!$scope.logins.name || $scope.logins.name.length === 0) {
                        $scope.tipstxt = "请输入用户名";
                        return $scope.showError = false;
                    }
                    if (!$scope.logins.password || $scope.logins.password.length === 0) {
                        $scope.tipstxt = "请输入密码";
                        return $scope.showError = false;
                    }
                    $scope.showError = true;
                    console.debug("金");
                    $resource('/v2/auth/token').save($scope.logins, function (res) {
                        console.debug("进来没");
                        var expireDate = new Date();
                        expireDate.setDate(expireDate.getDate() + 1 / 48);
                        $cookies.put('authtoken', res.accessToken, {'expires': expireDate});
                        $cookies.put('isAuth', true, {'expires': expireDate});
                        location.href = '/';
                    })

                }
                $scope.close = function () {

                    $scope.showError = true;
                }
            }
        });
})();
