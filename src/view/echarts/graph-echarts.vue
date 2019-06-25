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
        </Row>
    </div>
</template>

<script>
import echarts from 'echarts'

let oneChart = null
let twoChart = null
let threeChart = null
export default {
  name: 'graph-echarts',
  mounted () {
    this.getOneChart()
    this.getTwoChart()
    this.getThreeChart()
  },
  methods: {
    getOneChart () {
      this.option = {
        backgroundColor: '#1a4377',

        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              repulsion: 1000,
              edgeLength: 50
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                name: '校园大数据',

                symbolSize: 120,
                draggable: true,
                category: 0,
                itemStyle: {
                  normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 6,
                    shadowBlur: 20,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                }
              },
              {
                name: '舆情大数据',
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                },
                category: 1

              },
              {
                name: '用户分析',
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: '#04f2a7',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                }

              },
              {
                name: '话题分析',
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                }

              },
              {
                name: '评论分析',
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                }

              },
              {
                name: '图书馆分析',
                symbolSize: 100,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                }

              },
              {
                name: '借阅分析',
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: '#b457ff',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#b457ff',
                    color: '#001c43'
                  }
                }

              },
              {
                name: '借阅排行',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'

                  }
                },
                category: 2

              },
              {
                name: '图书收录',
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                },
                category: 2

              },
              {
                name: '图书分析',
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: '#82dffe',
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: '#04f2a7',
                    color: '#001c43'
                  }
                }

              }],
            links: [
              {
                source: '校园大数据',
                target: '舆情大数据'

              },
              {
                source: '校园大数据',
                target: '图书馆分析'
              },
              {
                source: '舆情大数据',
                target: '用户分析'
              },
              {
                source: '舆情大数据',
                target: '话题分析'
              },
              {
                source: '舆情大数据',
                target: '评论分析'
              },
              {
                source: '校园大数据',
                target: '图书馆分析'
              },
              {
                source: '图书馆分析',
                target: '图书分析'
              },
              {
                source: '图书馆分析',
                target: '借阅分析'
              },
              {
                source: '图书馆分析',
                target: '借阅排行',
                value: 'DNA'
              }, {
                source: '图书馆分析',
                target: '图书收录'

              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0
              }
            },
            categories: [
              { name: '0' },
              { name: '1' },
              { name: '2' }
            ]
          }
        ]
      }
      oneChart = echarts.init(document.getElementById('oneChart'))
      oneChart.setOption(this.option)
    },
    getTwoChart () {
      this.option = {
        backgroundColor: '#fff',

        tooltip: {},
        animationDurationUpdate: function (idx) {
          // 越往后的数据延迟越大
          return idx * 100
        },
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 500,
            edgeLength: 10
          },
          roam: true,
          label: {
            normal: {
              show: true
            }
          },
          data: [{
            'name': '考研',
            'value': 10000,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(27, 94, 93)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(27, 94, 93)',
                'color': 'rgb(27, 94, 93)'
              }
            }
          }, {
            'name': '兼职',
            'value': 6181,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(206, 188, 11)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(206, 188, 11)',
                'color': 'rgb(206, 188, 11)'
              }
            }
          }, {
            'name': '食堂',
            'value': 4386,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(165, 190, 198)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(165, 190, 198)',
                'color': 'rgb(165, 190, 198)'
              }
            }
          }, {
            'name': '家教',
            'value': 4055,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(98, 41, 72)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(98, 41, 72)',
                'color': 'rgb(98, 41, 72)'
              }
            }
          }, {
            'name': '大四',
            'value': 2467,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(175, 20, 143)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(175, 20, 143)',
                'color': 'rgb(175, 20, 143)'
              }
            }
          }, {
            'name': '研友',
            'value': 2244,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(77, 231, 55)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(77, 231, 55)',
                'color': 'rgb(77, 231, 55)'
              }
            }
          }, {
            'name': '论文',
            'value': 1898,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(26, 83, 246)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(26, 83, 246)',
                'color': 'rgb(26, 83, 246)'
              }
            }
          }, {
            'name': '专接本',
            'value': 1484,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(155, 118, 127)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(155, 118, 127)',
                'color': 'rgb(155, 118, 127)'
              }
            }
          }, {
            'name': '招聘',
            'value': 1112,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(116, 207, 18)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(116, 207, 18)',
                'color': 'rgb(116, 207, 18)'
              }
            }
          }, {
            'name': '讲座',
            'value': 965,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(98, 224, 224)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(98, 224, 224)',
                'color': 'rgb(98, 224, 224)'
              }
            }
          }, {
            'name': '图书馆',
            'value': 847,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(137, 37, 21)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(137, 37, 21)',
                'color': 'rgb(137, 37, 21)'
              }
            }
          }, {
            'name': '租房',
            'value': 582,
            'symbolSize': 100,
            'draggable': true,
            'itemStyle': {
              'normal': {
                'borderColor': 'rgb(81, 27, 15)',
                'borderWidth': 4,
                'shadowBlur': 100,
                'shadowColor': 'rgb(81, 27, 15)',
                'color': 'rgb(81, 27, 15)'
              }
            }
          }]
        }]
      }
      twoChart = echarts.init(document.getElementById('twoChart'))
      twoChart.setOption(this.option)
    },
    getThreeChart () {
      // 节点可拖动
      // 前后点击两个节点，可以对节点进行连接
      // 点击连线，可以删除连线
      // 动态添加、删除节点 ，还未完成

      // 关系坐标
      var xydata = [
        [0, 1],
        [1, 2],
        [2, 3]
      ]

      // 节点坐标
      var dataArr = [{
        name: 'A',
        value: [15, 50]
      },
      {
        name: 'B',
        value: [-50, 10]
      },
      {
        name: 'C',
        value: [-55, -70]
      },
      {
        name: 'D',
        value: [40, -40]
      }
      ]

      // 设置点的大小
      var symbolSize = 70

      // 当0时候表示输入起点坐标，其他值输入终点坐标
      var position = 0
      // 起点
      var positionSource
      // 钟点
      var positionTarget
      // 设置判断点击线还是点击点
      // 删除数组的索引位置
      var del

      var links = xydata.map(function (item, i) {
        return {
          source: xydata[i][0],
          target: xydata[i][1]
        }
      })

      this.option = {
        title: {
          text: '可拖动流程图'
        },
        grid: {},
        // 定义X轴
        xAxis: {
          min: -100,
          max: 100,
          type: 'value',
          axisLine: {
            onZero: false
          },
          show: false
        },
        yAxis: {
          min: -100,
          max: 100,
          type: 'value',
          axisLine: {
            onZero: false
          },
          show: false
        },
        series: [{
          // 设置id很重要
          id: 'a',
          // 设置为甘特图
          type: 'graph',
          layout: 'none',
          coordinateSystem: 'cartesian2d',
          // 设置球的大小
          symbolSize: symbolSize,

          label: {
            show: true,
            formatter: function (d, i) {
              return dataArr[d.dataIndex].name
            }
          },
          itemStyle: {

            borderColor: '#22faf7',
            borderWidth: 3,
            color: '#123456'
          },
          // 设置连线形式为箭头
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 10],
          // 指定数据数组
          data: echarts.util.map(dataArr, function (item, di) {
            return item.value
          }),
          // 指定连线方式
          edges: links,
          // 指定连线颜色
          lineStyle: {
            normal: {
              color: '#22faf7'
            }
          }
        }]

      }
      threeChart = echarts.init(document.getElementById('threeChart'))

      // 在demo里，必须要加setTimeout ，否则执行 threeChart.convertToPixel 会报错
      setTimeout(function () {
        initGraphic()
        // 窗口大小改事件
        window.addEventListener('resize', updatePosition)
      }, 0)

      // 重新定位图形元素
      function updatePosition () {
        threeChart.setOption({
          graphic: echarts.util.map(dataArr, function (item, dataIndex) {
            return {
              position: threeChart.convertToPixel('grid', item.value)
            }
          })
        })
      }

      // 绘制图形元素
      function initGraphic () {
        threeChart.setOption({
          graphic: echarts.util.map(dataArr, function (item, dataIndex) {
            return {
              // 圆形
              type: 'circle',
              // 将坐标转化为像素
              position: threeChart.convertToPixel('grid', item.value),
              shape: {
                // 拖动点的大小
                r: symbolSize / 2 - 2
              },
              style: {
                fill: '#3FA7DC50',
                borderColor: '#22faf7',
                borderWidth: 1
              },

              // 指定虚拟圈是否可见  false 可见
              invisible: false,
              // 指定圈被拖拽（可以与不可以）
              draggable: true,
              // ondrag: echarts.util.curry(onPointDragging, dataIndex),
              onclick: echarts.util.curry(initLinks, dataIndex),
              onmouseup: echarts.util.curry(onPointDragging, dataIndex),

              // 层级
              z: 100

            }
          })
        })
      }

      // 图形元素拖动后， 修改节点位置
      function onPointDragging (dataIndex, dx, dy) {
        dataArr[dataIndex].value = threeChart.convertFromPixel('grid', this.position)
        // Update data
        threeChart.setOption({
          series: [{
            id: 'a',
            data: dataArr
          }]
        })
      }

      // 绘制添加的连线
      function initLinks (dataIndex) {
        for (var i = 0; i < dataArr.length; i++) {
          if (i === dataIndex) {
            ok = 0
            if (position === 0) {
              positionSource = i
              position = 1
            } else {
              positionTarget = i
              position = 0
              xydata.push([positionSource, positionTarget])
              // 当xydata值改变时linkss方法需要重新跑一变
              var linkss = xydata.map(function (item, i) {
                return {
                  source: xydata[i][0],
                  target: xydata[i][1]
                }
              })
              // 重新载入的东西都写在这里
              threeChart.setOption({
                series: [{
                  edges: linkss,
                  // 指定连线颜色
                  lineStyle: {
                    normal: {
                      color: '#22faf7'
                    }
                  }
                }]
              })
              return true
            }
            break
          }
        }
      }

      // 点击事件 , 删除连线
      threeChart.on('click', function (params) {
        if (params.componentType !== 'series' || params.dataType !== 'edge') {
          return
        }

        for (var i = 0; i < xydata.length; i++) {
          if (params.data.source === xydata[i][0] && params.data.target === xydata[i][1]) {
            del = i
            xydata.splice(del, 1)
            // 当xydata值改变时linkss方法需要重新跑一变
            var linkss = xydata.map(function (item, i) {
              return {
                source: xydata[i][0],
                target: xydata[i][1]
              }
            })
            // 重新载入的东西都写在这里
            myChart.setOption({
              series: [{
                edges: linkss
              }]
            })
            return true
          }
        }
      })
      threeChart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
