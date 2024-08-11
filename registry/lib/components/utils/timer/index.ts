import { defineComponentMetadata } from "@/components/define"
import { videoChange } from "@/core/observer"
import { allVideoUrls } from "@/core/utils/urls"

let timer = 0
let videoPlaying = false
let previewTime = 0

function handleVideoPlay() {
  videoPlaying = true
  if (timer) {
    return
  }


  timer = window.setInterval(() => {
    if (videoPlaying) {
      previewTime += 1
    }
  }, 1000)
}

const entry = () => {
  videoChange((e) => {
    const domKey = '.bpx-player-video-wrap video'
    
    const settings = JSON.parse(localStorage.getItem('bilibili_player_settings'))
    // 视频自动播放功能打开时，手动触发
    if (settings.video_status.autoplay) {
      handleVideoPlay()
    }

    dq(domKey).addEventListener('play', handleVideoPlay)

    dq(domKey).addEventListener('pause', () => {
        videoPlaying = false
    })

    dq(domKey).addEventListener('ended', () => {
      videoPlaying = false
      clearInterval(timer)
      timer = 0
      console.log(`浏览该视频总时长为: ${previewTime}秒`)
    })
  })
}

export const component = defineComponentMetadata({
  name: 'previewTimer',
  author: {
    name: 'chen515024',
    link: 'https://github.com/chen515024'
  },
  displayName: 'B站观看时长',
  entry,
  widget: {
    component: () => import('./Timer.vue').then(m => m.default)
  },
  description: {
    'zh-CN': '统计B站视频访问时长'
  },
  tags: [componentsTags.utils],
  urlInclude: [
    ...allVideoUrls,
  ]
})
