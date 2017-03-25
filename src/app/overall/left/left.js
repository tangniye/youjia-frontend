/**
 * Created by tangniye on 2016/10/14.
 */
'use strict';
(function() {
    function leftBox($timeout, IC, Web) {
        'ngInject';
        var linkFn = function(scope, elem, attr) {
            scope.icRisk = {};
            scope.icDistribution = {};
            scope.icLevel = '';

            scope.webRisk = {};
            scope.webDistribution = {};
            scope.webLevel = '';

            getData();
            var icriskchart = echarts.init(elem.find("#ic-dist-dom")[0]);
            var webriskchart = echarts.init(elem.find("#web-dist-dom")[0]);

            function getData() {
                IC.getRiskGrade().then(function(res) {
                    scope.icRisk = res;
                    scope.icLevel = res.level;
                    scope.icRisk.level = covertLevel(scope.icRisk.level);
                    var data = [];
                    data.push(+res.grade);
                    icriskchart.setOption(drawbar(data));
                });

                IC.getDistribution().then(function(res) {
                    scope.icDistribution = res;
                    if (res.length > 6) {
                        $timeout(function() {
                            new fnScrollList('tb-scroll-1', 'tr', 1, 1000);
                        });
                    }
                });

                Web.getGrade().then(function(res) {
                    scope.webRisk = res;
                    scope.webLevel = res.level;
                    scope.webRisk.level = covertLevel(scope.webRisk.level);
                    var data = [];
                    data.push(+res.grade);
                    webriskchart.setOption(drawbar(data));
                });

                Web.getDistribution().then(function(res) {
                    scope.webDistribution = res;
                    if (res.length > 6) {
                        $timeout(function() {
                            new fnScrollList('tb-scroll-2', 'tr', 1, 1000);
                        });
                    }
                });

                setTimeout(function() {
                    getData()
                }, 1000 * 60 * 60)

            }

            function covertLevel(l) {
                var level = '';
                switch (l) {
                    case 'h':
                        level = '高危';
                        break;
                    case 'm':
                        level = '中危';
                        break;
                    case 'l':
                        level = '低危';
                        break;
                    case 's':
                        level = '安全';
                        break;
                }
                return level;
            }


        };
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: '/app/overall/left/index.html',
            link: linkFn
        }
    }

    function drawbar(data) {
        return {
            width: data[0] / 100 * 170,
            grid: {
                left: '0',
                // right: '4%',
                // bottom: '3%',

                containLabel: false,
                show: false

            },
            yAxis: [{
                type: 'category',
                show: false,
                data: ['四川'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            xAxis: [{
                show: false,
                type: 'value'
            }],
            backgroundColor: '#02372c',


            series: [{
                name: 'Top 10',
                type: 'bar',
                barWidth: '6',
                data: data,
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        textStyle: {
                            color: '' //color of value
                        }
                    }
                },
                itemStyle: {
                    normal: {

                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#05fdeb' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#8bd56d' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#faad04' // 100% 处的颜色
                        }], false)
                    }
                }
            }]
        };
    }
    angular.module('app.overall').directive('leftBox', leftBox);
})();
