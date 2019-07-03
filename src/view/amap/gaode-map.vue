<template>
    <div id="allmap"></div>
</template>

<script>
export default {
  name: 'gaode-map',
  data () {
    return {
      map: {}
    }
  },
  mounted () {
    this.map = new AMap.Map('allmap', {
      zoom: 11, // 级别
      center: [116.397428, 39.90923], // 中心点坐标
      viewMode: '3D', // 使用3D视图
      mapStyle: 'amap://styles/a6f697181b0f86d7a1b05867d72af92d' // 设置地图的显示样式
    })
  }
}
</script>

<style scoped>
    #allmap {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
</style>
