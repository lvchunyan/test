<template>
    <div>
        <div id="echarts" :style="{width: '100%', height: '420px',}"></div>
        <ve-liquidfill :data="chartData"></ve-liquidfill>
    </div>
</template>

<script>
import echarts from 'echarts'
let inboundChart = null
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
    this.echartsMit()
  },
  methods: {
    // 绘制指标图
    echartsMit () {
      let $this = this

      $this.option = {
        series: [{
          type: 'liquidFill',
          data: [0.6]
        }]
      }
      inboundChart = echarts.init(document.getElementById('echarts'))
      inboundChart.setOption($this.option)
      /* window.addEventListener('resize', function () {
                     salesChart.resize();
                 }); */
    }
  }
}
</script>

<style scoped>

</style>
