<template>
    <div>
        <aplayer autoplay :music="musicUrl"></aplayer>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  name: 'music-page',
  components: {
    Aplayer
  },
  data () {
    return {
      musicUrl: {
        title: '思慕',
        author: '郁可唯',
        url: 'https://luohaoyu.oss-cn-beijing.aliyuncs.com/urgent/arr-plan/e065da25bea64942b111ee10f064d919.mp3'
      }
    }
  },
  mounted () {

  },
  methods: {}
}
</script>

<style scoped>

</style>
