<template>
    <div>
        <!--一定要全局引入-->
        <p>简单使用</p>
        <m-audio :src="src"></m-audio>
        <p>自定义文字</p>
        <m-audio :show-duration="false" text="点这里播放" :src="src"></m-audio>
        <p>设置是否在开始播放后显示时长（默认为true）</p>
        <m-audio :show-duration="false" text="播放3" :src="src"></m-audio>
        <p>设置为行内元素（默认为块级元素）</p>
        <m-audio :block="false" :src="src"></m-audio>
        <m-audio :block="false" :src="src"></m-audio>

        <vue-audio-native
            :url=url
            :showCurrentTime=showCurrentTime
            :showControls=showControls
            :showDownload=showDownload
            :autoplay=autoplay
            :hint=hint
            :waitBuffer=waitBuffer
            @on-change="change"
            @on-timeupdate="timeupdate"
            @on-metadata="metadata">
        </vue-audio-native>
        <button @click="swtichSrc(0)">音频1</button>
        <button @click="swtichSrc(1)">音频2</button>
    </div>
</template>

<script>
export default {
  name: 'audio-page',
  data () {
    return {
      src: 'http://1252014125.vod2.myqcloud.com/46740e39vodcq1252014125/1db79a9a5285890783173288539/ZOaFuTmGs30A.mp3',
      urlArray: ['http://mp3.9ku.com/m4a/183203.m4a', 'http://1252014125.vod2.myqcloud.com/46740e39vodcq1252014125/1db79a9a5285890783173288539/ZOaFuTmGs30A.mp3'], // 演示路径
      url: 'http://mp3.9ku.com/m4a/183203.m4a',
      showCurrentTime: true, // 默认true，是否显示当前播放时间
      showControls: false, // 默认false，true:展示原生音频播放控制条，false：展示模拟播放控制条
      showDownload: true, // 默认true，默认显示下载按钮
      autoplay: true, // 默认false，自动播放有效音频(由于高版本浏览器协议限制，初始化页面时无法自动播放，可以在点击页面后手动触发)
      waitBuffer: true, // 默认true，拖拽到未加载的时间，是否需要等待加载，true:滑块位置不动，等待加载音频资源后播放，false：当滑动位置大于当前缓冲的最大位置，则重置到当前最大缓冲位置
      hint: '音频正在上传中，请稍等…' // 无音频情况下提示文案
    }
  },
  methods: {
    change (event) {
      console.log('当前播放状态：', event)
    },
    timeupdate (event) {
      console.log('当前播放时间：', event)
    },
    metadata (event) {
      console.log(event, '音频长度：', event.target.duration)
    },
    // 切换音频地址
    swtichSrc (index) {
      let t = this
      t.url = t.urlArray[index]
    }
  }
}
</script>

<style scoped>

</style>
