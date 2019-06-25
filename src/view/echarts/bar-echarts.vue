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
            <Col span="12">
                <div id="sevenChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="eightChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="nineChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="tenChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="24">
                <div id="elevenChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="twelveChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="thirteenChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="fourteenChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="fifteenChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china'

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
let elevenChart = null
let twelveChart = null
let thirteenChart = null
let fourteenChart = null
let fifteenChart = null
export default {
  name: 'bar-echarts',
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
    this.getSevenChart()
    this.getEightChart()
    this.getNineChart()
    this.getTenChart()
    this.getElevenChart()
    this.getTwelveChart()
    this.getThirteenChart()
    this.getFourteenChart()
    this.getFifteenChart()
  },
  methods: {
    getOneChart () {
      this.option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          backgroundColor: 'rgba(0, 76, 152, .6)',
          borderColor: '#035699',
          borderWidth: 1
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '5%',
          top: '12%',
          containLabel: true
        },
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        xAxis: [
          {
            type: 'category',
            data: ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05', '06', '07', '08'],
            axisTick: {
              alignWithLabel: true
            },
            /* 坐标颜色 */
            axisLine: {
              lineStyle: {
                color: '#2faef5',
                width: 2
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            /* 坐标颜色 */
            axisLine: {
              lineStyle: {
                color: '#2faef5',
                width: 2
              }
            },
            /* 网络线 */
            splitLine: {

              show: true,

              lineStyle: {

                color: '#483d8b',

                type: 'dashed',

                width: 1

              }

            }
          }
        ],
        series: [
          {
            name: '空气质量',
            type: 'bar',
            color: ['#04a5f9'],
            itemStyle: {
              normal: {
                label: { show: true, position: 'top' },
                /* 柱状渐变 */
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#9dcb7e' },
                    { offset: 0.5, color: '#9dcb7e' },
                    { offset: 1, color: '#008099' }
                  ]
                )
              }
            },
            barWidth: '60%',
            data: [65, 95, 100, 70, 90, 95, 80, 65, 95, 100, 70, 90, 95, 80, 65, 95, 100, 70, 90, 95, 80, 65, 95, 100]
          }
        ]
      }
      oneChart = echarts.init(document.getElementById('oneChart'))
      oneChart.setOption(this.option)
    },
    getTwoChart () {
      this.option = {
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        title: {
          show: false,
          text: '离散率七天日平均分析',
          left: 'center',
          textStyle: {
            // 文字颜色
            color: '#ccc',
            // 字体大小
            fontSize: 20
          }
        },
        xAxis: [
          {
            type: 'category',
            name: '',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            // 刻度线是否显示
            axisTick: {
              show: false
            },
            // x轴的字体样式
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: '#3398DB',
                fontSize: '16'
              }
            },
            // 控制网格线是否显示
            splitLine: {
              show: false,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['red']
              }
            },
            // x轴的颜色和宽度
            axisLine: {
              show: true,
              lineStyle: {
                color: '#193d4e',
                width: 1 // 这里是坐标轴的宽度,可以去掉
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            // 刻度线是否显示
            axisTick: {
              show: false
            },
            // y轴的字体样式
            axisLabel: {
              show: true,
              formatter: '{value} %',
              textStyle: {
                color: '#3398DB',
                fontSize: '16'
              }
            },
            // 控制网格线是否显示
            splitLine: {
              show: false,
              //  改变轴线颜色
              lineStyle: {
                // 使用深浅的间隔色
                color: ['red']
              }
            },
            // y轴的颜色和宽度
            axisLine: {
              show: false,
              lineStyle: {
                color: '#3398DB',
                width: 1 // 这里是坐标轴的宽度,可以去掉
              }
            }
          }
        ],
        series: [
          {
            name: '离散率',
            type: 'bar',
            barWidth: '20px',
            itemStyle: {
              normal: {
                // 颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#193d4e' },
                    { offset: 0.5, color: '#29758a' },
                    { offset: 1, color: '#3cc0ce' }
                  ]
                )
              }
            },
            data: [5, 1, 6, 4, 2, -2, -1, -2, 8, 6, 2, -3]
          }
        ]
      }
      twoChart = echarts.init(document.getElementById('twoChart'))
      twoChart.setOption(this.option)
    },
    getThreeChart () {
      var myColor = ['#81E7ED']
      var dataLine = [50, 66, 33, 25]
      let positionLeft = 0.4
      let max = 100 + 2 * positionLeft
      this.option = {
        grid: [
          {
            left: '8%',
            top: '12%',
            right: '5%',
            bottom: '8%',
            containLabel: true
          },
          {
            left: '10%',
            top: '12%',
            right: '5%',
            bottom: '8%',
            containLabel: true
          }
        ],
        xAxis: [{
          max: max,
          show: false
        }],
        yAxis: [{
          axisTick: 'none',
          axisLine: 'none',
          offset: '27',
          axisLabel: {
            textStyle: {
              color: '#81E7ED',
              fontSize: '16'
            }
          },
          data: ['智能科技', '人工科技', '智能装备制造', '核能科技']
        }, {
          axisTick: 'none',
          axisLine: 'none',
          show: false,
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '16'
            }
          },
          data: [1, 1, 1, 1]
        }, {

          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: []
        }],
        series: [

          { // 间距
            type: 'bar',
            barWidth: 15,
            stack: 'b',
            legendHoverLink: false,
            itemStyle: {
              normal: {
                color: 'rgba(0,0,0,0)'
              }
            },

            data: [positionLeft, positionLeft, positionLeft, positionLeft]
          }, {
            name: '条',
            type: 'bar',
            stack: 'b',
            yAxisIndex: 0,
            data: dataLine,
            label: {
              normal: {
                show: false,
                position: 'right',
                distance: 10,
                formatter: function (param) {
                  return param.value + '%'
                },
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16'
                }
              }
            },
            barWidth: 10,
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                }
              }
            },
            z: 2
          }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99.8, 99.9, 99.9, 99.9],
            barWidth: 21,
            itemStyle: {
              normal: {
                color: '#0e2147',
                barBorderRadius: 2
              }
            },
            z: 1
          },
          {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            barWidth: 23,
            label: {
              normal: {
                show: true,
                position: 'right',
                distance: 10,
                formatter: function (data) {
                  return dataLine[data.dataIndex] + '%'
                },
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16'
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  var num = myColor.length
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 0
              }
            },
            z: 0
          }
        ]
      }
      threeChart = echarts.init(document.getElementById('threeChart'))
      threeChart.setOption(this.option)
    },
    getFourChart () {
      var myColor = ['#192948', '#192948', '#192948', '#192948', '#192948', '#192948', '#192948', '#192948']
      this.option = {
        grid: {
          left: '5%',
          top: '1%',
          right: '2%',
          bottom: '1%',
          containLabel: true
        },
        xAxis: [{
          show: false
        }],
        yAxis: [{
          axisTick: 'none',
          axisLine: 'none',
          offset: '27',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '16'
            }
          },
          data: ['投影机使用寿命通知', '投影机其它故障', '投影机画面不正常', '投影机画面暗', '投影机故障', '投影机下课后无法自动关机', '投影机系统启动后投影机不加电', '投影机无法切换到计算机画面', '投影机温度指示灯报警', '投影机灯泡指示灯报警', '投影机开启无法启动']
        }, {
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontSize: '16'
            }
          },
          data: ['3', '4', '9', '12', '20', '30', '40', '50', '118', '120', '125']
        }, {
          name: '',
          nameGap: '50',
          nameTextStyle: {
            color: '#192948',
            fontSize: '16'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: []
        }],
        series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [0.91, 1.25, 1.71, 2.19, 3.34, 4.29, 6.11, 7.04, 18.27, 18.93, 29.94],
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: function (param) {
                return param.value + '%'
              },
              textStyle: {
                color: '#192948',
                fontSize: '16'
              }
            }
          },
          barWidth: 12,
          itemStyle: {
            normal: {
              color: function (params) {
                var num = myColor.length
                return myColor[params.dataIndex % num]
              }
            }
          },
          z: 2
        }, {
          name: '白框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [99, 99.5, 99.5, 99.5, 99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
          barWidth: 20,
          itemStyle: {
            normal: {
              color: '#fff',
              barBorderRadius: 5
            }
          },
          z: 1
        }, {
          name: '外框',
          type: 'bar',
          yAxisIndex: 2,
          barGap: '-100%',
          data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
          barWidth: 24,
          itemStyle: {
            normal: {
              color: function (params) {
                var num = myColor.length
                return myColor[params.dataIndex % num]
              },
              barBorderRadius: 5
            }
          },
          z: 0
        },
        {
          name: '外圆',
          type: 'scatter',
          hoverAnimation: false,
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          yAxisIndex: 1,
          symbolSize: 24,
          itemStyle: {
            normal: {
              color: function (params) {
                var num = myColor.length
                return myColor[params.dataIndex % num]
              },
              opacity: 1
            }
          },
          z: 2
        }]
      }
      fourChart = echarts.init(document.getElementById('fourChart'))
      fourChart.setOption(this.option)
    },
    getFiveChart () {
      var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30]
      var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20]
      var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30]
      var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市']
      this.option = {
        color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          top: '8%',
          data: ['存量', '新增', '拆除', '整改'],
          textStyle: {
            color: '#fff'
          }
        },
        grid: { // 图表的位置
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: [{
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} ',
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed'
            }
          },
          show: true

        }],
        xAxis: [{
          type: 'category',
          axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
              fontSize: 10,
              color: '#fff'
            }
          },
          data: datacity
        }],
        series: [{
          name: '存量',
          type: 'bar',
          stack: 'sum',
          barWidth: '20px',
          data: data1

        },
        {
          name: '新增',
          type: 'bar',
          barWidth: '20px',
          stack: 'sum',
          data: data2

        },
        {
          name: '拆除',
          type: 'bar',
          color: '#F6931C',
          stack: 'sum1',
          barWidth: '20px',
          data: data3

        },
        {
          name: '整改',
          type: 'bar',
          color: '#FFD52E',
          stack: 'sum1',
          barWidth: '20px',
          data: data3

        }
        ]
      }
      fiveChart = echarts.init(document.getElementById('fiveChart'))
      fiveChart.setOption(this.option)
    },
    getSixChart () {
      var seriesLabel = {
        normal: {
          show: true,
          textBorderColor: '#333',
          textBorderWidth: 2
        }
      }

      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['City Alpha', 'City Beta', 'City Gamma'],
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: 100
        },
        toolbox: {
          show: true
        },
        xAxis: {
          type: 'category',
          name: 'Days',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          inverse: false, // 反转
          data: ['Sunny', 'Cloudy', 'Showers'],
          axisLabel: {
            formatter: function (value) {
              return '{' + value + '| }\n{value|' + value + '}'
            },
            textStyle: {
              color: '#fff'
            },
            margin: 20,
            rich: {
              value: {
                lineHeight: 30,
                align: 'center'
              },
              Sunny: {
                height: 40,
                align: 'center'
              },
              Cloudy: {
                height: 40,
                align: 'center'
              },
              Showers: {
                height: 40,
                align: 'center'
              }
            }
          }
        },
        series: [
          {
            name: 'City Alpha',
            type: 'bar',
            data: [165, 170, 30],
            label: seriesLabel,
            markPoint: {
              symbolSize: 1,
              symbolOffset: [0, '50%'],
              label: {
                normal: {
                  formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                  backgroundColor: 'rgb(242,242,242)',
                  borderColor: '#aaa',
                  borderWidth: 1,
                  borderRadius: 4,
                  padding: [4, 10],
                  lineHeight: 26,
                  position: 'top',
                  distance: 20,
                  rich: {
                    a: {
                      align: 'center',
                      color: '#fff',
                      fontSize: 18,
                      textShadowBlur: 2,
                      textShadowColor: '#000',
                      textShadowOffsetX: 0,
                      textShadowOffsetY: 1,
                      textBorderColor: '#333',
                      textBorderWidth: 2
                    },
                    b: {
                      color: '#333'
                    },
                    c: {
                      color: '#ff8811',
                      textBorderColor: '#000',
                      textBorderWidth: 1,
                      fontSize: 22
                    }
                  }
                }
              },
              data: [
                { type: 'max', name: 'max days: ' },
                { type: 'min', name: 'min days: ' }
              ]
            }
          },
          {
            name: 'City Beta',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110]
          },
          {
            name: 'City Gamma',
            type: 'bar',
            label: seriesLabel,
            data: [220, 82, 63]
          }
        ]
      }
      sixChart = echarts.init(document.getElementById('sixChart'))
      sixChart.setOption(this.option)
    },
    getSevenChart () {
      this.option = {
        'color': ['#3cefff'],
        'tooltip': {},
        'grid': {
          'containLabel': true
        },
        'xAxis': [{
          'type': 'category',
          'data': ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'],
          'axisTick': {
            'alignWithLabel': true
          },
          'nameTextStyle': {
            'color': '#82b0ec'
          },
          'axisLine': {
            'lineStyle': {
              'color': '#82b0ec'
            }
          },
          'axisLabel': {
            'textStyle': {
              'color': '#82b0ec'
            }
          }
        }],
        'yAxis': [{
          'type': 'value',
          'axisLabel': {
            'textStyle': {
              'color': '#82b0ec'
            },
            'formatter': '{value}%'
          },
          'splitLine': {
            'lineStyle': {
              'color': '#0c2c5a'
            }
          },
          'axisLine': {
            'show': false
          }
        }],
        'series': [{
          'name': '',
          'type': 'pictorialBar',
          'symbolSize': [20, 10],
          'symbolOffset': [0, -5],
          'symbolPosition': 'end',
          'z': 12,
          'label': {
            'normal': {
              'show': true,
              'position': 'top',
              'formatter': '{c}%'
            }
          },
          'data': [60, 70, 80, 90, 60, 70, 80, 90]
        }, {
          'name': '',
          'type': 'pictorialBar',
          'symbolSize': [20, 10],
          'symbolOffset': [0, 5],
          'z': 12,
          'data': [60, 70, 80, 90, 60, 70, 80, 90]
        }, {
          'type': 'bar',
          'itemStyle': {
            'normal': {
              'opacity': 0.7
            }
          },
          'barWidth': '20',
          'data': [60, 70, 80, 90, 60, 70, 80, 90],
          'markLine': {
            'silent': true,
            'symbol': 'none',
            'label': {
              'position': 'middle',
              'formatter': '{b}'
            },
            'data': [{
              'name': '目标值',
              'yAxis': 80,
              'lineStyle': {
                'color': '#ffc832'
              },
              'label': {
                'position': 'end',
                'formatter': '{b}\n {c}%'
              }
            }]
          }
        }]
      }
      sevenChart = echarts.init(document.getElementById('sevenChart'))
      sevenChart.setOption(this.option)
    },
    getEightChart () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true
        },
        calculable: false,
        textStyle: {
          color: '#fff',
          fontSize: 12
        },
        xAxis: [{
          type: 'category',
          data: ['Amanda', 'Candy', 'Chris', 'Cindy', 'Emma', 'Grace', 'Kent', 'Lily', 'Lisa', 'Michlle', 'Sandy', 'Shirly', 'Stancey']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '学生数',
          type: 'bar',
          data: [23, 26, 34, 39, 5, 25, 26, 39, 32, 66, 43, 27, 33],
          markPoint: {
            data: [{
              type: 'max',
              name: '最大值'
            }, {
              type: 'min',
              name: '最小值'
            }]
          },
          markLine: {
            data: [{
              type: 'average',
              name: '平均值'
            }]
          }
        }]
      }
      eightChart = echarts.init(document.getElementById('eightChart'))
      eightChart.setOption(this.option)
    },
    getNineChart () {
      this.option = {
        backgroundColor: '#142058',
        legend: {
          top: 20,
          textStyle: {
            color: '#fff'
          },
          data: ['车公司A', '车公司B', '车公司C']
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '5%',
          containLabel: true
        },

        yAxis: {
          type: 'value',
          axisTick: {
            show: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#363e83'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#363e83 '
            }
          },
          axisLabel: {
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '12'
            }
          }
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#363e83'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#363e83 '
            }
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '12'
            }
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
          },
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }, {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#363e83'
            }
          },
          axisLabel: {
            inside: false,
            textStyle: {
              color: '#fff',
              fontWeight: 'normal',
              fontSize: '12'
            }
            // formatter:function(val){
            //     return val.split("").join("\n")
            // },
          }
          // data: ['会', '不会', '看情况']
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: true
          },
          splitLine: {
            show: false
          }
          // data: ['会', '不会', '看情况']
        }

        ],
        series: [{
          name: '车公司A',
          type: 'bar',
          xAxisIndex: 2,
          zlevel: 1,
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)',
              borderWidth: 2,
              borderColor: '#076aba',
              shadowBlur: {
                shadowColor: 'rgba(255,255,255,0.31)',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 2
              }
            }
          },
          barWidth: '50%',
          data: [24, 27, 26, 13, 21, 14, 18, 12, 18, 28, 29, 16]
        }, {
          name: '车公司B',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: '#57a9e9',
              barBorderRadius: 1,
              borderWidth: 0
            }
          },
          zlevel: 2,
          barWidth: '50%',
          data: [16, 18, 22, 9, 13, 8, 13, 8, 12, 18, 19, 12]
        },
        {
          name: '车公司C',
          type: 'bar',
          xAxisIndex: 1,
          itemStyle: {
            normal: {
              show: true,
              color: '#0888ed',
              barBorderRadius: 1,
              borderWidth: 0
            }
          },
          zlevel: 2,
          barWidth: '50%',
          data: [11, 14, 16, 8, 10, 5, 8, 3, 7, 9, 7, 9]
        }
        ]
      }
      nineChart = echarts.init(document.getElementById('nineChart'))
      nineChart.setOption(this.option)
    },
    getTenChart () {
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }

        },
        legend: {
          data: ['支出', '收入'],
          textStyle: {
            color: 'white'
          }
        },
        color: ['rgba(0,193,255,0.8)', 'rgba(0,255,137,0.8)'],
        xAxis: [{
          type: 'category',
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ccc',
              width: 1
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#ccc',
              width: 1
            }
          }
        }],
        series: [{
          name: '辅助',
          type: 'bar',
          stack: '总量',
          barWidth: 35,
          itemStyle: {
            normal: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            },
            emphasis: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [0, 900, 1245, 1530, 1376, 1376, 1511]
        },
        {
          name: '收入',
          type: 'bar',
          stack: '总量',
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'top'
              }
            }
          },
          data: [900, 345, 393, '-', '-', 135, 178]
        },
        {
          name: '支出',
          type: 'bar',
          stack: '总量',
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'bottom'
              }
            }
          },
          data: ['-', '-', '-', 108, 154, '-', '-']
        }
        ]
      }
      tenChart = echarts.init(document.getElementById('tenChart'))
      tenChart.setOption(this.option)
    },
    getElevenChart () {
      // 图表标题
      var chart_title = '榆林市十二县农村饮水安全巩固提升情况测试'
      // 图表X轴数据
      var Xdata = ['榆阳区', '神木市', '府谷县', '靖边县', '定边县', '横山区', '吴堡县', '米脂县', '佳县', '子洲县', '绥德县', '清涧县']

      // 图表项目
      var fp_key = ['修建饮水工程（处）', '贫困户', '贫困人口', '投资金额(万)']
      var fp_coler = ['#258df6', '#6fce7d', '#fbc807', '#f5814b']
      // 图表项目数据
      var fp_val = {
        1: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360],
        2: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243],
        3: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187],
        4: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350],
        5: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317],
        6: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238],
        7: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350],
        8: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149],
        9: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236],
        10: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350],
        11: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350],
        12: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317]

      }
      // 图表月份
      var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

      this.option = {
        baseOption: {
          backgroundColor: '#0e2147',
          timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
              show: true,
              formatter: function (params) {
                console.log(params)
                return params.name + '月份数据统计'
              }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
              normal: {
                show: true,
                interval: 'auto',
                formatter: '{value}月'
              }
            },
            data: []
          },
          title: {
            //   text:'大北京景点帅哥美女统计',
            textStyle: {
              color: '#fff',
              fontSize: 16
            }
            // subtext: '作者:',
          },
          legend: {
            data: fp_key,
            top: 8,
            right: '20%',
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            // formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
              type: 'shadow'
            }
          },

          toolbox: {
            right: 20
          },

          grid: [{
            show: false,
            left: '3%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '45%'
          }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '9%'
          }, {
            show: false,
            right: '3%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '45%'
          }],

          xAxis: [
            {
              max: function (value) {
                return value.max * 4 - 20
              },
              type: 'value',
              triggerEvent: true,
              inverse: true,
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#B2B2B2',
                  fontSize: 12
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#1F2022',
                  width: 1,
                  type: 'solid'
                }
              }
            },
            {
              gridIndex: 1,
              show: false
            },
            {
              max: function (value) {
                return value.max * 4 - 20
              },
              gridIndex: 2,
              type: 'value',
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              position: 'top',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#B2B2B2',
                  fontSize: 12
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#1F2022',
                  width: 1,
                  type: 'solid'
                }
              }
            }
          ],
          yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              margin: 8,
              textStyle: {
                color: '#fff',
                fontSize: 12
              }

            },
            data: Xdata
          }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12
              }

            },
            data: Xdata.map(function (value) {
              return {
                value: value,
                textStyle: {
                  align: 'center'
                }
              }
            })
          }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              textStyle: {
                color: '#9D9EA0',
                fontSize: 12
              }

            },
            data: Xdata
          }],
          series: []

        },

        options: []

      }

      for (var i = 0; i < timeLineData.length; i++) {
        this.option.baseOption.timeline.data.push(timeLineData[i])
        this.option.options.push({
          title: {
            text: chart_title + timeLineData[i] + '月份统计'
          },
          series: [{
            name: fp_key[0],
            type: 'bar',
            stack: 'one',
            barGap: 15,
            barWidth: 15,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#fff',

                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[0]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          }, {
            name: fp_key[1],
            type: 'bar',
            stack: 'one',
            barGap: 15,
            barWidth: 15,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#fff',

                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[1]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          },

          {
            name: fp_key[2],
            stack: 'one',
            type: 'bar',
            barGap: 15,
            barWidth: 15,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[2]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          },
          {
            name: fp_key[3],
            stack: 'one',
            type: 'bar',
            barGap: 15,
            barWidth: 15,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[3]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          },
          {
            name: fp_key[0],
            stack: 'right',
            type: 'bar',
            barGap: 15,
            barWidth: 15,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: true,
                position: 'inside'
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[0]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },

            data: fp_val[timeLineData[i]]
          },
          {
            name: fp_key[1],
            stack: 'right',
            type: 'bar',
            barGap: 15,
            barWidth: 15,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[1]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          },
          {
            name: fp_key[2],
            stack: 'right',
            type: 'bar',
            barGap: 15,
            barWidth: 15,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[2]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          },
          {
            name: fp_key[3],
            stack: 'right',
            type: 'bar',
            barGap: 15,
            barWidth: 15,
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
              normal: {
                show: true,
                position: 'inside',
                textStyle: {
                  color: '#fff',
                  fontSize: 12
                }
              },
              emphasis: {
                show: true,
                position: 'inside',
                offset: [0, 0],
                textStyle: {
                  color: '#fff',
                  fontSize: 14
                }
              }
            },
            itemStyle: {
              normal: {
                color: function (params) {
                  return fp_coler[3]
                },
                opacity: 1

              },
              emphasis: {
                opacity: 1
              }
            },
            data: fp_val[timeLineData[i]]
          }
          ]
        })
      }
      elevenChart = echarts.init(document.getElementById('elevenChart'))
      elevenChart.setOption(this.option)
    },
    getTwelveChart () {
      var rawData = [
        { name: '上海', value: [10.6, 9.1, 7.1, 69.1, 78.3, 69.4, 55, 24, 15, 7, 9] },
        { name: '东莞', value: [11.6, 90.1, 77.1, 69.1, 78.3, 69.4, 55, 24, 15, 7, 9] },
        { name: '北京', value: [101.6, 90.1, 77.1, 69.1, 78.3, 69.4, 55, 24, 15, 7, 9] }
      ]

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
      var namearr = ['1', '2', '3', '4', '5', '6', '7', '8']

      var colorarr = ['#1921ff', '#266eff', '#01c3dd', '#008198', '#2ef4ab',
        '#ffe074', '#ffcbcb', '#cd8425']

      this.option = {
        backgroundColor: '#010b43',
        top: '-40%',
        bottom: '-40%',
        tooltip: {
          trigger: 'axis'
        },
        geo: {
          type: 'map',
          map: 'china',
          label: {
            normal: {
              textStyle: {
                color: '#fff'
              },
              show: false
            },
            emphasis: {
              textStyle: {
                color: '#C6A300'
              },
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: 'rgba(0,0,0,0)',
              borderColor: '#126cc4',
              borderWidth: 1.3
            },
            emphasis: {
              areaColor: 'rgba(233,0,200,0.3)'
            }
          }
        },
        series: []
      }
      twelveChart = echarts.init(document.getElementById('twelveChart'))
      twelveChart.setOption(this.option)

      function renderEachCity () {
        var options = {
          legend: [],
          xAxis: [],
          yAxis: [],
          grid: [],
          series: []
        }

        options.legend.push({
          data: namearr,
          itemWidth: 5,
          itemHeight: 5,
          textStyle: {
            color: '#ddd',
            fontSize: 10
          },
          top: '95%'
          // bottom:'5%'
        })

        echarts.util.each(rawData, function (dataItem, idx) {
          var geoCoord = geoCoordMap[dataItem.name]
          var coord = twelveChart.convertToPixel('geo', geoCoord)
          idx += ''

          options.xAxis.push({
            id: idx,
            gridId: idx,
            type: 'category',
            name: dataItem.name,
            nameStyle: {
              color: '#ddd',
              fontSize: 12
            },
            nameLocation: 'middle',
            nameGap: 3,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: '#bbb'
              }
            },
            data: [dataItem.name]
          })
          options.yAxis.push({
            id: idx,
            gridId: idx,
            show: false
          })
          options.grid.push({
            id: idx,
            width: 30,
            height: 50,
            left: coord[0] - 15,
            top: coord[1] - 35
          })

          for (var i = 0; i < namearr.length; i++) {
            options.series.push({
              name: namearr[i],
              type: 'bar',
              stack: 'bar' + idx,
              xAxisId: idx,
              yAxisId: idx,
              barWidth: 12,
              itemStyle: {
                normal: {
                  color: colorarr[i]
                }
              },
              data: [dataItem.value[i]]
            })
          }
        })
        twelveChart.setOption(options)
      }

      setTimeout(function () {
        renderEachCity()
      }, 1)
    },
    getThirteenChart () {
      var xData = ['芝罘区', '福山区', '莱山区', '牟平区', '海阳市', '莱阳市', '蓬莱市', '栖霞市', '龙口市', '长岛县', '招远市', '莱州市', '开发区', '高新区', '昆嵛山', '龙海', '机场', '核电']
      var y1Data = [10758, 3975, 2980, 1831, 2122, 3018, 3525, 1729, 2764, 380, 3988, 2333, 3596, 453, 365, 9, 67, 48]
      var y2Data = [28, 4.4, 5.9, 0.9, 0.7, 1.1, 2.1, 0.4, 1.9, 3.8, 1.6, 0.7, 5.7, 6.1]
      this.option = {
        grid: {
          left: '10%',
          right: '5%',
          top: '25%',
          bottom: '19%'
        },
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['监控数量', '监控密度'],
          right: '3%',
          top: '10%',
          itemWidth: 11,
          itemHeight: 11,
          textStyle: {
            color: '#ffffff',
            fontSize: 13
          }
        },
        toolbox: {
          show: false
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            show: true,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 15,
              color: '#d0d0d0',
              margin: 8,
              interval: 0,
              formatter: function (val) {
                return val.split('').join('\n')
              }
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#4e608b', // 左边线的颜色
                width: '1'// 坐标线的宽度
              }
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '',
            axisLine: {
              show: false
            },
            splitNumber: 4,
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: '#4e608b'
              }
            },
            axisLabel: {
              fontSize: 13,
              color: '#d0d0d0',
              margin: 12
            },
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            axisLine: {
              show: false
            },
            splitNumber: 3,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 13,
              color: '#d0d0d0',
              margin: 12
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: '#4e608b'
              }
            },
            name: '',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }

        ],
        series: [
          {
            name: '监控数量',
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#1dacfe'
                }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                  offset: 0,
                  color: '#4889fb' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#15b3ff' // 100% 处的颜色
                }], false)
              }
            },
            barWidth: '40%',
            yAxisIndex: 0,
            data: y1Data
          },
          {
            name: '监控密度',
            yAxisIndex: 1,
            color: '#ffd300',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#ffd300'
                }
              }
            },
            lineStyle: {
              color: '#ffd300'
            },
            type: 'line',
            data: y2Data
          }
        ]
      }
      thirteenChart = echarts.init(document.getElementById('thirteenChart'))
      thirteenChart.setOption(this.option)
    },
    getFourteenChart () {
      var category = ['市区', '万州', '江北', '南岸', '北碚', '綦南', '长寿', '永川', '璧山', '江津', '城口', '大足', '垫江', '丰都', '奉节', '合川', '江津区', '开州', '南川', '彭水', '黔江', '石柱', '铜梁', '潼南', '巫山', '巫溪', '武隆', '秀山', '酉阳', '云阳', '忠县', '川东', '检修']
      var lineData = [18092, 20728, 24045, 28348, 32808,
        36097, 39867, 44715, 48444, 50415,
        56061, 62677, 59521, 67560, 18092, 20728, 24045, 28348, 32808,
        36097, 39867, 44715, 48444, 50415, 36097, 39867, 44715, 48444, 50415,
        50061, 32677, 49521, 32808]
      var barData = [4600, 5000, 5500, 6500, 7500,
        8500, 9900, 12500, 14000, 21500,
        23200, 24450, 25250, 33300, 4600, 5000, 5500, 6500, 7500,
        8500, 9900, 22500, 14000, 21500, 8500, 9900, 12500, 14000, 21500,
        23200, 24450, 25250, 7500]
      var rateData = []
      for (var i = 0; i < 33; i++) {
        var rate = barData[i] / lineData[i]
        rateData[i] = rate.toFixed(2)
      }
      this.option = {
        title: {
          text: '增量设备贯通情况-单位',
          x: 'center',
          y: 0,
          textStyle: {
            color: '#B4B4B4',
            fontSize: 16,
            fontWeight: 'normal'
          }

        },
        backgroundColor: '#191E40',
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(255,255,255,0.1)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC'
            }
          }
        },
        legend: {
          data: ['已贯通', '计划贯通', '贯通率'],
          textStyle: {
            color: '#B4B4B4'
          },
          top: '7%'
        },
        grid: {
          x: '12%',
          width: '82%',
          y: '12%'
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [{

          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },

          axisLabel: {
            formatter: '{value} '
          }
        },
        {

          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#B4B4B4'
            }
          },
          axisLabel: {
            formatter: '{value} '
          }
        }],

        series: [{
          name: '贯通率',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 8,
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#F02FC2'
            }
          },
          data: rateData
        },

        {
          name: '已贯通',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: '#956FD4' },
                  { offset: 1, color: '#3EACE5' }
                ]
              )
            }
          },
          data: barData
        },

        {
          name: '计划贯通',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            normal: {
              barBorderRadius: 5,
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  { offset: 0, color: 'rgba(156,107,211,0.5)' },
                  { offset: 0.2, color: 'rgba(156,107,211,0.3)' },
                  { offset: 1, color: 'rgba(156,107,211,0)' }
                ]
              )
            }
          },
          z: -12,

          data: lineData
        }
        ]
      }
      fourteenChart = echarts.init(document.getElementById('fourteenChart'))
      fourteenChart.setOption(this.option)
    },
    getFifteenChart () {
      var spirit2 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC'
      this.option = {
        'title': {
          'text': '自定义象形柱图--PictorialBarCustomize',
          'left': 'center',
          'y': '10',
          'textStyle': {
            'color': '#fff'
          }
        },
        'backgroundColor': '#101a3c',
        'grid': {
          'left': '20%',
          'top': '10%',
          'bottom': 10
        },
        'tooltip': {
          'trigger': 'item',
          'textStyle': {
            'fontSize': 12
          },
          'formatter': '{b0}:{c0}'
        },
        'xAxis': {
          'max': 300,
          'splitLine': {
            'show': false
          },
          'axisLine': {
            'show': false
          },
          'axisLabel': {
            'show': false
          },
          'axisTick': {
            'show': false
          }
        },
        'yAxis': [
          {
            'type': 'category',
            'inverse': false,
            'data': [
              '山西',
              '四川',
              '西藏',
              '北京',
              '上海',
              '内蒙古',
              '云南',
              '黑龙江',
              '广东',
              '福建'
            ],
            'axisLine': {
              'show': false
            },
            'axisTick': {
              'show': false
            },
            'axisLabel': {
              'margin': -4,
              'textStyle': {
                'color': '#fff',
                'fontSize': 16.25
              }
            }
          }

        ],
        'series': [
          {
            'type': 'pictorialBar',
            'symbol': spirit2,

            'symbolRepeat': 'fixed',
            'symbolMargin': '5%',
            'symbolClip': true,
            'symbolSize': 22.5,
            'symbolPosition': 'start',
            'symbolOffset': [
              20,
              0
            ],
            'symbolBoundingData': 300,
            'data': [
              13,
              42,
              67,
              81,
              86,
              94,
              166,
              220,
              249,
              262
            ],
            'z': 10
          }

        ]
      }
      fifteenChart = echarts.init(document.getElementById('fifteenChart'))
      fifteenChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
