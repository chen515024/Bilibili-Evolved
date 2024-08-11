<template>
  <div @click="printPreviewTime" class="preview-time">timer test</div>
</template>

<script lang="ts">
  import { videoChange } from '@/core/observer'
  export default Vue.extend({
    data() {
      return {
        timer: 0,
        videoPlaying: false,
        previewTime: 0,
      }
    },
    methods: {
      async handleInit() { 
        const domKey = '.bpx-player-video-wrap video'

        dq(domKey).addEventListener('play', (e) => {
          this.videoPlaying = true
          if (this.timer) {
            return
          }


          this.timer = window.setInterval(() => {
            if (this.videoPlaying) {
              previewTime += 1
            }
          }, 1000)
        })

        dq(domKey).addEventListener('pause', () => {
           this.videoPlaying = false
        })

        dq(domKey).addEventListener('ended', () => {
          this.videoPlaying = false
          clearInterval(this.timer)
          this.timer = 0
          console.log(`浏览该视频总时长为: ${this.previewTime}秒`)
        })
      },
      printPreviewTime() {
        console.log(`当前浏览时长为: ${this.previewTime}秒`)
      }
    },
    mounted() {
      console.log('timer mounted 123')
      // videoChange(this.handleInit)
    },
    created() {
      console.log('timer created')
    }
  })
</script>

<style lang="scss">
@import 'common';

.preview-time {
  position: fixed;
}
</style>