/**
 * Created by tangniye on 2016/10/15.
 */
'use strict';
(function () {
    function Chart($http, $q, URL_CONFIG) {
        'ngInject';

        /**
         * 加载地图
         * @param mapName 地图名（地图文件的名字）
         * @param callback 回调
         */
        function registerMap(mapName) {
            var defer = $q.defer();
            $http.get(URL_CONFIG.MAP + mapName + ".json?r=" + Math.random()).success(function (res) {
                defer.resolve(res);
            }).error(function (res) {
                defer.reject(res);
            });
            return defer.promise;
        }

        this.getAreaColorByLevel = function (level) {
            var color, emphasisColor;
            switch (level) {
                case 'h':
                    color = 'rgba(152,32,41,0.6)';
                    emphasisColor = 'rgba(152,32,41,0.9)';
                    break;
                case 'm':
                    color = 'rgba(173,87,24,0.6)';
                    emphasisColor = 'rgba(173,87,24,0.9)';
                    break;
                case 'l':
                    color = 'rgba(173,144,24,0.6)';
                    emphasisColor = 'rgba(173,144,24,0.9)';
                    break;
                case 's':
                    color = 'rgba(46,102,41,0.6)';
                    emphasisColor = 'rgba(46,102,41,0.9)';
                    break;
                default:
                    color = 'rgba(0,42,75,0.6)';
                    emphasisColor = 'rgba(0,42,75,0.9)';
                    break;
            }
            return [color, emphasisColor];
        };

        this.drawMap = function (mapName, chart, data1, data2) {

            var covertLevel = function (l) {
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
            var getItemColor = function (val) {
                var color;
                switch (val) {
                    case'h':
                        color = '#d21e06';
                        break;
                    case 'm':
                        color = '#da9200';
                        break;
                    case 'l':
                        color = '#63e80f';
                        break;
                    case 's':
                        color = '#06d2c5';
                        break;
                }
                return color;
            };
            var getClass = function (l) {
                var bgClass, fontClass;
                switch (l) {
                    case 'h':
                        bgClass = 'bg-red';
                        fontClass = 'red';
                        break;
                    case 'm':
                        bgClass = 'bg-orange';
                        fontClass = 'orange';
                        break;
                    case 'l':
                        bgClass = 'bg-green';
                        fontClass = 'green';
                        break;
                    case 's':
                        bgClass = 'bg-blue';
                        fontClass = 'blue';
                        break;
                }
                return [bgClass, fontClass]
            };
            var getLineColor = function (l) {
                var color;
                switch (l) {
                    case 'h':
                        color = '#d90900';
                        break;
                    case 'm':
                        color = '#ffab00';
                        break;
                    case 'l':
                        color = '#79ae58';
                        break;
                    case 's':
                        color = '#06d2c5';
                        break;
                }
                return color
            };
            var option = {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    padding: [10, 20],
                    enterable: true,
                    triggerOn: 'none',
                    alwaysShowContent: true,
                    formatter: function (param) {
                        if (param.seriesIndex == 0 && param.data.value) {
                            var level = covertLevel(param.data.value[4]);
                            var classes = getClass(param.data.value[4]);
                            return '<div class="echart-tooltip">' + '<div class="header ' + classes[0] + '"><span class="iconfont icon-web mr10"></span>' + param.seriesName + '</div>地域：<span class="' + classes[1] + '">' + param.data.name + '</span><br/>用户：<span class="' + classes[1] + '">' + param.data.value[3] + '</span><br/>风险网站：<span class="' + classes[1] + '">' + param.data.value[2] + '</span><br/>风险等级：<span class="' + classes[1] + '">' + level + '</span></div>';
                        }
                        if (param.seriesIndex == 1) {
                            var level = covertLevel(param.data.value[5]);
                            var classes = getClass(param.data.value[5]);
                            return '<div class="echart-tooltip">' + '<div class="header ' + classes[0] + '"><span class="iconfont icon-ic mr10"></span>' + param.seriesName + '</div>地域：<span class="' + classes[1] + '">' + param.data.name + '</span><br/>IP：<span class="' + classes[1] + '">' + param.data.value[2] + '</span><br/>设备类型：<span class="' + classes[1] + '">' + param.data.value[3] + '</span><br/>漏洞总数：<span class="' + classes[1] + '">' + param.data.value[4] + '</span><br/>风险等级：<span class="' + classes[1] + '">' + level + '</span></div>';
                        }
                    }
                },
                geo: {
                    map: mapName,
                    roam: true,
                    zoom: 1.2,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: 'rgba(2,5,5,0.69)',
                            borderColor: 'rgba(0,223,176,0.9)',
                            borderWidth: 2,
                            shadowColor: 'rgba(4, 5, 6, 0.9)',
                            shadowBlur: 10,
                            shadowOffsetY: 10,
                            shadowOffsetX: 2
                        },
                        emphasis: {
                            areaColor: 'rgba(2,5,5,0.8)',
                            borderWidth: 3
                        }
                    }
                },
                series: [
                    {
                        name: '网站',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: data1,
                        symbol: 'path://M114.83 432.995C172.707 235.374 299.485 94.42 531.3 74.33c15.964-1.399 38.314-0.132 56.54-3.592 15.698-3.06 34.854-14.367 52.948-21.818 73.435-30.065 235.738-82.881 317.687-18.093 71.105 56.343 58.005 193.3 14.103 282.632 35.057 70.578 60.995 168.891 45.898 278.98-205.94 8.445-445.935 1.128-645.986 3.657 6.716 106.295 73.668 187.712 172.98 199.217 97.048 11.244 164.166-43.434 208.267-105.03h247.047c-64.188 183.856-227.358 326.47-479.992 307.978-57.473-4.257-102.236-20.956-151.828-39.91-82.783 45.167-265.967 112.217-338.842 18.092-55.343-71.44-19.788-201.417 10.579-286.16 61.461-171.684 178.465-341.767 292.979-438.416 0.66-2.997 3.523-3.662 3.523-7.254-90.465 46.033-151.46 122.326-222.372 188.382z m868.328-268.067c-3.396-123.324-162.905-111.217-247.116-61.595 94.055 37.515 162.701 101.107 218.842 177.469 12.24-38.714 29.535-70.844 28.274-115.874zM372.49 465.588h391.82c-11.372-251.969-379.517-231.615-391.82 0zM83.04 907.665c19.655 111.552 176.301 79.092 247.111 29.003-92.957-52.018-150.863-139.885-197.691-239.2-21.72 53.746-62.394 136.495-49.42 210.197z',
                        symbolSize: 20,
                        showEffectOn: 'emphasis',
                        rippleEffect: {
                            period: 4,
                            scale: 3,
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'bottom',
                                formatter: '{b}',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var color = getItemColor(params.data.value[4]);
                                    return color;
                                }
                            }
                        },
                        zlevel: 1
                    },
                    {
                        name: '工控系统',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: data2,
                        symbol: 'path://M199.796,86.625h-47.713l-7.187-26.371L88.994,86.625H76.216l-7.188-26.371L10.731,86.625H0.212v33.163h199.584V86.625z M66.233,0.087H33.491v68.958l32.742-14.784V0.087z M139.705,0.087h-32.743v70.955l32.743-16.781V0.087z M0.02,126.979V200h199.979v-73.021H0.02zM40.279,172.529H20.713v-33.163h19.566V172.529z M79.41,172.529H59.845v-33.163H79.41V172.529z M118.742,172.529H99.175v-33.163h19.567V172.529z',
                        symbolSize: 20,
                        showEffectOn: 'emphasis',
                        rippleEffect: {
                            period: 4,
                            scale: 3,
                            brushType: 'stroke'
                        },
                        label: {
                            normal: {
                                show: true,
                                position: 'bottom',
                                formatter: '{b}',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var color = getItemColor(params.data.value[5]);
                                    return color;
                                }
                            }
                        },
                        zlevel: 1
                    },
                    {
                        name: 'line1',
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            color: 'transparent',
                            symbolSize: 0
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                opacity: 1,
                                shadowBlur: 10,
                                curveness: 0
                            }
                        },
                        data: []
                    },
                    {
                        name: 'line2',
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            color: 'transparent',
                            symbolSize: 0
                        },
                        lineStyle: {
                            normal: {
                                width: 1,
                                opacity: 1,
                                shadowBlur: 10,
                                curveness: 0
                            }
                        },
                        data: []
                    }
                ]
            };

            function refreshMap(seriesIndex, dataIndex) {
                var data, lineColor, geoCoord0, geoCoord1, geoCoord2, pixel;
                if (seriesIndex == 0) {
                    data = data1[dataIndex];
                    lineColor = getLineColor(data.value[4]);
                } else if (seriesIndex == 1) {
                    data = data2[dataIndex];
                    lineColor = getLineColor(data.value[5]);
                }

                geoCoord0 = [data.value[0], data.value[1]];
                if (geoCoord0[0] >= '122.73208') {
                    geoCoord1 = [(parseFloat(data.value[0]) + 0.4).toFixed(6).replace(/0+$/, ""), data.value[1]];
                    geoCoord2 = [(parseFloat(data.value[0]) + 0.8).toFixed(6).replace(/0+$/, ""), (parseFloat(data.value[1]) + 0.3 ).toFixed(6).replace(/0+$/, "")];
                } else {
                    geoCoord1 = [(parseFloat(data.value[0]) - 0.4).toFixed(6).replace(/0+$/, ""), data.value[1]];
                    geoCoord2 = [(parseFloat(data.value[0]) - 0.8).toFixed(6).replace(/0+$/, ""), (parseFloat(data.value[1]) + 0.3 ).toFixed(6).replace(/0+$/, "")];
                }

                option.series[2].lineStyle.normal.color = lineColor;
                option.series[2].lineStyle.normal.shadowColor = lineColor;
                option.series[3].lineStyle.normal.color = lineColor;
                option.series[3].lineStyle.normal.shadowColor = lineColor;
                option.series[2].data = [{coords: [geoCoord0, geoCoord1]}];
                option.series[3].data = [{coords: [geoCoord1, geoCoord2]}];

                var position;
                if (geoCoord0[0] >= '122.73208') {
                    pixel = chart.convertToPixel('geo', geoCoord2);
                    position = [parseInt(pixel[0]), parseInt(pixel[1]) - 80];
                } else {
                    pixel = chart.convertToPixel('geo', geoCoord2);
                    position = [parseInt(pixel[0]) - $('.echart-tooltip').parent().innerWidth(), parseInt(pixel[1]) - 80];
                }

                chart.setOption(option);

                chart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: seriesIndex,
                    dataIndex: dataIndex,
                    position: position
                });

                if (geoCoord0[0] < '122.73208') {
                    position = [parseInt(pixel[0]) - $('.echart-tooltip').parent().innerWidth(), parseInt(pixel[1]) - 80];
                    chart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: seriesIndex,
                        dataIndex: dataIndex,
                        position: position
                    });
                }
            }

            registerMap(mapName).then(function (res) {
                echarts.registerMap(mapName, res);
                chart.setOption(option);

                if (data1.length === 0 && data2.length === 0) {
                    return
                }

                var timer = setInterval(function () {
                    var random = Math.random(), seriesIndex = Math.floor(2 * random), dataIndex;
                    if (seriesIndex == 0) {
                        dataIndex = Math.floor(data1.length * random);
                    } else if (seriesIndex == 1) {
                        dataIndex = Math.floor(data2.length * random);
                    }
                    refreshMap(seriesIndex, dataIndex);

                }, 5000);

                chart.on('mouseover', function (params) {
                    if (params.geoIndex == 0) {
                        return;
                    }
                    clearInterval(timer);
                    refreshMap(params.seriesIndex, params.dataIndex);
                });

                chart.on('mouseout', function () {
                    clearInterval(timer);
                    timer = setInterval(function () {
                        var random = Math.random(), seriesIndex = Math.floor(2 * random), dataIndex;
                        if (seriesIndex == 0) {
                            dataIndex = Math.floor(data1.length * random);
                        } else if (seriesIndex == 1) {
                            dataIndex = Math.floor(data2.length * random);
                        }
                        refreshMap(seriesIndex, dataIndex);
                    }, 5000);

                });

            });
        };

        this.drawMap2 = function (mapName, chart, data0, data1, name, symbolTag) {
            var symbolPath = 'image://styles/image/', color;
            switch (symbolTag) {
                case 'orange':
                    symbolPath += 'cover-box-orange.png';
                    color = '#ffa800';
                    break;
                case 'green':
                    symbolPath += 'cover-box-green.png';
                    color = '#7bc612';
                    break;
            }
            var option = {
                backgroundColor: 'transparent',
                tooltip: {
                    trigger: 'item'
                },
                geo: {
                    map: mapName,
                    zoom: 5,
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            borderColor: '#00ffc9',
                            borderWidth: 1,
                            shadowColor: 'rgba(0, 255, 201, 0.5)',
                            shadowBlur: 10
                        },
                        emphasis: {
                            areaColor: 'rgba(7,9,10,0.3)',
                            borderWidth: 2
                        }
                    }
                },
                series: [
                    {
                        name: name,
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        showEffectOn: 'emphasis',
                        symbol: symbolPath,
                        silent: true,
                        zlevel: 1,
                        label: {
                            normal: {
                                show: true,
                                position: 'insideTop',
                                formatter: '{b}',
                                textStyle: {
                                    color: color,
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        symbolSize: [40, 80],
                        data: data0
                    },
                    {
                        name: name,
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        showEffectOn: 'emphasis',
                        silent: true,
                        zlevel: 1,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: '{b}',
                                textStyle: {
                                    color: '#fff'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: 'transparent'
                            }
                        },
                        data: data1
                    }]
            };
            registerMap(mapName).then(function (res) {
                echarts.registerMap(mapName, res);
                chart.setOption(option);
                setInterval(function () {
                    var random = Math.random();
                    option.series[0].data = [data0[Math.floor(data0.length * random)]];
                    option.series[1].data = [data1[Math.floor(data1.length * random)]];
                    chart.setOption(option);
                }, 1500);
            });
        };

        this.drawPie = function (chart, data, total, color, name) {
            chart.setOption({
                title: {
                    show: true,
                    text: name,
                    left: '28%',
                    top: '30%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: 'item',
                    padding: 10,
                    formatter: function (params) {
                        if (params.dataIndex == 1) {
                            return params.name + '总数：' + params.data.value + '（' + params.percent + '%）';
                        }
                    }
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['60%', '85%'],
                        avoidLabelOverlap: true,
                        hoverAnimation: false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: function (params) {
                                    var colorList = ['rgba(12,50,60,0.8)', color];
                                    return colorList[params.dataIndex]
                                }
                            }
                        },
                        data: [
                            {
                                value: total - data,
                                name: name,
                                tooltip: {
                                    show: false
                                },
                                label: {
                                    normal: {
                                        show: false,
                                        position: 'center',
                                        formatter: '{b}',
                                        textStyle: {
                                            color: 'transparent',
                                            fontSize: 22
                                        }
                                    }

                                }
                            },
                            {
                                value: data,
                                name: name,
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'center',
                                        formatter: '{c}',
                                        textStyle: {
                                            color: '#fff',
                                            fontSize: 24,
                                            fontFamily: 'pirulen'
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ]

            })
        };

        this.drawNewPie = function (chart, data) {
            chart.setOption({
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                series: [
                    {
                        name: '安全咨询来源',
                        type: 'pie',
                        radius: '90%',
                        // center: ['50%', '50%'],
                        data: data.sort(function (a, b) {
                            return a.value - b.value
                        }),
                        roseType: 'angle',
                        label: {
                            normal: {
                                textStyle: {
                                    color: 'rgb(255, 255, 255)'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: 'rgba(255, 255, 255, 0.3)'
                                },
                                smooth: 0.2,
                                length: 10,
                                length2: 20
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#c23531',
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]

            })
        };

        this.drawTrend = function (chart, data) {
            chart.setOption({
                title: {
                    text: data.title,
                    textStyle: {
                        color: '#01cca1'
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    orient: 'horizontal',
                    x: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                    data: data.legend
                },
                xAxis: {
                    type: 'category',
                    zlevel: 1,
                    splitNumber: 2,
                    boundaryGap: false,
                    axisLine: {
                        lineStyle: {
                            color: '#00e1aa'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            type: 'dotted',
                            color: '#14342d'
                        }
                    },
                    data: data.xAxis
                },
                yAxis: {
                    type: 'value',
                    zlevel: 1,
                    axisLine: {
                        lineStyle: {
                            color: '#00e1aa'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            type: 'dotted',
                            color: '#14342d'
                        }
                    }
                },
                grid: {
                    left: '6%',
                    right: '6%',
                    bottom: '8%',
                    backgroundColor: 'rgb(7,9,11)',
                    show: true,
                    containLabel: true
                },
                series: [
                    {
                        name: '已完成',
                        type: 'line',
                        stack: '总量',
                        lineStyle: {
                            normal: {
                                color: '#1d5316'
                            }
                        },
                        data: data.series.done
                    },
                    {
                        name: '下发任务',
                        type: 'line',
                        stack: '总量',
                        lineStyle: {
                            normal: {
                                color: '#008ac6'
                            }
                        },
                        data: data.series.total
                    }
                ]
            })
        };

        this.drawTop10 = function (chart, data) {
            chart.setOption({
                title: {
                    text: data.title,
                    textStyle: {
                        color: '#01cca1'
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    orient: 'horizontal',
                    x: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                    data: data.legend
                },
                grid: {
                    left: '5%',
                    right: '5%',
                    bottom: '1%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'value',
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        axisLine: {show: false},
                        splitLine: {show: false}
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        axisTick: {show: false},
                        axisLine: {show: false},
                        axisLabel: {
                            show: true,
                            margin: 30,
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        data: data.yAxis
                    }
                ],
                series: [
                    {
                        name: '未完成',
                        type: 'bar',
                        barWidth: 10,
                        barMinHeight: 30,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [5, 0, 0, 5],
                                color: '#b10a12'
                            }
                        },
                        stack: 'Top10',
                        data: data.series.undone
                    },
                    {
                        name: '已完成',
                        type: 'bar',
                        barWidth: 10,
                        barMinHeight: 30,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [0, 5, 5, 0],
                                color: '#eb9b06'
                            }
                        },
                        stack: 'Top10',
                        data: data.series.done
                    }
                ]
            })
        }

    }

    angular.module('app').service('Chart', Chart);
})();
