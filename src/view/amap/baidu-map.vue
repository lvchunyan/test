<template>
    <div id="allmap"></div>
</template>

<script>

export default {
  name: 'baidu-map',
  data () {
    return {
      map: {},
      warningList: [], // 报警信息列表
      websock: null// 长连接实体
    }
  },
  mounted () {
    let $this = this
    $this.map = new BMap.Map('allmap')
    $this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
    $this.map.setMapStyle({ style: 'midnight' })
  },
  methods: {}
}
</script>

<style scoped>
    #allmap {
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
</style>
