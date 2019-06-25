<template>
    <div>
        <Row>
            <Col span="12">
                <div id="oneChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="twoChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="threeChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="fourChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="fiveChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="sixChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import 'echarts/map/js/world'

let oneChart = null
let twoChart = null
let threeChart = null
let fourChart = null
let fiveChart = null
let sixChart = null
export default {
  name: 'line-echarts',
  data () {
    return {}
  },
  mounted () {
    this.getOneChart()
    this.getTwoChart()
    this.getThreeChart()
    this.getFourChart()
    this.getFiveChart()
    this.getSixChart()
  },
  methods: {
    getOneChart () {
      var charts = {
        unit: 'Kbps',
        names: ['出口', '入口'],
        lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
        value: [
          [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
          [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
        ]

      }
      var color = ['rgba(23, 255, 243', 'rgba(255,100,97']
      var lineY = []

      for (var i = 0; i < charts.names.length; i++) {
        var x = i
        if (x > color.length - 1) {
          x = color.length - 1
        }
        var data = {
          name: charts.names[i],
          type: 'line',
          color: color[x] + ')',
          smooth: true,
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: color[x] + ', 0.3)'
              }, {
                offset: 0.8,
                color: color[x] + ', 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          symbol: 'circle',
          symbolSize: 5,
          data: charts.value[i]
        }
        lineY.push(data)
      }

      lineY[0].markLine = {
        silent: true,
        data: [{
          yAxis: 5
        }, {
          yAxis: 100
        }, {
          yAxis: 200
        }, {
          yAxis: 300
        }, {
          yAxis: 400
        }]
      }
      this.option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: charts.names,
          textStyle: {
            fontSize: 12,
            color: 'rgb(0,253,255,0.6)'
          },
          right: '4%'
        },
        grid: {
          top: '14%',
          left: '4%',
          right: '4%',
          bottom: '12%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: charts.lineX,
          axisLabel: {
            textStyle: {
              color: 'rgb(0,253,255,0.6)'
            },
            formatter: function (params) {
              return params.split(' ')[0] + '\n' + params.split(' ')[1]
            }
          }
        },
        yAxis: {
          name: charts.unit,
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: 'rgb(0,253,255,0.6)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgb(23,255,243,0.3)'
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(0,253,255,0.6)'
            }
          }
        },
        series: lineY
      }
      oneChart = echarts.init(document.getElementById('oneChart'))
      oneChart.setOption(this.option)
      setInterval(() => {
        oneChart.setOption({
          legend: {
            selected: {
              '出口': false,
              '入口': false
            }
          }
        })
        oneChart.setOption({
          legend: {
            selected: {
              '出口': true,
              '入口': true
            }
          }
        })
      }, 10000)
    },
    getTwoChart () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '30%',
          top: '20%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: '#0E2A43'
              }
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14,
                color: '#D5CBE8'
              }
            },
            axisTick: {
              show: false
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
          }, {
            axisPointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#0E2A43'
              }
            },
            axisTick: {
              show: false
            },
            position: 'bottom',
            offset: 20
          }],
        yAxis: [{
          type: 'value',
          name: '单位（%）',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#0E2A43'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14,
              color: '#D5CBE8'
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: '移动',
          type: 'line',
          smooth: true,
          stack: '总量',
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          animationDelay: 2000,
          animationDuration: 1000,
          markPoint: {
            // symbol: 'image://url',
            data: [
              { type: 'max', name: '最大值' }
            ],
            animationDelay: 3000,
            animationDuration: 1000
          },
          lineStyle: {
            normal: {
              width: 1,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: 'red' // 0% 处的颜色
                }, {
                  offset: 1, color: 'grey' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              opacity: 0.9
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: [220, 182, 191, 134, 250, 120, 110, 125, 145, 122, 165, 122]
        }, {
          name: '电信',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          stack: '总量',
          symbolSize: 5,
          animationDelay: 1000,
          animationDuration: 1000,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' }
            ],
            animationDelay: 2000,
            animationDuration: 1000
          },
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: 'red' // 0% 处的颜色
                }, {
                  offset: 1, color: 'yellow' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              opacity: 0.9
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 236, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 236, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12

            }
          },
          data: [120, 110, 125, 145, 122, 165, 122, 220, 282, 191, 134, 150]
        }, {
          name: '联通',
          type: 'line',
          stack: '总量',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          animationDelay: 0,
          animationDuration: 1000,
          markPoint: {
            data: [
              { type: 'max', name: '最大值' }
            ],
            animationDelay: 1000,
            animationDuration: 1000
          },
          lineStyle: {
            normal: {
              width: 1,
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                  offset: 0, color: 'red' // 0% 处的颜色
                }, {
                  offset: 1, color: 'yellowgreen' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              },
              opacity: 0.9
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {

              color: 'rgb(219,50,51)',
              borderColor: 'rgba(219,50,51,0.2)',
              borderWidth: 12
            }
          },
          data: [220, 182, 325, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        } ]
      }
      twoChart = echarts.init(document.getElementById('twoChart'))
      twoChart.setOption(this.option)
    },
    getThreeChart () {
      var min = 60
      var max = 100
      var date = (function () {
        var now = new Date()
        var res = []
        var len = 100
        while (len--) {
          res.unshift(now.toLocaleTimeString())
          now = new Date(now - 1000)
        }
        return res
      })()
      var randomData = (function () {
        var res = []
        var len = 100
        while (len--) {
          res.push(Math.floor(min + Math.random() * (max - min)))
        }
        return res
      })()
      this.option = {
        color: ['#2DDB89'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '14%',
          left: '4%',
          right: '4%',
          bottom: '12%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: date,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            color: '#2DDB89'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#2DDB89',
              width: 0.5
            }
          },
          axisLine: {
            lineStyle: {
              color: '#2DDB89'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          min: 60,
          max: 100,
          axisLabel: {
            color: '#fff'
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#2DDB89',
              width: 0.5
            }
          },
          axisLine: {
            lineStyle: {
              color: '#2DDB89'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: [{
          name: '直接访问',
          data: randomData,
          type: 'line'
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      threeChart = echarts.init(document.getElementById('threeChart'))
      threeChart.setOption(this.option)
      setInterval(function () {
        randomData.push(Math.floor(min + Math.random() * (max - min)))
        randomData.shift()
        date.push((new Date()).toLocaleTimeString())
        date.shift()
        threeChart.setOption({
          xAxis: {
            data: date
          },
          series: [{
            data: randomData
          }]
        })
      }, 1000)
    },
    getFourChart () {
      this.option = {
        title: {
          text: 'Awesome Chart'
        },
        xAxis: {
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        },
        yAxis: {},
        series: [{
          type: 'line',
          data: [220, 182, 191, 234, 290, 330, 310]
        }]
      }
      this.option = {
        globe: {
          baseTexture: '/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg',
          heightTexture: '/asset/get/s/data-1491837049070-rJZtl7Y6x.jpg',
          displacementScale: 0.04,
          shading: 'realistic',
          environment: '/asset/get/s/data-1491837999815-H1_44Qtal.jpg',
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
              intensity: 5,
              shadow: true
            },
            ambientCubemap: {
              texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
              diffuseIntensity: 0.2
            }
          }
        }
      }
      var category = []
      var dottedBase = +new Date()
      var lineData = []
      var barData = []

      for (var i = 0; i < 20; i++) {
        var date = new Date(dottedBase += 1000 * 3600 * 24)
        category.push([
          date.getFullYear(),
          date.getMonth() + 1,
          date.getDate()
        ].join('-'))
        var b = Math.random() * 200
        var d = Math.random() * 200
        barData.push(b)
        lineData.push(d + b)
      }
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#333'
            }
          }
        },
        legend: {
          data: ['line', 'bar'],
          textStyle: {
            color: '#ccc'
          }
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#ccc'
            }
          }
        },
        series: [{
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: lineData
        }, {
          name: 'bar',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#14c8d4' },
                  { offset: 1, color: '#43eec6' }
                ]
              )
            }
          },
          data: barData
        }, {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: 'rgba(20,200,212,0.5)' },
                  { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                  { offset: 1, color: 'rgba(20,200,212,0)' }
                ]
              )
            }
          },
          z: -12,
          data: lineData
        }, {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            normal: {
              color: '#0f375f'
            }
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: lineData
        }]
      }
      fourChart = echarts.init(document.getElementById('fourChart'))
      fourChart.setOption(this.option)
    },
    getFiveChart () {
      var dataArr = [
        [
          [20, 0],
          [130, 0]
        ],
        [
          [30, 1],
          [130, 1]
        ],
        [
          [40, 1.5],
          [130, 2]
        ],
        [
          [10, 2.5],
          [130, 3]
        ],
        [
          [20, 3.5],
          [130, 4]
        ],
        [
          [20, 5.5],
          [130, 5]
        ],
        [
          [40, 5.5],
          [130, 6]
        ],
        [
          [20, 6.5],
          [130, 7]
        ],
        [
          [60, 8],
          [130, 8]
        ],
        [
          [20, 9],
          [130, 9]
        ]
      ]
      var series = []
      for (var i = 0; i < dataArr.length; i++) {
        series.push({
          coordinateSystem: 'polar',
          name: 'line',
          type: 'line',
          z: 20,
          lineStyle: {
            color: '#0fe3ec',
            width: 1
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#fbbc5e'
          },
          data: dataArr[i]
        })
      }
      this.option = {
        grid: {
          left: '20%',
          right: '20%'
        },

        angleAxis: {
          interval: 1,
          type: 'category',
          data: ['{a|12234}\n个体户',
            '{a|530}\n失信公告',
            '{a|180+万}\n黑名单数据',
            '{a|512+亿}\n舆情信息',
            '{a|12326}\n海关信息',
            '{a|1.65+亿}\n地址信息',
            '{a|4500}\n组代信息',
            '{a|2500}\n裁判文书',
            '{a|1300}\n开庭公告',
            '{a|5323}\n企业主体'
          ],
          z: 10,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#1d51a3',
              width: 1,
              type: 'dashed',
              opacity: 0.7
            }
          },
          axisLabel: {
            interval: 0,
            show: true,
            color: '#d5d5dd',
            margin: 2,
            fontSize: 11,
            lineHeight: 15,
            align: 'center',
            rich: {
              a: {
                align: 'center'
              }
            }
          },
          axisTick: {
            show: true
          }
        },
        radiusAxis: {
          min: 0,
          max: 100,
          interval: 20,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#00c7ff',
              width: 1,
              type: 'dashed'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: '#1d51a3',
              width: 1,
              type: 'dashed',
              opacity: 0.7
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: '#1d51a3',
              opacity: 0.5
            }
          }
        },
        polar: {},
        geo: {
          map: 'world',
          left: '30%',
          right: '30%',
          z: 15,
          label: {
            emphasis: {
              show: false
            }
          },
          mapType: 'world',
          itemStyle: {
            normal: {
              areaColor: '#3dacdd',
              borderColor: '#3dacdd'
            },
            emphasis: {
              areaColor: '#3dacdd'
            }
          }
        },
        series: series
      }
      fiveChart = echarts.init(document.getElementById('fiveChart'))
      fiveChart.setOption(this.option)
    },
    getSixChart () {
      this.option = {
        title: {
          text: '北斗七星',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          width: '60%',
          height: '70%'
        },
        xAxis: {
          show: false
        },
        yAxis: {
          show: false
        },
        color: ['#000000', '#FFFFFF'],
        series: [{
          type: 'line',
          itemStyle: {
            normal: {
              color: '#7af5e9',
              opacity: 1,
              borderWidth: 1,
              shadowBlur: 8,
              shadowColor: '#fff'
            }
          },
          lineStyle: {
            normal: {
              opacity: 0.1
            }
          },
          label: {
            emphasis: {
              show: true,
              offset: [24, -5],
              formatter: '{b}'
            }
          },
          data: [{
            name: '摇光',
            value: [0, 6]
          }, {
            name: '开阳',
            value: [1, 6]

          }, {
            name: '玉衡',
            value: [2, 5]
          }, {
            name: '天权',
            value: [2.8, 4]
          }, {
            name: '天玑',
            value: [3, 2.4]
          }, {
            name: '天璇',
            value: [5, 2]
          }, {
            name: '天枢',
            value: [5.5, 3.6]
          }]
        }, {
          type: 'lines',
          coordinateSystem: 'cartesian2d',
          zlevel: 2,
          effect: {
            show: true,
            constantSpeed: 200,
            trailLength: 0.02,
            symbolSize: 2
          },
          lineStyle: {
            normal: {
              color: '#fff',
              opacity: 0,
              curveness: 0
            }
          },
          data: [{
            coords: [
              [3, 7],
              [6, 5]
            ]
          }, {
            coords: [
              [2, 3],
              [4, 7]
            ]
          }]
        }, {
          type: 'scatter',
          symbolSize: 2,
          hoverAnimation: false,
          itemStyle: {
            normal: {
              color: '#fff',
              opacity: 1,
              borderWidth: 1,
              shadowBlur: 10,
              shadowColor: '#fff'
            }
          },
          data: [
            [1.3, 6.8],
            [2.5, 2.7],
            [0.8, 1.9],
            [4.2, 1.2],
            [0.5, 3.6],
            [6.9, 1],
            [3.5, 6.2],
            [3.9, 0.2],
            [2.2, 5.9],
            [3.7, 1.1],
            [5.2, 6.4]
          ]
        },
        {
          name: '黑色圆',
          type: 'pie',
          zlevel: 2,
          radius: '10',
          center: ['700', '64'],
          data: [{
            value: 50,
            name: ''
          } ],
          roseType: 'radius',
          hoverAnimation: false,
          label: {
            normal: {
              show: false
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          }
        },
        {
          name: '白色圆',
          type: 'pie',
          radius: '12',
          center: ['704', '60'],
          data: [{
            value: 50,
            name: ''
          }],
          hoverAnimation: false,
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
              opacity: 0.6,
              borderWidth: 4,
              shadowBlur: 4,
              shadowColor: '#fff'
            }
          }
        }
        ]
      }
      sixChart = echarts.init(document.getElementById('sixChart'))
      sixChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
