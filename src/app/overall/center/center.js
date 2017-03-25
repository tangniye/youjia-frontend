/**
 * Created by tangniye on 2016/10/14.
 */
'use strict';
(function() {
    function centerBox($window, $timeout, $q, Chart, IC, Web) {
        'ngInject';
        var linkFn = function(scope, elem, attr) {

            $('#map').css('height', $window.innerHeight);
            var chart = echarts.init(document.getElementById('map'));

            getData();

            function getData() {

                $q.all([IC.getMap(), Web.getMap()]).then(function(res) {
                    var icData = handleMapICData(res[0]);
                    var webData = handleMapWebData(res[1]);
                    Chart.drawMap('liaoning', chart, webData, icData);
                },function(res){
                    Chart.drawMap('liaoning', chart, [], []);
                });

                $timeout(function() {
                    getData()
                }, 1000 * 60 * 60)

            }

            function handleMapICData(data) {
                var chartData = [];
                for (var i in data) {
                    var total, level;
                    if (data[i].leak && data[i].leak.total) {
                        total = data[i].leak.total;
                    } else {
                        total = 0;
                    }
                    if (data[i].leak && data[i].leak.level) {
                        level = data[i].leak.level;
                    } else {
                        level = 's';
                    }
                    chartData.push({
                        name: data[i].location.district,
                        value: [data[i].location.point.longitude, data[i].location.point.latitude, data[i].ip, data[i].type, total, level]
                    });
                }
                return chartData;
            }

            function handleMapWebData(data) {
                var chartData = [];
                for (var i in data) {
                    chartData.push({
                        name: data[i].location.district,
                        value: [data[i].location.point.longitude, data[i].location.point.latitude, data[i].url, data[i].user, data[i].level, data[i].grade]
                    });
                }
                return chartData;
            }

            $(window).on('resize', function() {
                $('#map').css('height', $window.innerHeight);
                chart.resize();
            });


        };

        return {
            restrict: 'EA',
            replace: true,
            templateUrl: '/app/overall/center/index.html',
            link: linkFn
        }
    }

    angular.module('app.overall').directive('centerBox', centerBox);
})();
