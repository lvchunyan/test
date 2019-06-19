<template>
    <div>
        <Row>
            <Col span="12">
                <div id="oneChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <ve-liquidfill :data="chartData"></ve-liquidfill>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <div id="twoChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <Col span="12">
                <div id="threeChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
        </Row>
        <Row>
            <Col span="12">
                <div id="fourChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>
            <!--<Col span="12">
                <div id="threeChart" :style="{width: '100%', height: '420px',}"></div>
            </Col>-->
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts'

let oneChart = null
let twoChart = null
let threeChart = null
let fourChart = null
export default {
  name: 'echarts-liquidfill',
  data () {
    return {
      chartData: {
        columns: ['city', 'percent'],
        rows: [{
          city: '上海',
          percent: 0.6
        }]
      }
    }
  },
  mounted () {
    this.getOneChart()
    this.getTwoChart()
    this.getThreeChart()
    this.getFourChart()
  },
  methods: {
    // 绘制指标图
    getOneChart () {
      let $this = this
      $this.option = {
        series: [{
          type: 'liquidFill',
          data: [0.6]
        }]
      }
      oneChart = echarts.init(document.getElementById('oneChart'))
      oneChart.setOption($this.option)
    },
    getTwoChart () {
      let $this = this
      let value = 0.12// 百分比
      $this.option = {
        series: [{
          type: 'liquidFill',
          radius: '80%',
          data: [0.12, 0.12, 0.12, 0.12], // 水球中波浪个数
          center: ['25%', '50%'],
          backgroundStyle: {
            borderWidth: 5,
            borderColor: 'rgb(255,0,255,0.9)',
            color: 'rgb(255,0,255,0.01)'
          },
          label: {
            normal: {
              formatter: (value * 100).toFixed(2) + '%',
              textStyle: {
                fontSize: 50
              }
            }
          }
        }, {
          type: 'liquidFill',
          radius: '80%',
          data: [0.5, 0.45, 0.4, 0.3],
          center: ['75%', '50%'],
          label: {
            normal: {
              // textStyle: {
              color: 'red',
              insideColor: 'yellow',
              fontSize: 50
              // }
            }
          }
        }]
      }
      twoChart = echarts.init(document.getElementById('twoChart'))
      twoChart.setOption($this.option)
    },
    getThreeChart () {
      let $this = this
      $this.option = {
        series: [{
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3], // 水球百分比取数组第一个
          radius: '40%',
          shape: 'diamond',
          center: ['25%', '25%']
        }, {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          direction: 'left',
          radius: '40%',
          shape: 'rect',
          center: ['75%', '25%']
        }, {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '40%',
          shape: 'roundRect',
          center: ['25%', '75%'],
          backgroundStyle: {
            borderColor: '#156ACF',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
          },
          outline: {
            show: false // 边框线不显示
          },
          waveAnimation: false // 禁止左右波动
        }, {
          type: 'liquidFill',
          data: [0.6, 0.5, 0.4, 0.3],
          radius: '50%',
          shape: 'pin',
          center: ['75%', '75%'],
          amplitude: 0,
          waveAnimation: false,
          outline: {
            show: false
          },
          backgroundStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
          }

        }]
      }
      threeChart = echarts.init(document.getElementById('threeChart'))
      threeChart.setOption($this.option)
    },
    getFourChart () {
      let $this = this
      $this.option = {
        series: [{
          type: 'liquidFill',
          animation: true,
          waveAnimation: true,
          data: [0.76, 0.70, 0.68],
          color: ['#49d088', '#38b470', '#2aaf66'],
          center: ['25%', '50%'],
          waveLength: '60%',
          amplitude: 8,
          radius: '70%',
          label: {
            normal: {
              formatter: function () {
                return '世界\n\n76%人口'
              },
              textStyle: {
                fontSize: 22,
                color: '#44c078'
              },
              position: ['50%', '30%']
            }
          },
          outline: {
            itemStyle: {
              borderColor: '#49d088',
              borderWidth: 5
            },
            borderDistance: 0
          },
          itemStyle: {
            normal: {
              backgroundColor: '#fff'
            }
          }
        }, {
          animation: true,
          waveAnimation: true,

          type: 'liquidFill',
          data: [0.66, 0.6, 0.5],
          color: ['#eb594b', '#e44d46', '#dc403f'],
          center: ['75%', '50%'],
          radius: '70%',
          amplitude: 8,
          label: {
            normal: {
              formatter: function () {
                return '中国\n\n66%人口'
              },
              textStyle: {
                fontSize: 22,
                color: '#e35140'
              },
              position: ['50%', '30%']
            }
          },
          outline: {
            itemStyle: {
              borderColor: '#e35140',
              borderWidth: 5
            },
            borderDistance: 0
          },
          itemStyle: {
            normal: {
              backgroundColor: '#fff'
            }
          }
        }]
      }
      fourChart = echarts.init(document.getElementById('fourChart'))
      fourChart.setOption($this.option)
    }
  }
}
</script>

<style scoped>

</style>
