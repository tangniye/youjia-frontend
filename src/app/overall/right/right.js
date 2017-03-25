/**
 * Created by tangniye on 2016/10/14.
 */
'use strict';
(function() {
    function rightBox($timeout, IC, Web) {
        'ngInject';
        var linkFn = function(scope, elem, attr) {

            scope.icDeviceTypeTop5 = {};
            scope.webUserRiskTop5 = {};

            var chart1, chart2;
            initChart();
            getData();

            function initChart() {
                chart1 = echarts.init(document.getElementById('ic_risk_device_top5'));
                chart2 = echarts.init(document.getElementById('web_risk_top5'))
            }

            function getData() {
                IC.getDeviceTypeTop5().then(function(res) {
                    res = res.sort(function(a, b) {
                        return b.value - a.value;
                    });
                    scope.icDeviceTypeTop5 = res;
                    $timeout(function() {
                        var instanceDom = document.getElementById('ic_device_type_top5'),
                            chart = echarts.getInstanceByDom(instanceDom);
                        if (chart) {
                            chart.dispose();
                        }
                        chart = echarts.init(instanceDom);
                        var data = handleICDeviceTypeTop5Data(res),
                            name = '漏洞总数',
                            colorList = ['#c12e34', '#e6b600', '#0098d9', '#2b821d', '#005eaa'];
                        $('#ic_device_type_top5 div:first-child').css('width', '100%');
                        drawBar(chart, data, name, colorList);
                    });
                });

                IC.getRiskDeviceTop5().then(function(res) {
                    res = res.sort(function(a, b) {
                        return a.leak.total - b.leak.total;
                    });
                    var id = 'ic_risk_device_top5',
                        name = 'ic',
                        data = handleICRiskDeviceTop5Data(res),
                        colorList = ['#06fdea', '#4ce8a8', '#8dd46a', '#cebf2d', '#feaa00'];
                    drawCircle(chart1, id, name, data, colorList);
                });

                Web.getUserRiskTop5().then(function(res) {
                    res = res.sort(function(a, b) {
                        return b.grade - a.grade;
                    });
                    scope.webUserRiskTop5 = res;
                    $timeout(function() {
                        var instanceDom = document.getElementById('web_user_risk_top5'),
                            chart = echarts.getInstanceByDom(instanceDom);
                        if (chart) {
                            chart.dispose();
                        }
                        chart = echarts.init(instanceDom);
                        var data = handleWebTop5Data(scope.webUserRiskTop5),
                            name = '风险指数',
                            colorList = ['#06fdea', '#4ce8a8', '#8dd46a', '#cebf2d', '#feaa00'];
                        $('#web_user_risk_top5 div:first-child').css('width', '100%');
                        drawBar(chart, data, name, colorList);
                    });
                });

                Web.getWebRiskTop5().then(function(res) {
                    res = res.sort(function(a, b) {
                        return b.grade - a.grade;
                    });
                    var id = 'web_risk_top5',
                        name = 'web',
                        data = handleWebRiskTop5Data(res),
                        colorList = ['#06fdea', '#4ce8a8', '#8dd46a', '#cebf2d', '#feaa00'];
                    drawCircle(chart2, id, name, data, colorList);
                });

                $timeout(function() {
                    getData()
                }, 1000 * 60 * 60)
            }

            function drawBar(chart, data, name, colorList) {
                var option = {
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        padding: 10
                    },
                    grid: {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    xAxis: {
                        type: 'value',
                        position: 'top',
                        show: false
                            // axisLine: { show: false },
                            // axisLabel: { show: false },
                            // axisTick: { show: false },
                            // splitLine: { show: false }
                    },
                    yAxis: {
                        type: 'category',
                        show: false,
                        // axisLine: { show: false },
                        // axisLabel: { show: false },
                        // axisTick: { show: false },
                        // splitLine: { show: false },

                        data: data.type
                    },
                    series: [{
                        name: name,
                        type: 'bar',
                        barWidth: '6',
                        label: {
                            normal: {
                                show: false,
                                //position: 'insideLeft',
                                position: [5, 0],
                                textStyle: {
                                    color: '#fff'
                                },
                                formatter: '{c}'
                            }
                        },
                        itemStyle: {
                            // normal: {
                            //   color: function (params) {
                            //     return colorList[data.data.length - params.dataIndex - 1]
                            //   }
                            // }
                            normal: {
                                barBorderRadius: 5,
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
                        },
                        data: data.data
                    }]
                };
                chart.setOption(option);
            }

            function drawCircle(chart, id, name, data, colorList) {

                var placeHolderStyle = {
                    normal: {
                        color: 'transparent',
                        label: { show: false },
                        labelLine: { show: false }
                    },
                    emphasis: {
                        color: 'transparent'
                    }
                };
                var seriesData = [{
                        name: '1',
                        type: 'pie',
                        clockWise: false,
                        radius: [107, 125],
                        center: ['50%', '90%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    return colorList[params.seriesIndex]
                                }
                            }
                        },
                        data: [{
                            value: 25,
                            name: data.data[0]
                        }, {
                            value: 75,
                            name: 'invisible',
                            tooltip: {
                                show: false
                            },
                            itemStyle: placeHolderStyle
                        }]
                    }, {
                        name: '2',
                        type: 'pie',
                        clockWise: false,
                        radius: [82, 100],
                        center: ['50%', '90%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    return colorList[params.seriesIndex]
                                }
                            }
                        },
                        data: [{
                            value: 22,
                            name: data.data[1]
                        }, {
                            value: 78,
                            name: 'invisible',
                            tooltip: {
                                show: false
                            },
                            itemStyle: placeHolderStyle
                        }]
                    }, {
                        name: '3',
                        type: 'pie',
                        clockWise: false,
                        radius: [57, 75],
                        center: ['50%', '90%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    return colorList[params.seriesIndex]
                                }
                            }
                        },
                        data: [{
                            value: 19,
                            name: data.data[2]
                        }, {
                            value: 81,
                            name: 'invisible',
                            tooltip: {
                                show: false
                            },
                            itemStyle: placeHolderStyle
                        }]
                    }, {
                        name: '4',
                        type: 'pie',
                        clockWise: false,
                        radius: [32, 50],
                        barBorderRadius: 5,
                        center: ['50%', '90%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    return colorList[params.seriesIndex]
                                }
                            }
                        },
                        data: [{
                            value: 16,
                            name: data.data[3]
                        }, {
                            value: 84,
                            name: 'invisible',
                            tooltip: {
                                show: false
                            },
                            itemStyle: placeHolderStyle
                        }]
                    }, {
                        name: '5',
                        type: 'pie',
                        clockWise: false,
                        radius: [7, 25],
                        center: ['50%', '90%'],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    return colorList[params.seriesIndex]
                                }
                            }
                        },
                        data: [{
                            value: 13,
                            name: data.data[4]
                        }, {
                            value: 87,
                            name: 'invisible',
                            tooltip: {
                                show: false
                            },
                            itemStyle: placeHolderStyle
                        }]
                    }],
                    len = seriesData.length - data.data.length;
                seriesData.splice(-len, len);
                var covertLevel = function(l) {
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
                };
                var option = {
                    tooltip: {
                        trigger: 'item',
                        backgroundColor: 'rgba(255,255,255,0.3)',
                        padding: 10,
                        formatter: function(params) {
                            if (params.dataIndex == 0 && name == 'ic') {
                                var level = covertLevel(data.leak_level[params.seriesIndex]);
                                return '风险工控系统' + '<br/>' + '地域：' + data.location[params.seriesIndex] + '<br/>' + 'IP：' + data.data[params.seriesIndex] + '<br/>' + '设备类型：' + data.type[params.seriesIndex] + '<br/>' + '漏洞总数：' + data.leak_total[params.seriesIndex] + '<br/>' + '风险等级：' + level;
                            } else if (params.dataIndex == 0 && name == 'web') {
                                var level = covertLevel(data.level[params.seriesIndex]);
                                return '风险网站' + '<br/>' + '地域：' + data.location[params.seriesIndex] + '<br/>' + '用户：' + data.user[params.seriesIndex] + '<br/>' + 'URL：' + data.url[params.seriesIndex] + '<br/>' + '风险等级：' + level;
                            }
                        }
                    },
                    legend: {
                        orient: 'vertical',
                        x: document.getElementById(id).offsetWidth / 2 + 5,
                        y: '12%',
                        itemHeight: 10,
                        itemWidth: 15,
                        itemGap: 13,
                        textStyle: {
                            color: 'rgba(255,255,255,0.63)'
                        },
                        data: data.data
                    },
                    series: seriesData
                };

                chart.setOption(option);

            }

            function handleICDeviceTypeTop5Data(data) {
                var chartData = {
                    type: [],
                    data: []
                };
                for (var i = data.length - 1; i >= 0; i--) {
                    chartData.type.push(data[i]._id);
                    chartData.data.push(data[i].value);
                }
                return chartData;
            }

            function handleICRiskDeviceTop5Data(data) {
                var chartData = {
                    data: [],
                    location: [],
                    type: [],
                    leak_total: [],
                    leak_level: []
                };
                for (var i = data.length - 1; i >= 0; i--) {
                    chartData.data.push(cutWord(data[i].ip, 15));
                    chartData.location.push(data[i].location.city + data[i].location.district);
                    chartData.type.push(data[i].type);
                    chartData.leak_total.push(data[i].leak.total);
                    chartData.leak_level.push(data[i].leak.level);
                }
                return chartData;
            }

            function handleWebTop5Data(data) {
                var chartData = {
                    type: [],
                    data: []
                };
                for (var i = data.length - 1; i >= 0; i--) {
                    chartData.type.push(data[i].user);
                    chartData.data.push(data[i].grade);
                }
                return chartData;
            }

            function handleWebRiskTop5Data(data) {
                var chartData = {
                    data: [],
                    url: [],
                    location: [],
                    user: [],
                    level: [],
                    grade: []
                };
                for (var i = data.length - 1; i >= 0; i--) {
                    chartData.data.push(cutWord(data[i].url, 15));
                    chartData.url.push(data[i].url);
                    chartData.location.push(data[i].location.city + data[i].location.district);
                    chartData.user.push(data[i].user);
                    chartData.level.push(data[i].level);
                    chartData.grade.push(data[i].grade);
                }
                return chartData;
            }

            function cutWord(word, length) {
                if (word == "" || word == undefined) {
                    return;
                }
                if (word.length > length) {
                    word = word.substr(0, length) + "...";
                }
                return word;
            }

        };
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: '/app/overall/right/index.html',
            link: linkFn
        }
    }

    angular.module('app.overall').directive('rightBox', rightBox);
})();
