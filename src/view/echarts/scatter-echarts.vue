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
                <div id="threeChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="fourChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="fiveChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="sixChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="sevenChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="eightChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="nineChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
            <Col span="12">
                <div id="tenChart" :style="{width: '100%', height: '520px',}"></div>
            </Col>
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'
import 'echarts/map/js/world'
import 'echarts/dist/extension/bmap.min'
import zhongguo from 'echarts/map/json/china'

let oneChart = null
let twoChart = null
let threeChart = null
let fourChart = null
let fiveChart = null
let sixChart = null
let sevenChart = null
let eightChart = null
let nineChart = null
let tenChart = null
export default {
  name: 'scatter-echarts',
  mounted () {
    this.getOneChart()
    this.getTwoChart()
    this.getThreeChart()
    this.getFourChart()
    this.getFiveChart()
    this.getSixChart()
    this.getSevenChart()
    this.getEightChart()
    this.getNineChart()
    this.getTenChart()
  },
  methods: {
    getOneChart () {
      let demo = [

        {
          'z': '买房人数',
          'xz': 1000,
          'x': 7086,
          'y': 10,
          'q': 1556

        },

        {
          'z': '买房人数',
          'xz': 2000,
          'x': 7686,
          'y': 52,
          'q': 1956

        },
        {
          'z': '租房人数',
          'xz': 2000,
          'x': 1986,
          'y': 102,
          'q': 3556
        },
        {
          'z': '租房人数',
          'xz': 4000,
          'x': 6786,
          'y': 384,
          'q': 5556
        },
        {
          'z': '买房人数',
          'xz': 3000,
          'x': 1586,
          'y': 200,
          'q': 4556

        },
        {
          'z': '租房人数',
          'xz': 3000,
          'x': 2886,
          'y': 250,
          'q': 4856
        },
        {
          'z': '买房人数',
          'xz': 4000,
          'x': 3686,
          'y': 334,
          'q': 5056

        },

        {
          'z': '买房人数',
          'xz': 5000,
          'x': 2186,
          'y': 390,
          'q': 4056

        },
        {
          'z': '租房人数',
          'xz': 5000,
          'x': 2956,
          'y': 540,
          'q': 5156
        },
        {
          'z': '买房人数',
          'xz': 6000,
          'x': 5486,
          'y': 330,
          'q': 4056

        },
        {
          'z': '租房人数',
          'xz': 1000,
          'x': 1686,
          'y': 60,
          'q': 2556
        },
        {
          'z': '租房人数',
          'xz': 6000,
          'x': 7586,
          'y': 380,
          'q': 4756
        },
        {
          'z': '买房人数',
          'xz': 7000,
          'x': 3486,
          'y': 220,
          'q': 3256
        },
        {
          'z': '租房人数',
          'xz': 7000,
          'x': 3816,
          'y': 270,
          'q': 3856
        },
        {
          'z': '买房人数',
          'xz': 8000,
          'x': 1486,
          'y': 110,
          'q': 1056

        },
        {
          'z': '租房人数',
          'xz': 8000,
          'x': 5656,
          'y': 160,
          'q': 1956
        }

      ]
      let min = ''
      this.option = {

        backgroundColor: '#071435',
        legend: {
          right: '4%',
          show: true,
          itemWidth: 10,
          itemHeight: 10,
          data: _ledgend(),
          textStyle: {
            color: '#fff',
            fontSize: 14
          }
        },
        grid: {
          right: '5%'
        },
        xAxis: [{
          type: 'value',
          // data : this._xAxisData(),
          min: _xDataMin(),
          axisTick: {
            show: false,
            alignWithLabel: true // 对齐数据
          },
          axisLabel: {
            color: 'rgba(255,255,255,0.8)',
            fontSize: 12,
            formatter: function (val) {
              return val
            },
            margin: 15,
            interval: 0
          },
          splitLine: {
            show: true,
            alignWithLabel: true, // 对齐数据
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisLine: _axisLine()
        }

        ],
        yAxis: [{
          type: 'value',
          position: 'left',
          max: _allDataMax(),
          // scale:true,
          axisLabel: {
            color: 'rgba(255,255,255,0.8)',
            fontSize: 12,
            formatter: function (val) {
              return val
            },
            margin: 15
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#63bef8',
              width: 1
            }
          },
          axisLine: _axisLine()
        }, {
          type: 'value',
          position: 'right',
          max: _allDataMax(),
          // scale:true,
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.1)'
            }
          },
          axisTick: {
            lineStyle: {
              color: '#63bef8',
              width: 1
            }
          },
          axisLine: _axisLine()
        }

        ],
        series: _seriesData()

      }

      function _ledgend () {
        let legendDt = new Set(demo && demo.map(item => item.z))
        let _data = []
        if (legendDt) {
          for (let x of legendDt) {
            _data.push(x)
          }
        }

        return _data
      }

      // x轴最小值
      function _xDataMin () {
        var xData = _xAxisData()
        var tempArr = xData.concat()
        var min = tempArr.sort(_sortNumber).slice(0, 1)

        return min[0]
      }

      // 数据最大值
      function _allDataMax () {
        let arr = []
        var dataKinds = _ledgend()
        var kinds = dataKinds.length // 数据种类数n
        demo && demo.map((item) => {
          for (var n = 0; n < kinds; n++) {
            arr.push(item.y)
          }
        })
        var max = arr.sort(_sortNumberMax).splice(0, 1)
        var lg = parseInt(max[0]).toString().length
        var lev = (parseInt(max[0]).toString()).split('')[0]
        var x = parseInt(lev) + 2
        let _maxFinal = x * Math.pow(10, lg - 1) // 按照数量级计算出合适的最大值

        return _maxFinal
      }

      // 排序不去重
      function _sortNumber (a, b) {
        return a - b
      }

      function _sortNumberMax (a, b) {
        return b - a
      }

      function _seriesData () {
        var colorsArr = _colors()
        var colorSys = _colorSys()
        var dataKinds = _ledgend()
        var dataLg = demo.length
        var kinds = dataKinds.length
        let _xData = _xAxisData()
        let result = []

        let obj = {}
        demo.forEach((item, i) => {
          !obj[item.z] ? obj[item.z] = [item] : obj[item.z].push(item)
        })

        // 气泡item
        for (var i = 0; i < kinds; i++) {
          var _data = obj[dataKinds[i]]
          var tempArr = []
          for (var k = 0; k < dataLg; k++) {
            let _dt = _xData[k]

            _data.map((item) => {
              if (item.xz === _dt) {
                tempArr.push([item.x, item.y, item.q])
              }
            })
          }
          result.push(tempArr)
        }

        // 插入最大值数组，画T
        var _max = _allDataMax()
        var lineData = []
        _xData && _xData.forEach((v) => {
          lineData.push([v, _max])
        })
        result.push(lineData)

        // 计算气泡大小
        var lg = parseInt(_max).toString().length
        var itemRatio = Math.pow(10, lg - 1)

        // 创建series
        let seriesArr = []
        let _svg = _svgIcon()
        result && result.map((item, ind) => {
          if (ind === result.length - 1) {
            seriesArr.push({
              name: '固定T',
              type: 'scatter',
              yAxisIndex: 1,
              symbol: _svg,
              symbolSize: 10,
              itemStyle: {
                normal: {
                  color: '#63bef8'
                }
              },
              symbolOffset: [0, '40%'],
              data: item
            })
          } else {
            seriesArr.push({
              name: dataKinds[ind],
              type: 'scatter',
              symbolSize: function (data) {
                // return Math.sqrt(data[2])/5e2;
                return data[2] / itemRatio
              },
              itemStyle: {
                normal: {
                  shadowBlur: 20,
                  shadowColor: colorSys[ind],
                  opacity: 0.6,
                  shadowOffsetY: 4,
                  color: colorsArr[ind]
                }
              },
              data: item
            })
          }
        })

        return seriesArr
      }

      function _xAxisData () {
        let dt = new Set(demo && demo.map(item => item.xz))
        let _data = []
        if (dt) {
          for (let x of dt) {
            _data.push(x)
          }
        }

        let tempArr = _data.concat()
        min = tempArr.sort(_sortNumber)

        // scatter横轴是value，需要排序，避免返回数据顺序错乱的bug
        return min
      }

      function _axisLine () {
        return {
          show: false, // 不显示
          lineStyle: {
            color: '#3398DB', // 坐标轴线颜色
            width: 2
          }
        }
      }

      function _svgIcon () {
        let src = 'path://M851.968 167.936l0 109.568-281.6 0 0 587.776-116.736 0 0-587.776-281.6 0 0-109.568 679.936 0z'
        return src
      }

      function _colorSys () {
        return ['#0ab484', '#1355c7', '#F5A559', '#D62E56']
      }

      function _colors () {
        return [
          new echarts.graphic.LinearGradient(0.4, 0.3, 0, 1,
            [
              { offset: 0, color: '#8ffdde' }, // 0% 处的颜色
              { offset: 1, color: '#0ab484' } // 100% 处的颜色
            ], false),
          new echarts.graphic.LinearGradient(0.4, 0.3, 0, 1,
            [
              { offset: 0, color: '#5790f4' }, // 0% 处的颜色
              { offset: 1, color: '#1355c7' } // 100% 处的颜色
            ], false),
          new echarts.graphic.LinearGradient(0.4, 0.3, 0, 1,
            [
              { offset: 0, color: '#f6973d' }, // 0% 处的颜色
              { offset: 1, color: '#F5A559' } // 100% 处的颜色
            ], false),
          new echarts.graphic.LinearGradient(0.4, 0.3, 0, 1,
            [
              { offset: 0, color: '#e40036' }, // 0% 处的颜色
              { offset: 1, color: '#D62E56' } // 100% 处的颜色
            ], false)

        ]
      }

      oneChart = echarts.init(document.getElementById('oneChart'))
      oneChart.setOption(this.option)
    },
    getTwoChart () {
      var data = []
      var data2 = []

      for (var i = 0; i < 10; i++) {
        data.push(
          [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 40)
          ]
        )
        data2.push(
          [
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100),
            Math.round(Math.random() * 100)
          ]
        )
      }

      var axisCommon = {
        axisLabel: {
          textStyle: {
            color: '#8290a5'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#8290a5'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#414d5d'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#414d5d',
            type: 'solid'
          }
        }
      }

      this.option = {
        color: ['#5ec3e9', '#cb87fa'],
        backgroundColor: '#2c2939',
        xAxis: axisCommon,
        yAxis: axisCommon,
        visualMap: {
          show: false,
          max: 100,
          inRange: {
            symbolSize: [10, 40]
          }
        },
        series: [
          {
            type: 'scatter',
            data: data
          },
          {
            type: 'scatter',
            data: data2
          }
        ],
        animationDelay: function (idx) {
          return idx * 50
        },
        animationEasing: 'elasticOut'
      }
      twoChart = echarts.init(document.getElementById('twoChart'))
      twoChart.clear()
      setTimeout(function () {
        var seriesModel = twoChart.getModel().getSeriesByIndex(0)
        var data = seriesModel.getData()
        var coordSys = seriesModel.coordinateSystem
        var zr = twoChart.getZr()
        twoChart.off('click')
        twoChart.on('click', function (param) {
          var color = data.getItemVisual(param.dataIndex, 'color')
          var symbolSize = data.getItemVisual(param.dataIndex, 'symbolSize')
          var pt1 = coordSys.dataToPoint(param.value)
          var pt2 = coordSys.dataToPoint([param.value[0], 0])
          var line = new echarts.graphic.Line({
            shape: {
              x1: pt1[0],
              y1: pt1[1],
              x2: pt1[0],
              y2: pt1[1]
            },
            style: {
              stroke: color
            },
            z: 100
          })

          line.animate('shape')
            .when(300, {
              y1: pt1[1]
            })
            .when(500, {
              y1: pt1[1] * 0.7 + 0.3 * pt2[1],
              y2: pt2[1]
            })
            .when(1000, {
              y1: pt1[1],
              y2: pt1[1]
            })
            .done(function () {
              zr.remove(line)
            })
            .start(function (t) {
              var y = Math.sin(t * Math.PI) * 0.5
              if (t >= 0.5) {
                y = 1 - y
              }
              return y
            })

          var circle = new echarts.graphic.Circle({
            shape: {
              cx: pt2[0],
              cy: pt2[1],
              r: 0
            },
            style: {
              fill: color
            },
            z: 100
          })
          var circle2 = new echarts.graphic.Circle({
            shape: {
              cx: pt1[0],
              cy: pt1[1],
              r: symbolSize
            },
            style: {
              fill: color,
              opacity: 0.4
            }
          })
          circle2.animateTo({
            shape: {
              r: symbolSize * 1.5
            },
            style: {
              opacity: 0
            }
          }, 400, function () {
            zr.remove(circle2)
          })

          circle.animate('shape')
            .when(250, {
              r: 6
            })
            .when(500, {
              r: 0
            })
            .delay(500)
            .done(function () {
              zr.remove(circle)
            })
            .start(function (t) {
              var y = Math.sin(t * Math.PI) * 0.5
              if (t >= 0.5) {
                y = 1 - y
              }
              return y
            })

          zr.add(circle)
          zr.add(circle2)
          zr.add(line)
        })
      })
      twoChart.setOption(this.option)
    },
    getThreeChart () {
      var dataBJ = [
        [1, 55, 9, 56, 0.46, 18, 6, '良'],
        [2, 25, 11, 21, 0.65, 34, 9, '优'],
        [3, 56, 7, 63, 0.3, 14, 5, '良'],
        [4, 33, 7, 29, 0.33, 16, 6, '优'],
        [5, 42, 24, 44, 0.76, 40, 16, '优'],
        [6, 82, 58, 90, 1.77, 68, 33, '良'],
        [7, 74, 49, 77, 1.46, 48, 27, '良'],
        [8, 78, 55, 80, 1.29, 59, 29, '良'],
        [9, 267, 216, 280, 4.8, 108, 64, '重度污染'],
        [10, 185, 127, 216, 2.52, 61, 27, '中度污染'],
        [11, 39, 19, 38, 0.57, 31, 15, '优'],
        [12, 41, 11, 40, 0.43, 21, 7, '优'],
        [13, 64, 38, 74, 1.04, 46, 22, '良'],
        [14, 108, 79, 120, 1.7, 75, 41, '轻度污染'],
        [15, 108, 63, 116, 1.48, 44, 26, '轻度污染'],
        [16, 33, 6, 29, 0.34, 13, 5, '优'],
        [17, 94, 66, 110, 1.54, 62, 31, '良'],
        [18, 186, 142, 192, 3.88, 93, 79, '中度污染'],
        [19, 57, 31, 54, 0.96, 32, 14, '良'],
        [20, 22, 8, 17, 0.48, 23, 10, '优'],
        [21, 39, 15, 36, 0.61, 29, 13, '优'],
        [22, 94, 69, 114, 2.08, 73, 39, '良'],
        [23, 99, 73, 110, 2.43, 76, 48, '良'],
        [24, 31, 12, 30, 0.5, 32, 16, '优'],
        [25, 42, 27, 43, 1, 53, 22, '优'],
        [26, 154, 117, 157, 3.05, 92, 58, '中度污染'],
        [27, 234, 185, 230, 4.09, 123, 69, '重度污染'],
        [28, 160, 120, 186, 2.77, 91, 50, '中度污染'],
        [29, 134, 96, 165, 2.76, 83, 41, '轻度污染'],
        [30, 52, 24, 60, 1.03, 50, 21, '良'],
        [31, 46, 5, 49, 0.28, 10, 6, '优']
      ]

      var dataGZ = [
        [1, 26, 37, 27, 1.163, 27, 13, '优'],
        [2, 85, 62, 71, 1.195, 60, 8, '良'],
        [3, 78, 38, 74, 1.363, 37, 7, '良'],
        [4, 21, 21, 36, 0.634, 40, 9, '优'],
        [5, 41, 42, 46, 0.915, 81, 13, '优'],
        [6, 56, 52, 69, 1.067, 92, 16, '良'],
        [7, 64, 30, 28, 0.924, 51, 2, '良'],
        [8, 55, 48, 74, 1.236, 75, 26, '良'],
        [9, 76, 85, 113, 1.237, 114, 27, '良'],
        [10, 91, 81, 104, 1.041, 56, 40, '良'],
        [11, 84, 39, 60, 0.964, 25, 11, '良'],
        [12, 64, 51, 101, 0.862, 58, 23, '良'],
        [13, 70, 69, 120, 1.198, 65, 36, '良'],
        [14, 77, 105, 178, 2.549, 64, 16, '良'],
        [15, 109, 68, 87, 0.996, 74, 29, '轻度污染'],
        [16, 73, 68, 97, 0.905, 51, 34, '良'],
        [17, 54, 27, 47, 0.592, 53, 12, '良'],
        [18, 51, 61, 97, 0.811, 65, 19, '良'],
        [19, 91, 71, 121, 1.374, 43, 18, '良'],
        [20, 73, 102, 182, 2.787, 44, 19, '良'],
        [21, 73, 50, 76, 0.717, 31, 20, '良'],
        [22, 84, 94, 140, 2.238, 68, 18, '良'],
        [23, 93, 77, 104, 1.165, 53, 7, '良'],
        [24, 99, 130, 227, 3.97, 55, 15, '良'],
        [25, 146, 84, 139, 1.094, 40, 17, '轻度污染'],
        [26, 113, 108, 137, 1.481, 48, 15, '轻度污染'],
        [27, 81, 48, 62, 1.619, 26, 3, '良'],
        [28, 56, 48, 68, 1.336, 37, 9, '良'],
        [29, 82, 92, 174, 3.29, 0, 13, '良'],
        [30, 106, 116, 188, 3.628, 101, 16, '轻度污染'],
        [31, 118, 50, 0, 1.383, 76, 11, '轻度污染']
      ]

      var dataSH = [
        [1, 91, 45, 125, 0.82, 34, 23, '良'],
        [2, 65, 27, 78, 0.86, 45, 29, '良'],
        [3, 83, 60, 84, 1.09, 73, 27, '良'],
        [4, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
        [5, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
        [6, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
        [7, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
        [8, 89, 65, 78, 0.86, 51, 26, '良'],
        [9, 53, 33, 47, 0.64, 50, 17, '良'],
        [10, 80, 55, 80, 1.01, 75, 24, '良'],
        [11, 117, 81, 124, 1.03, 45, 24, '轻度污染'],
        [12, 99, 71, 142, 1.1, 62, 42, '良'],
        [13, 95, 69, 130, 1.28, 74, 50, '良'],
        [14, 116, 87, 131, 1.47, 84, 40, '轻度污染'],
        [15, 108, 80, 121, 1.3, 85, 37, '轻度污染'],
        [16, 134, 83, 167, 1.16, 57, 43, '轻度污染'],
        [17, 79, 43, 107, 1.05, 59, 37, '良'],
        [18, 71, 46, 89, 0.86, 64, 25, '良'],
        [19, 97, 71, 113, 1.17, 88, 31, '良'],
        [20, 84, 57, 91, 0.85, 55, 31, '良'],
        [21, 87, 63, 101, 0.9, 56, 41, '良'],
        [22, 104, 77, 119, 1.09, 73, 48, '轻度污染'],
        [23, 87, 62, 100, 1, 72, 28, '良'],
        [24, 168, 128, 172, 1.49, 97, 56, '中度污染'],
        [25, 65, 45, 51, 0.74, 39, 17, '良'],
        [26, 39, 24, 38, 0.61, 47, 17, '优'],
        [27, 39, 24, 39, 0.59, 50, 19, '优'],
        [28, 93, 68, 96, 1.05, 79, 29, '良'],
        [29, 188, 143, 197, 1.66, 99, 51, '中度污染'],
        [30, 174, 131, 174, 1.55, 108, 50, '中度污染'],
        [31, 187, 143, 201, 1.39, 89, 53, '中度污染']
      ]

      var schema = [
        { name: 'date', index: 0, text: '日' },
        { name: 'AQIindex', index: 1, text: 'AQI指数' },
        { name: 'PM25', index: 2, text: 'PM2.5' },
        { name: 'PM10', index: 3, text: 'PM10' },
        { name: 'CO', index: 4, text: '一氧化碳（CO）' },
        { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
        { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
      ]

      var itemStyle = {
        normal: {
          opacity: 0.8,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }

      this.option = {
        backgroundColor: '#404a59',
        color: [
          '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
          y: 'top',
          data: ['北京', '上海', '广州'],
          textStyle: {
            color: '#fff',
            fontSize: 16
          }
        },
        grid: {
          x: '10%',
          x2: 150,
          y: '18%',
          y2: '10%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: '#222',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            var value = obj.value
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                                obj.seriesName + ' ' + value[0] + '日：' +
                                value[7] +
                                '</div>' +
                                schema[1].text + '：' + value[1] + '<br>' +
                                schema[2].text + '：' + value[2] + '<br>' +
                                schema[3].text + '：' + value[3] + '<br>' +
                                schema[4].text + '：' + value[4] + '<br>' +
                                schema[5].text + '：' + value[5] + '<br>' +
                                schema[6].text + '：' + value[6] + '<br>'
          }
        },
        xAxis: {
          type: 'value',
          name: '日期',
          nameGap: 16,
          nameTextStyle: {
            color: '#fff',
            fontSize: 14
          },
          max: 31,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          }
        },
        yAxis: {
          type: 'value',
          name: 'AQI指数',
          nameLocation: 'end',
          nameGap: 20,
          nameTextStyle: {
            color: '#fff',
            fontSize: 16
          },
          axisLine: {
            lineStyle: {
              color: '#eee'
            }
          },
          splitLine: {
            show: false
          }
        },
        visualMap: [
          {
            left: 'right',
            top: '10%',
            dimension: 2,
            min: 0,
            max: 250,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小：PM2.5'],
            textGap: 30,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              symbolSize: [10, 70]
            },
            outOfRange: {
              symbolSize: [10, 70],
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          },
          {
            left: 'right',
            bottom: '5%',
            dimension: 6,
            min: 0,
            max: 50,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['明暗：二氧化硫'],
            textGap: 30,
            textStyle: {
              color: '#fff'
            },
            inRange: {
              colorLightness: [1, 0.5]
            },
            outOfRange: {
              color: ['rgba(255,255,255,.2)']
            },
            controller: {
              inRange: {
                color: ['#c23531']
              },
              outOfRange: {
                color: ['#444']
              }
            }
          }
        ],
        series: [
          {
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataBJ
          },
          {
            name: '上海',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataSH
          },
          {
            name: '广州',
            type: 'scatter',
            itemStyle: itemStyle,
            data: dataGZ
          }
        ]
      }
      threeChart = echarts.init(document.getElementById('threeChart'))
      threeChart.setOption(this.option)
    },
    getFourChart () {
      var data = [
        [
          [
            33,
            0.14224137931034483,
            232,
            '计算机科学与教育软件学院',
            '15届'
          ],
          [
            99,
            0.668918918918919,
            148,
            '地理科学学院',
            '15届'
          ],
          [
            57,
            0.15447154471544716,
            369,
            '机械与电气工程学院',
            '15届'
          ],
          [
            368,
            0.6996197718631179,
            526,
            '经济与统计学院',
            '15届'
          ],
          [
            66,
            0.1935483870967742,
            341,
            '土木工程学院',
            '15届'
          ],
          [
            300,
            0.7537688442211056,
            398,
            '新闻与传播学院',
            '15届'
          ],
          [
            236,
            0.8939393939393939,
            264,
            '外国语学院',
            '15届'
          ],
          [
            230,
            0.888030888030888,
            259,
            '人文学院',
            '15届'
          ],
          [
            89,
            0.5493827160493827,
            162,
            '数学与信息科学学院',
            '15届'
          ],
          [
            334,
            0.6693386773547094,
            499,
            '工商管理学院',
            '15届'
          ],
          [
            131,
            0.7443181818181818,
            176,
            '法学院',
            '15届'
          ],
          [
            120,
            0.7361963190184049,
            163,
            '公共管理学院',
            '15届'
          ],
          [
            3,
            1.0,
            3,
            '卫斯理安学院',
            '15届'
          ],
          [
            14,
            0.6666666666666666,
            21,
            '政治与公民教育学院',
            '15届'
          ],
          [
            153,
            0.7846153846153846,
            195,
            '旅游学院',
            '15届'
          ],
          [
            158,
            0.7821782178217822,
            202,
            '教育学院',
            '15届'
          ],
          [
            46,
            0.4842105263157895,
            95,
            '环境科学与工程学院',
            '15届'
          ],
          [
            118,
            0.5728155339805825,
            206,
            '化学化工学院',
            '15届'
          ],
          [
            37,
            0.22424242424242424,
            165,
            '物理与电子工程学院',
            '15届'
          ],
          [
            67,
            0.4785714285714286,
            140,
            '建筑与城市规划学院',
            '15届'
          ],
          [
            167,
            0.5921985815602837,
            282,
            '美术与设计学院',
            '15届'
          ],
          [
            67,
            0.6146788990825688,
            109,
            '生命科学学院',
            '15届'
          ],
          [
            7,
            0.07142857142857142,
            98,
            '体育学院',
            '15届'
          ],
          [
            101,
            0.7769230769230769,
            130,
            '音乐舞蹈学院',
            '15届'
          ]
        ],
        [
          [
            83,
            0.47701149425287354,
            174,
            '地理科学学院',
            '14届'
          ],
          [
            30,
            0.08356545961002786,
            359,
            '机械与电气工程学院',
            '14届'
          ],
          [
            6,
            0.6666666666666666,
            9,
            '工商管理学院',
            '14届'
          ],
          [
            98,
            0.6901408450704225,
            142,
            '法学院',
            '14届'
          ],
          [
            101,
            0.6121212121212121,
            165,
            '公共管理学院',
            '14届'
          ],
          [
            79,
            0.48466257668711654,
            163,
            '数学与信息科学学院',
            '14届'
          ],
          [
            33,
            0.25384615384615383,
            130,
            '环境科学与工程学院',
            '14届'
          ],
          [
            76,
            0.4342857142857143,
            175,
            '化学化工学院',
            '14届'
          ],
          [
            127,
            0.7650602409638554,
            166,
            '教育学院',
            '14届'
          ],
          [
            35,
            0.33653846153846156,
            104,
            '计算机科学与教育软件学院',
            '14届'
          ],
          [
            10,
            0.7692307692307693,
            13,
            '经济与统计学院',
            '14届'
          ],
          [
            51,
            0.20647773279352227,
            247,
            '土木工程学院',
            '14届'
          ],
          [
            40,
            0.2185792349726776,
            183,
            '物理与电子工程学院',
            '14届'
          ],
          [
            51,
            0.4214876033057851,
            121,
            '建筑与城市规划学院',
            '14届'
          ],
          [
            136,
            0.7640449438202247,
            178,
            '旅游学院',
            '14届'
          ],
          [
            157,
            0.6356275303643725,
            247,
            '美术与设计学院',
            '14届'
          ],
          [
            168,
            0.835820895522388,
            201,
            '人文学院',
            '14届'
          ],
          [
            47,
            0.2974683544303797,
            158,
            '生命科学学院',
            '14届'
          ],
          [
            16,
            0.15384615384615385,
            104,
            '体育学院',
            '14届'
          ],
          [
            165,
            0.8918918918918919,
            185,
            '外国语学院',
            '14届'
          ],
          [
            235,
            0.7704918032786885,
            305,
            '新闻与传播学院',
            '14届'
          ],
          [
            90,
            0.8108108108108109,
            111,
            '音乐舞蹈学院',
            '14届'
          ]
        ],
        [
          [
            64,
            0.44755244755244755,
            143,
            '地理科学学院',
            '13届'
          ],
          [
            101,
            0.7372262773722628,
            137,
            '法学院',
            '13届'
          ],
          [
            147,
            0.7616580310880829,
            193,
            '教育学院',
            '13届'
          ],
          [
            113,
            0.6848484848484848,
            165,
            '公共管理学院',
            '13届'
          ],
          [
            55,
            0.3525641025641026,
            156,
            '环境科学与工程学院',
            '13届'
          ],
          [
            4,
            0.8,
            5,
            '工商管理学院',
            '13届'
          ],
          [
            69,
            0.3150684931506849,
            219,
            '化学化工学院',
            '13届'
          ],
          [
            48,
            0.2222222222222222,
            216,
            '物理与电子工程学院',
            '13届'
          ],
          [
            5,
            0.053763440860215055,
            93,
            '计算机科学与教育软件学院',
            '13届'
          ],
          [
            23,
            0.0749185667752443,
            307,
            '机械与电气工程学院',
            '13届'
          ],
          [
            130,
            0.6701030927835051,
            194,
            '旅游学院',
            '13届'
          ],
          [
            152,
            0.9047619047619048,
            168,
            '外国语学院',
            '13届'
          ],
          [
            2,
            1.0,
            2,
            '经济与统计学院',
            '13届'
          ],
          [
            51,
            0.38636363636363635,
            132,
            '建筑与城市规划学院',
            '13届'
          ],
          [
            82,
            0.5616438356164384,
            146,
            '数学与信息科学学院',
            '13届'
          ],
          [
            172,
            0.6539923954372624,
            263,
            '美术与设计学院',
            '13届'
          ],
          [
            175,
            0.8293838862559242,
            211,
            '人文学院',
            '13届'
          ],
          [
            213,
            0.7526501766784452,
            283,
            '新闻与传播学院',
            '13届'
          ],
          [
            72,
            0.35467980295566504,
            203,
            '生命科学学院',
            '13届'
          ],
          [
            47,
            0.1649122807017544,
            285,
            '土木工程学院',
            '13届'
          ],
          [
            12,
            0.10909090909090909,
            110,
            '体育学院',
            '13届'
          ],
          [
            86,
            0.7962962962962963,
            108,
            '音乐舞蹈学院',
            '13届'
          ]
        ]
      ]
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            return params.value[3] + ':' + parseInt(params.value[1] * 1000) / 10 + '%'
          }
        },
        toolbox: {

          left: '160',
          feature: {
            saveAsImage: {
              show: true
            }
          }
        },
        backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
          offset: 0,
          color: '#f7f8fa'
        }, {
          offset: 1,
          color: '#cdd0d5'
        }]),
        title: {
          text: '广州大学数据分析',
          subtext: '各学院女生比例及女生基数-Acring',
          left: 'center'
        },
        legend: {
          right: 10,
          data: ['15届', '14届', '13届']
        },
        xAxis: {
          name: '女生数量',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        yAxis: {
          name: '女生占比',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true
        },
        series: [{
          name: '15届',
          data: data[0],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 2
          },
          label: {
            normal: {
              show: true,
              formatter: '',
              position: 'top'

            },
            emphasis: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(120, 36, 50, 0.5)',
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(251, 118, 123)'
              }, {
                offset: 1,
                color: 'rgb(204, 46, 72)'
              }])
            }
          }
        }, {
          name: '14届',
          data: data[1],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 2
          },
          label: {
            normal: {
              show: true,
              formatter: '',
              position: 'top'
            },
            emphasis: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(25, 100, 150, 0.5)',
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(129, 227, 238)'
              }, {
                offset: 1,
                color: 'rgb(25, 183, 207)'
              }])
            }
          }
        }, {
          name: '13届',
          data: data[2],
          type: 'scatter',
          symbolSize: function (data) {
            return Math.sqrt(data[2]) * 2
          },
          label: {
            normal: {
              show: true,
              formatter: '',
              position: 'top'
            },
            emphasis: {
              show: true,
              formatter: function (param) {
                return param.data[3]
              },
              position: 'top'
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 10,
              shadowColor: 'rgba(25, 100, 150, 0.5)',
              shadowOffsetY: 5,
              color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: 'rgb(52, 128, 256)'
              }, {
                offset: 1,
                color: 'rgb(52, 52, 207)'
              }])
            }
          }
        }]
      }
      fourChart = echarts.init(document.getElementById('fourChart'))
      fourChart.setOption(this.option)
    },
    getFiveChart () {
      var markLineOpt = {}

      this.option = {
        backgroundColor: '',
        title: {
          text: '',
          x: '35%',
          y: 0
        },
        xAxis: [{
          gridIndex: 0,
          type: 'value',
          show: false,
          min: 0,
          max: 100,
          name: '市场需求指数',
          nameLocation: 'middle',
          nameGap: 30

        }],
        yAxis: [{
          gridIndex: 0,
          min: 0,
          show: false,
          max: 100,
          name: '竞争强度指数',
          nameLocation: 'middle',
          nameGap: 30
        }],
        series: [{
          name: '强相关',
          type: 'scatter',
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'circle',
          symbolSize: 40,
          label: {
            normal: {
              show: true,
              formatter: function (param) {
                return param.data[2]
              }
            }

          },
          itemStyle: {
            normal: {
              color: '#5aa8ee',
              shadowColor: 'rgba(0,0,139, 0.8)',
              shadowBlur: 15,

              shadowOffsetX: 5,
              shadowOffsetY: 5,
              opacity: 0.9

            }

          },

          data: [

            [85, 90, '发动机'],

            [52.621156950336, 83.3333333333333, '欺骗 '],
            [72.8471414092121, 83.3333333333333, '质量 '],

            [34.301212507977, 50, '噪音 '],
            [14.74492285746462, 16.6666666666667, '耗油 ']

          ]

        },

        {
          name: '弱相关',
          type: 'scatter',
          xAxisIndex: 0,
          yAxisIndex: 0,
          symbol: 'circle',
          symbolSize: 40,
          label: {
            normal: {
              show: true,
              formatter: function (param) {
                return param.data[2]
              }
            }

          },
          itemStyle: {
            normal: {
              // color:'#5aa8ee',
              color: function (param) {
                return param.data[3]
              },
              shadowColor: 'rgba(0,0,139, 0.8)',
              shadowBlur: 15,

              shadowOffsetX: 5,
              shadowOffsetY: 5,
              opacity: 0.9

            }

          },

          data: [
            [50, 50, '大众', '#FFFF00'],
            [70.7731146064041, 50, '欺诈 ', '#5aa8ee'],
            [90.626525019708, 50, '尾气 ']
          ],
          markLine: markLineOpt
        }, {
          name: '访问来源',
          type: 'pie',
          radius: ['0', '38%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#E3E3FF'
              }, {
                offset: 0.25,
                color: '#DFDFFF'
              }, {
                offset: 0.50,
                color: '#DFDFFF'
              }, {
                offset: 0.75,
                color: '#DFDFFF'
              },

              {
                offset: 1,
                color: '#E3E3FF'
              }
              ], false)
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 335,
            name: '直接访问'
          }

          ]
        },

        {
          name: '相关背景',
          type: 'pie',
          radius: ['38%', '77%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FFFFFF'
              }, {
                offset: 0.10,
                color: '#FFFFFF'
              }, {
                offset: 0.45,
                color: '#DFDFFF'
              }, {
                offset: 0.55,
                color: '#DFDFFF'
              }, {
                offset: 0.90,
                color: '#FFFFFF'
              },

              {
                offset: 1,
                color: '#FFFFFF'
              }
              ], false)
            }
          },

          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 3235,
            name: '直接访问'
          }

          ]
        }, {
          name: '相关背景',
          type: 'pie',
          radius: ['76%', '100%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#FFFFFF'
              },

              {
                offset: 0.30,
                color: '#E3E3FF'
              }, {
                offset: 0.50,
                color: '#E3E3FF'
              }, {
                offset: 0.70,
                color: '#E3E3FF'
              },

              {
                offset: 1,
                color: '#FFFFFF'
              }
              ], false)
            }
          },

          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 3235,
            name: '直接访问'
          }

          ]
        }

        ]
      }
      fiveChart = echarts.init(document.getElementById('fiveChart'))
      fiveChart.setOption(this.option)
    },
    getSixChart () {
      var percent = 22 // 百分数
      var color_percent0 = ''
      var color_percent100 = ''
      var dotArray = []

      calculateDot(percent)// 80%显示4个点，

      function calculateDot (data) {
        if (data <= 20) {
          dotArray.push(80)
          color_percent0 = 'rgba(12,255,0,1)'
          color_percent100 = 'rgba(12,255,0,.3)'
        } else if (data > 20 && data <= 40) {
          dotArray.push(...[80, 80])
          color_percent0 = 'rgba(12,255,0,1)'
          color_percent100 = 'rgba(12,255,0,.3)'
        } else if (data > 40 && data <= 60) {
          dotArray.push(...[80, 80, 80])
          color_percent0 = 'rgba(255,123,0,1)'
          color_percent100 = 'rgba(255,123,0,.3)'
        } else if (data > 60 && data <= 80) {
          dotArray.push(...[80, 80, 80, 80])
          color_percent0 = 'rgba(255,0,36,1)'
          color_percent100 = 'rgba(255,0,36,.3)'
        } else if (data > 80 && data <= 100) {
          dotArray.push(...[80, 80, 80, 80, 80])
          color_percent0 = 'rgba(255,0,36,1)'
          color_percent100 = 'rgba(255,0,36,.3)'
        }
      }

      this.option = {
        backgroundColor: '#000',
        title: {
          'x': '50%',
          'y': '45%',
          textAlign: 'center',
          top: '68%', // 字体的位置
          'text': '哈哈',
          'textStyle': {

            'fontWeight': 'normal',
            'color': '#FFF',
            'fontSize': 60
          },
          'subtextStyle': {// 副标题的文字的样式
            'fontWeight': 'bold',
            'fontSize': 18,
            'color': '#3ea1ff'
          }

        },
        xAxis: {
          show: false, // 是否展示x轴
          min: function (value) { // 调整x轴上面数据的位置
            return value.min - 7
          },
          max: function (value) {
            return value.max + 7
          },
          splitLine: {
            lineStyle: {
              show: true,
              type: 'dashed'
            }
          },
          'axisLabel': {
            'interval': 0,
            rotate: 40,
            textStyle: {
              fontSize: 12,
              color: '#000'
            }
          },
          data: ['1', '2', '3', '4', '5']
        },
        yAxis: {
          show: false,
          name: '万元',
          max: 200,
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [{
          'name': '',
          'type': 'pie',
          'radius': ['50%', '70%'],
          'avoidLabelOverlap': false,
          'startAngle': 225,
          'color': [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0.4,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: color_percent0 // 0% 处的颜色
            }, {
              offset: 1,
              color: color_percent100 // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
          }, 'none'],
          'hoverAnimation': false, // 是否开启 hover 在扇区上的放大动画效果。
          'legendHoverLink': false, // 是否启用图例 hover 时的联动高亮。
          'label': {
            'normal': {
              'show': false,
              'position': 'center'
            },
            'emphasis': {
              'show': true,
              'textStyle': {
                'fontSize': '30',
                'fontWeight': 'bold'
              }
            }
          },
          'labelLine': {
            'normal': {
              'show': false
            }
          },
          'data': [{
            'value': 75,
            'name': '1'
          }, {
            'value': 25,
            'name': '2'
          }]
        }, {
          'name': ' ',
          'type': 'pie',
          'radius': ['48%', '47%'],
          'avoidLabelOverlap': false, // 是否启用防止标签重叠策略
          'startAngle': 225,

          'hoverAnimation': false,
          'legendHoverLink': false,
          'label': {
            'normal': {
              'show': false,
              'position': 'center'
            },
            'emphasis': {
              'show': true,
              'textStyle': {
                'fontSize': '30',
                'fontWeight': 'bold'
              }
            }
          },
          'labelLine': {
            'normal': {
              'show': false
            }
          },
          'data': [{
            'value': 75,
            'name': '1'
          }, {
            'value': 25,
            'name': '2'
          }]
        }, {
          'name': '',
          'type': 'pie',
          'radius': ['50%', '70%'],
          'avoidLabelOverlap': false,
          'startAngle': 315,
          'color': ['rgba(34,34,34,.9)', '#ff7a00', 'transparent'],
          'hoverAnimation': false,
          'legendHoverLink': false,
          'clockwise': false, // 饼图的扇区是否是顺时针排布。
          'itemStyle': {
            'normal': {
              'borderColor': 'transparent',
              'borderWidth': '20'
            },
            'emphasis': {
              'borderColor': 'transparent',
              'borderWidth': '20'
            }
          },
          'z': 10,
          'label': {
            'normal': {
              'show': false,
              'position': 'center'
            }

          },
          'labelLine': {
            'normal': {
              'show': false
            }
          },
          'data': [{
            'value': (100 - percent) * 270 / 360,

            'label': {
              normal: {
                formatter: percent + '%',
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '90',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            'name': ''
          }, {
            'value': 1,
            'name': ''
          }, {
            'value': 100 - (100 - percent) * 270 / 360,
            'name': ''
          }]
        },
          // 总共有5个小球
        {
          name: '',
          symbolOffset: ['20', '0'], // 就是把自己向上移动了一半的位置，在 symbol 图形是气泡的时候可以让图形下端的箭头对准数据点。
          type: 'scatter',

          data: [80, 80, 80, 80, 80]
        },
          // 根据数据判断小球的颜色
        {
          name: '',

          type: 'scatter',
          symbolOffset: ['20', '0'], // 移动小球的位置
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
            offset: 0,
            color: color_percent0
          }, {
            offset: 1,
            color: color_percent100
          }]),
          data: dotArray
        },
        {// 第一个线
          name: '',

          type: 'line',
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
            offset: 0,
            color: color_percent0
          }, {
            offset: 1,
            color: color_percent100
          }]),
          symbol: 'none',
          data: [85, 85, 85, 85, 85, 85]
        },
        {// 第二根线
          name: '',

          type: 'line',
          symbol: 'none', // 去掉横线上的小点
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
            offset: 0,
            color: color_percent0
          }, {
            offset: 1,
            color: color_percent100
          }]),
          data: [75, 75, 75, 75, 75, 75]
        }
        ]
      }
      sixChart = echarts.init(document.getElementById('sixChart'))
      sixChart.setOption(this.option)
    },
    getSevenChart () {
      var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
      }
      var BJData = [
        [{
          name: '上海',
          value: 100
        }, {
          name: '北京'
        }],
        [{
          name: '广州',
          value: 70
        }, {
          name: '北京'
        }],
        [{
          name: '哈尔滨',
          value: 30
        }, {
          name: '北京'
        }],
        [{
          name: '青岛',
          value: 50
        }, {
          name: '北京'
        }],
        [{
          name: '南昌',
          value: 20
        }, {
          name: '北京'
        }],
        [{
          name: '银川',
          value: 10
        }, {
          name: '北京'
        }],
        [{
          name: '拉萨',
          value: 80
        }, {
          name: '北京'
        }],
        [{
          name: '西安',
          value: 55
        }, {
          name: '北京'
        }],
        [{
          name: '乌鲁木齐',
          value: 90
        }, {
          name: '北京'
        }]
      ]
      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = geoCoordMap[dataItem[0].name]
          var toCoord = geoCoordMap[dataItem[1].name]
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord,
              value: dataItem[0].value
            }, {
              coord: toCoord
            }])
          }
        }
        return res
      }

      var series = [];
      [
        ['北京', BJData]
      ].forEach(function (item, i) {
        series.push(
          {
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 4,
              trailLength: 0.02,
              symbol: 'arrow',
              symbolSize: 5
            },
            lineStyle: {
              normal: {
                width: 1,
                opacity: 0.6,
                curveness: 0.2
              }
            },

            data: convertData(item[1])
          }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                offset: [5, 0],
                formatter: '{b}'
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: function (val) {
              return 4 + val[2] / 10
            },
            itemStyle: {
              normal: {
                show: false,
                color: '#f00'
              }
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[0].name,
                value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
              }
            })
          },
          // 被攻击点
          {
            type: 'scatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
              period: 4,
              brushType: 'stroke',
              scale: 4
            },
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#00ffff',
                formatter: '{b}',
                textStyle: {
                  color: '#00ffff'
                }
              },
              emphasis: {
                show: true
              }
            },
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
              normal: {
                show: true,
                color: '#9966cc'
              }
            },
            data: [{
              name: item[0],
              value: geoCoordMap[item[0]].concat([100])
            }]
          }
        )
      })

      this.option = {
        backgroundColor: '#404a59',

        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua'],
          textStyle: {
            color: '#fff'
          }
        },
        geo: {
          map: 'china',
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          layoutCenter: ['50%', '53%'],
          layoutSize: '108%',
          itemStyle: {
            normal: {
              color: 'rgba(51, 69, 89, .5)',
              borderColor: 'rgba(100,149,237,1)'
            },
            emphasis: {
              color: 'rgba(37, 43, 61, .5)'
            }
          }
        },

        series: series
      }
      sevenChart = echarts.init(document.getElementById('sevenChart'))
      sevenChart.setOption(this.option)
    },
    getEightChart () {
      var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028]
      }
      var dataT = [{
        name: '上海',
        value: 95
      },
      {
        name: '广州',
        value: 90
      },
      {
        name: '大连',
        value: 80
      },
      {
        name: '南宁',
        value: 70
      },
      {
        name: '南昌',
        value: 60
      },
      {
        name: '拉萨',
        value: 50
      },
      {
        name: '长春',
        value: 40
      },
      {
        name: '包头',
        value: 30
      },
      {
        name: '重庆',
        value: 20
      },
      {
        name: '常州',
        value: 10
      }
      ]

      geoCoordMap['淮北供电公司'] = [116.8549110000, 33.9014640000]

      var GZData = []
      var tempData = ['淮北供电公司', GZData]

      dataT.map((item, index) => {
        var arr = []
        arr.push(item)
        arr.push({
          name: '淮北供电公司'
        })
        GZData.push(arr)
      })

      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = geoCoordMap[dataItem[0].name]
          var toCoord = geoCoordMap[dataItem[1].name]
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[0].value
            })
          }
        }
        return res
      }

      var color = ['#00ff78', '#ff971b', '#acff43', '#ff73b7', '#ffff46', '#27bbfe']
      var series = [{
        type: 'map',
        map: 'china',
        //    width: '100%',
        geoIndex: 1,
        zlevel: 1,
        //    aspectScale: 0.75, //长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: false,
        itemStyle: {
          normal: {
            areaColor: 'rgba(128, 128, 128, 0)',
            borderColor: '#49a7d5' // 省市边界线00fcff 516a89

          },
          emphasis: {
            areaColor: 'rgba(128, 128, 128, 0)'
          }
        },
        data: [{
          name: '南海诸岛',
          value: 0,
          itemStyle: {
            normal: {
              opacity: 0,
              label: {
                show: false
              }
            }
          }
        }]
      }]

      series.push({
        name: tempData[0],
        type: 'lines',
        zlevel: 3,
        symbol: ['none', 'circle'],
        effect: {
          show: true,
          period: 3, // 箭头指向速度，值越小速度越快
          trailLength: 0.01, // 特效尾迹长度[0,1]值越大，尾迹越长重
          symbolSize: 4 // 图标大小
        },
        lineStyle: {
          normal: {
            opacity: 1,
            curveness: 0.4, // 曲线的弯曲程度
            color: '#609fd4'
          }
        },
        data: convertData(tempData[1])
      }, {
        name: tempData[0],
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}'

          }
        },
        symbolSize: function (val) {
          console.log(val)
          return val[2] / 2
        },
        itemStyle: {
          normal: {
            //                fontSize: 80,
          }
        },
        data: tempData[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          }
        })
      }, {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        symbolSize: 30,
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',

            color: 'white'
          }
        },
        itemStyle: {
          normal: {
            color: 'white'
          }
        },
        rippleEffect: {
          scale: 4,
          brushType: 'stroke'
        },
        data: [{
          name: tempData[0],
          value: geoCoordMap[tempData[0]],
          visualMap: false
        }]
      }, {
        type: 'scatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        symbolSize: 20,
        symbol: 'pin',
        itemStyle: {
          normal: {
            color: 'white'
          }
        },
        rippleEffect: {
          //        brushType: 'stroke'
        },
        data: [{
          name: tempData[0],
          value: geoCoordMap[tempData[0]],
          visualMap: false
        }]
      })

      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            if (params.seriesType === 'scatter' && params.name !== tempData[0]) {
              return '<br>' + params.seriesName + ' ---> ' + params.data.name + '<br />数量：' + params.data.value[2]
            } else if (params.seriesType === 'lines') {
              return '<br>' + params.data.fromName + ' ---> ' + params.data.toName + '<br />数量：' + params.data.value
            } else {
              return params.name
            }
          }
        },
        visualMap: {
          min: 0,
          max: 100,
          calculable: true,
          color: color,
          //            textStyle: {
          //                color: '#fff',
          //            },
          show: false
        },
        geo: {
          map: 'china',
          zoom: 0.98,
          zlevel: 2,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false, // 是否允许缩放
          itemStyle: {
            normal: {
              areaColor: '#214278',
              borderColor: '#195BB9' // 省市边界线00fcff 516a89

            },
            emphasis: {
              color: '#112246' // 悬浮背景
            }
          }
        },
        series: series
      }
      eightChart = echarts.init(document.getElementById('eightChart'))
      eightChart.setOption(this.option)
    },
    getNineChart () {
      var name = 'china'
      var yuexi = 'rgba(255, 153, 0, 0.8)' // 粤西
      var yuedong = 'rgba(244, 233, 37, 0.8)' // 粤东
      var zhusanjiao = 'rgba(0, 153, 0, 0.8)' // 珠三角
      var yuebei = 'rgba(204, 0, 204, 0.8)' // 粤北

      var geoCoordMap = {
        '清远市': [112.9175, 24.3292],
        '北京市': [116.4551, 40.2539],
        '韶关市': [113.7964, 24.7028],
        '湛江市': [110.3577, 20.9894],
        '梅州市': [116.1255, 24.1534],
        '河源市': [114.917, 23.9722],
        '肇庆市': [112.1265, 23.5822],
        '惠州市': [114.6204, 23.1647],
        '茂名市': [111.0059, 22.0221],
        '江门市': [112.6318, 22.1484],
        '阳江市': [111.8298, 22.0715],
        '云浮市': [111.7859, 22.8516],
        '广州市': [113.5107, 23.2196],
        '汕尾市': [115.5762, 23.0438],
        '揭阳市': [116.1255, 23.313],
        '珠海市': [113.7305, 22.1155],
        '佛山市': [112.8955, 23.1097],
        '潮州市': [116.7847, 23.8293],
        '汕头市': [117.1692, 23.3405],
        '深圳市': [114.5435, 22.5439],
        '东莞市': [113.8953, 22.901],
        '中山市': [113.4229, 22.478]
      }

      var gdata = [{
        'name': '北京市',
        'value': '98652'
      }, {
        'name': '广州市',
        'value': '75986'
      }]

      var cdata = [{
        'name': '清远市',
        'value': '199'
      }, {
        'name': '韶关市',
        'value': '152'
      }, {
        'name': '湛江市',
        'value': '299'
      }, {
        'name': '梅州市',
        'value': '89'
      }, {
        'name': '河源市',
        'value': '52'
      }, {
        'name': '肇庆市',
        'value': '99'
      }, {
        'name': '惠州市',
        'value': '352'
      }, {
        'name': '茂名市',
        'value': '116'
      }, {
        'name': '江门市',
        'value': '168'
      }, {
        'name': '阳江市',
        'value': '176'
      }, {
        'name': '云浮市',
        'value': '78'
      }, {
        'name': '广州市',
        'value': '468'
      }, {
        'name': '汕尾市',
        'value': '86'
      }, {
        'name': '揭阳市',
        'value': '114'
      }, {
        'name': '珠海市',
        'value': '157'
      }, {
        'name': '佛山市',
        'value': '315'
      }, {
        'name': '潮州市',
        'value': '169'
      }, {
        'name': '汕头市',
        'value': '214'
      }, {
        'name': '深圳市',
        'value': '532'
      }, {
        'name': '东莞市',
        'value': '265'
      }, {
        'name': '中山市',
        'value': '259'
      }]

      // 北京与广州关联
      var relevance = [{
        'fromName': '广州市',
        'toName': '北京市',
        'coords': [
          [113.5107, 23.2196],
          [116.4551, 40.2539]
        ],
        lineStyle: {
          color: 'rgba(255, 153, 0, 0.8)'
        }
      }, {
        'fromName': '北京市',
        'toName': '广州市',
        'coords': [
          [116.4551, 40.2539],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: 'rgba(255, 255, 0, 0.8)'
        }
      }]

      // 广东省地市关系
      var relation = [{
        'fromName': '湛江市',
        'toName': '广州市',
        'coords': [
          [110.3577, 20.9894],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuexi
        }
      },
      {
        'fromName': '清远市',
        'toName': '广州市',
        'coords': [
          [112.9175, 24.3292],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuebei
        }
      },
      {
        'fromName': '韶关市',
        'toName': '广州市',
        'coords': [
          [113.7964, 24.7028],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuebei
        }
      },
      {
        'fromName': '梅州市',
        'toName': '广州市',
        'coords': [
          [116.1255, 24.1534],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuedong
        }
      },
      {
        'fromName': '河源市',
        'toName': '广州市',
        'coords': [
          [114.917, 23.9722],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuedong
        }
      },
      {
        'fromName': '肇庆市',
        'toName': '广州市',
        'coords': [
          [112.1265, 23.5822],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '惠州市',
        'toName': '广州市',
        'coords': [
          [114.6204, 23.1647],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '茂名市',
        'toName': '广州市',
        'coords': [
          [111.0059, 22.0221],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuexi
        }
      },
      {
        'fromName': '江门市',
        'toName': '广州市',
        'coords': [
          [112.6318, 22.1484],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '阳江市',
        'toName': '广州市',
        'coords': [
          [111.8298, 22.0715],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuexi
        }
      },
      {
        'fromName': '云浮市',
        'toName': '广州市',
        'coords': [
          [111.7859, 22.8516],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuexi
        }
      },
      {
        'fromName': '汕尾市',
        'toName': '广州市',
        'coords': [
          [115.5762, 23.0438],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuedong
        }
      },
      {
        'fromName': '揭阳市',
        'toName': '广州市',
        'coords': [
          [116.1255, 23.313],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuedong
        }
      },
      {
        'fromName': '珠海市',
        'toName': '广州市',
        'coords': [
          [113.7305, 22.1155],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '佛山市',
        'toName': '广州市',
        'coords': [
          [112.8955, 23.1097],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '潮州市',
        'toName': '广州市',
        'coords': [
          [116.7847, 23.8293],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuedong
        }
      },
      {
        'fromName': '汕头市',
        'toName': '广州市',
        'coords': [
          [117.1692, 23.3405],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: yuedong
        }
      },
      {
        'fromName': '深圳市',
        'toName': '广州市',
        'coords': [
          [114.5435, 22.5439],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '东莞市',
        'toName': '广州市',
        'coords': [
          [113.8953, 22.901],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      },
      {
        'fromName': '中山市',
        'toName': '广州市',
        'coords': [
          [113.4229, 22.478],
          [113.5107, 23.2196]
        ],
        lineStyle: {
          color: zhusanjiao
        }
      }
      ]

      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }

      this.option = {
        backgroundColor: '#154E90',
        title: {
          text: '',
          subtext: '',
          sublink: ''
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} <br/>{a} : {c}'
        },
        geo: [{
          show: true,
          map: 'china',
          label: {
            normal: {
              // show: true,
              textStyle: {
                color: '#fff'
              }
            },
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              borderColor: 'rgba(147, 235, 248, 1)',
              borderWidth: 1,
              areaColor: {
                type: 'radial',
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: 'rgba(147, 235, 248, .1)' // 100% 处的颜色
                }]
                // globalCoord: true // 缺省为 false
              },
              shadowColor: 'rgba(128, 217, 248, 1)',
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: '#389BB7',
              borderWidth: 0
            }
          },
          regions: [{
            name: '广州市',
            // selected: true,
            // itemStyle: {
            //     areaColor: '#9900CC',
            // },
            label: {
              show: true,
              color: '#FF0'
            }
          }, {
            name: '北京',
            // selected:true,
            // itemStyle: {
            //     areaColor: '#9900CC',
            // },
            label: {
              show: true,
              color: '#FF0'
            }
          }]
        }],
        series: [{
          show: false,
          name: '点',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: 50,
          label: {
            normal: {
              show: true,
              // show: false,
              textStyle: {
                color: '#fff',
                fontSize: 9
              },
              formatter: function (params) {
                return params.value[2]
              }
            }
          },
          itemStyle: {
            normal: {
              // color:  '#F62157', //标志颜色
              color: 'rgba(255, 153,0, 0.8)'
              // color: 'rgba(255, 153,0, 0)',
            }
          },

          // data: convertData(cdata),//
          data: convertData(gdata)
        }, {
          name: '线路',
          large: true,
          left: '2%',
          top: 10,
          // 线特效的配置
          type: 'lines',
          coordinateSystem: 'geo',
          // polyline:true,
          // symbol: ['none', 'triangle'],
          symbol: 'none',
          zlevel: 2,
          effect: {
            show: true,
            symbol: 'roundRect',
            constantSpeed: 50,
            period: 2,
            delay: 100,
            trailLength: 0.6,
            symbolSize: 6
          },
          lineStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#ed1941'
                }, {
                  offset: 1,
                  color: '#ffce7b'
                }],
                globalCoord: false
              },
              width: 0.5,
              opacity: 0.8,
              type: 'dotted',
              curveness: 0.2
            }
          },
          data: relevance // 北京与广东省
          // data:relation //广东省各地方
        }]
      }

      echarts.registerMap(name, zhongguo)
      nineChart = echarts.init(document.getElementById('nineChart'))
      nineChart.setOption(this.option)

      var k = 1
      var iCount
      setTimeout(function () {
        iCount = setInterval(function () {
          loading(k)
          k = k + 0.2
        }, 150)
      }, 5000)

      function loading (k) {
        var newoption = nineChart.getOption()
        if (k === 1) {
          newoption.geo[0].center = [113.5107, 23.2196]
        }

        // if(k==8.2){

        // }
        if (k < 11) {
          newoption.geo[0].zoom = k
          nineChart.setOption(newoption)
        } else {
          // 清除setInterval
          newoption.geo[0].label.show = true // 显示所有地名
          newoption.series[0].data = convertData(cdata) // 显示广东省各地市数据点
          newoption.series[1].data = relation // 显示广东省各地市线条
          nineChart.setOption(newoption)
          clearInterval(iCount)
        }
      }

      setTimeout(function () {
        setInterval(function () {
          var newoption = nineChart.getOption()
          if (newoption.geo[0].zoom < 6 && newoption.geo[0].label.show === true) {
            newoption.geo[0].label.show = false // 隐藏地名,只显示北京与广州
            newoption.series[0].data = convertData(gdata) // 显示北京与广东
            newoption.series[1].data = relevance // 北京与广东的点
            nineChart.setOption(newoption)
          } else if (newoption.geo[0].zoom > 6 && newoption.geo[0].label.show === false) {
            newoption.geo[0].label.show = true // 显示所有地名
            newoption.series[0].data = convertData(cdata) // 显示广东省各地市数据点
            newoption.series[1].data = relation // 显示广东省各地市线条
            nineChart.setOption(newoption)
          }
        }, 500)
      }, 10000)
    },
    getTenChart () {
      function randomData () {
        return Math.round(Math.random() * 300)
      }

      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        尼日利亚: [-4.388361, 11.186148],
        美国洛杉矶: [-118.24311, 34.052713],
        香港邦泰: [114.195466, 22.282751],
        美国芝加哥: [-87.801833, 41.870975],
        加纳库马西: [-4.62829, 7.72415],
        英国曼彻斯特: [-1.657222, 51.886863],
        德国汉堡: [10.01959, 54.38474],
        哈萨克斯坦阿拉木图: [45.326912, 41.101891],
        俄罗斯伊尔库茨克: [89.116876, 67.757906],
        巴西: [-48.678945, -10.493623],
        埃及达米埃塔: [31.815593, 31.418032],
        西班牙巴塞罗纳: [2.175129, 41.385064],
        柬埔寨金边: [104.88659, 11.545469],
        意大利米兰: [9.189948, 45.46623],
        乌拉圭蒙得维的亚: [-56.162231, -34.901113],
        莫桑比克马普托: [32.608571, -25.893473],
        阿尔及利亚阿尔及尔: [3.054275, 36.753027],
        阿联酋迪拜: [55.269441, 25.204514],
        匈牙利布达佩斯: [17.108519, 48.179162],
        澳大利亚悉尼: [150.993137, -33.675509],
        美国加州: [-121.910642, 41.38028],
        澳大利亚墨尔本: [144.999416, -37.781726],
        墨西哥: [-99.094092, 19.365711],
        加拿大温哥华: [-123.023921, 49.311753]
      }
      var BJData = [
        [{
          name: '尼日利亚',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '美国洛杉矶',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '香港邦泰',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '美国芝加哥',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '加纳库马西',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '英国曼彻斯特',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '德国汉堡',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '哈萨克斯坦阿拉木图',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '俄罗斯伊尔库茨克',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '巴西',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '埃及达米埃塔',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '西班牙巴塞罗纳',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '柬埔寨金边',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '意大利米兰',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '乌拉圭蒙得维的亚',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '莫桑比克马普托',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '阿尔及利亚阿尔及尔',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '阿联酋迪拜',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '匈牙利布达佩斯',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '澳大利亚悉尼',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '美国加州',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '澳大利亚墨尔本',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '墨西哥',
          value: randomData()
        }, {
          name: '上海'
        }],
        [{
          name: '加拿大温哥华',
          value: randomData()
        }, {
          name: '上海'
        }]
      ]
      var convertData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = geoCoordMap[dataItem[0].name]
          var toCoord = geoCoordMap[dataItem[1].name]
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
            ])
          }
        }
        return res
      }
      var convertData2 = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var dataItem = data[i]
          var fromCoord = geoCoordMap[dataItem[1].name]
          var toCoord = geoCoordMap[dataItem[0].name]
          if (fromCoord && toCoord) {
            res.push([{
              coord: fromCoord,
              value: dataItem[0].value
            },
            {
              coord: toCoord
            }
            ])
          }
        }
        return res
      }

      var series = [];
      [
        ['上海', BJData]
      ].forEach(function (item, i) {
        series.push({
          name: '攻击线1',
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            color: '#0bc7f3',
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', // 箭头图标
            symbolSize: 5 // 图标大小
          },
          lineStyle: {
            normal: {
              color: '#0bc7f3',
              width: 1, // 尾迹线条宽度
              opacity: 0, // 尾迹线条透明度
              curveness: 0.3 // 尾迹线条曲直度
            }
          },
          data: convertData(item[1])
        }, {
          name: '攻击线2',
          type: 'lines',
          zlevel: 2,
          effect: {
            show: true,
            color: '#FF0000',
            period: 4, // 箭头指向速度，值越小速度越快
            trailLength: 0.02, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', // 箭头图标
            symbolSize: 5 // 图标大小
          },
          lineStyle: {
            normal: {
              color: '#FF0000',
              width: 1, // 尾迹线条宽度
              opacity: 0, // 尾迹线条透明度
              curveness: -0.3 // 尾迹线条曲直度
            }
          },
          data: convertData2(item[1])
        }, {

          type: 'effectScatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            // 涟漪特效
            period: 4, // 动画时间，值越小速度越快
            brushType: 'stroke', // 波纹绘制方式 stroke, fill
            scale: 4 // 波纹圆环最大限制，值越大波纹越大
          },
          label: {
            normal: {
              show: true,
              position: 'right', // 显示位置
              offset: [5, 0], // 偏移设置
              formatter: '{b}' // 圆环显示文字
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          symbol: 'circle',
          symbolSize: function (val) {
            return 8 + val[2] / 1000 // 圆环大小
          },
          itemStyle: {
            normal: {
              show: true
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          data: item[1].map(function (dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            }
          })
        },
          // 被攻击点
        {
          type: 'scatter',
          coordinateSystem: 'geo',
          zlevel: 2,
          rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4
          },
          label: {
            normal: {
              show: true,
              color: 'red',
              position: 'right',
              formatter: '{b}'
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          symbol: 'pin',
          symbolSize: 30,
          itemStyle: {
            normal: {
              show: true,
              color: 'red'
            },
            emphasis: {
              show: true,
              color: '#FF6A6A'
            }
          },
          data: [{
            name: item[0],
            value: geoCoordMap[item[0]].concat([100]),
            visualMap: false
          }]
        }
        )
      })
      var svg = 'path://M32.597,9.782 L30.475,11.904 C30.085,12.294 29.452,12.294 29.061,11.904 C28.671,11.513 28.671,10.880 29.061,10.489 L31.182,8.368 C31.573,7.978 32.206,7.978 32.597,8.368 C32.987,8.759 32.987,9.392 32.597,9.782 ZM30.000,30.500 C30.000,31.328 29.329,32.000 28.500,32.000 L5.500,32.000 C4.672,32.000 4.000,31.328 4.000,30.500 C4.000,29.672 4.672,29.000 5.500,29.000 L8.009,29.000 L8.009,18.244 C8.009,13.139 12.034,9.000 17.000,9.000 C21.966,9.000 25.992,13.139 25.992,18.244 L25.992,29.000 L28.500,29.000 C29.329,29.000 30.000,29.672 30.000,30.500 ZM17.867,14.444 L13.000,22.000 L17.000,22.000 L17.133,26.556 L21.000,20.000 L17.000,20.000 L17.867,14.444 ZM25.221,6.327 C25.033,6.846 24.459,7.113 23.940,6.924 C23.421,6.735 23.153,6.162 23.342,5.643 L24.368,2.823 C24.557,2.304 25.131,2.037 25.650,2.226 C26.169,2.415 26.436,2.989 26.248,3.508 L25.221,6.327 ZM17.000,5.000 C16.448,5.000 16.000,4.552 16.000,4.000 L16.000,1.000 C16.000,0.448 16.448,0.000 17.000,0.000 C17.552,0.000 18.000,0.448 18.000,1.000 L18.000,4.000 C18.000,4.552 17.552,5.000 17.000,5.000 ZM10.028,7.197 C9.509,7.386 8.935,7.118 8.746,6.599 L7.720,3.780 C7.532,3.261 7.799,2.687 8.318,2.498 C8.837,2.309 9.411,2.577 9.600,3.096 L10.626,5.915 C10.815,6.434 10.547,7.008 10.028,7.197 ZM3.354,12.268 L1.232,10.146 C0.842,9.756 0.842,9.123 1.232,8.732 C1.623,8.342 2.256,8.342 2.646,8.732 L4.768,10.854 C5.158,11.244 5.158,11.877 4.768,12.268 C4.377,12.658 3.744,12.658 3.354,12.268 Z'

      this.option = {
        backgroundColor: '#000',
        tooltip: {
          trigger: 'item',
          backgroundColor: '#1540a1',
          borderColor: '#FFFFCC',
          showDelay: 0,
          hideDelay: 0,
          enterable: true,
          transitionDuration: 0,
          extraCssText: 'z-index:100',
          formatter: function (params, ticket, callback) {
            // 根据业务自己拓展要显示的内容
            var res = ''
            var name = params.name
            var value = params.value[params.seriesIndex + 1]
            res =
                                "<span style='color:#fff;'>" +
                                name +
                                '</span><br/>数据：' +
                                value
            return res
          }
        },
        visualMap: {
          // 图例值控制
          show: false,
          type: 'piecewise',
          pieces: [{
            max: 80,
            color: 'red'
          },
          {
            min: 80,
            max: 120,
            color: 'yellow'
          },
          {
            min: 120,
            color: 'green'
          }
          ],
          calculable: true
        },
        geo: {
          map: 'world',
          show: true,
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true, // 是否允许缩放
          layoutCenter: ['50%', '50%'], // 地图位置
          layoutSize: '120%',
          itemStyle: {
            normal: {
              show: 'true',
              color: '#04284e', // 地图背景色
              borderColor: '#5bc1c9' // 省市边界线
            },
            emphasis: {
              show: 'true',
              color: 'rgba(37, 43, 61, .5)' // 悬浮背景
            }
          }
        },
        legend: {
          orient: 'vertical',
          top: '30',
          left: 'center',
          align: 'right',
          data: [
            { name: '攻击线1', icon: svg },
            { name: '攻击线2', icon: svg }],
          textStyle: {
            color: '#fff',
            fontSize: 20
          },
          itemWidth: 50,
          itemHeight: 30,
          selectedMode: 'multiple'
        },
        series: series
      }
      tenChart = echarts.init(document.getElementById('tenChart'))
      tenChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
