<template>
    <div>
        <div v-for="(item, index) in videoList" :key="index">
            <video-player class="video-player vjs-custom-skin"
                          ref="videoPlayer"
                          :playsinline="true"
                          :options="item.playerOptions"
            ></video-player>
        </div>
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'videojs-flash'
import 'videojs-contrib-hls'

export default {
  name: 'video-page',
  components: {
    videoPlayer
  },
  data () {
    return {
      videoList: []
    }
  },
  mounted () {
    this.getVideoList()
  },
  beforeDestroy () {
    if (this.$refs.videoPlayer.length) {
      this.$refs.videoPlayer.forEach(function (e) {
        e.dispose()
      })
    }
  },
  methods: {
    getVideoList () {
      let $this = this
      $this.videoList = []
      let list = [
        {
          techOrder: ['html5'], // 设置顺序
          type: 'video/mp4',
          src: 'http://vjs.zencdn.net/v/oceans.mp4'
        },
        {
          techOrder: ['html5'], // 设置顺序
          withCredentials: false,
          type: 'application/x-mpegURL',
          src: 'http://hls.open.ys7.com/openlive/1342c16c7e164288a8c725fb78c15611.m3u8'
        },
        {
          techOrder: ['flash'], // 设置顺序
          type: 'rtmp/hls',
          src: 'rtmp://live.hkstv.hk.lxdns.com/live/hks'
        }
      ]
      list.forEach(function (e) {
        let playerOptions = {
          playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
          autoplay: false, // 如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          sources: [],
          // controls: true,
          poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg', // 你的封面地址
          // width: document.documentElement.clientWidth,
          notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true // 全屏按钮
          }
        }
        playerOptions.techOrder = e.techOrder
        playerOptions.sources.push(e)
        $this.videoList.push({ playerOptions: playerOptions })
      })
    }
  }
}
</script>

<style scoped>

</style>
