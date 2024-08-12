import { defineComponentMetadata } from "@/components/define"
import { VideoInfo } from "@/components/video/video-info"
import { videoChange } from "@/core/observer"
import { getUserInfo } from "@/core/user-info"
import { allVideoUrls } from "@/core/utils/urls"
import { PreviewTimerKeyMap } from "./type.d"

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

// 缓存当前视频播放时长，视频结束或者暂停时缓存
async function handleInitStoreData(aid: string, previewTime: number) {
  let storeData = {}
  if (localStorage.getItem(PreviewTimerKeyMap.store)) {
    storeData = JSON.parse(localStorage.getItem(PreviewTimerKeyMap.store))
  }

  if (storeData[aid]) {
    storeData[aid].previewTime = previewTime
  } else {
    const { mid } = await getUserInfo()
    const videoInfo = new VideoInfo(aid)
    await videoInfo.fetchInfo()

    storeData[aid] = {
      mid,
      aid,
      coverUrl: videoInfo.coverUrl,
      title: videoInfo.title,
      up: videoInfo.up,
      previewTime,
      createDate: Date.now()
    }
  }

  localStorage.setItem(PreviewTimerKeyMap.store, JSON.stringify(storeData))
}

const entry = () => {
  videoChange(async ({ aid, cid }) => {
    const domKey = '.bpx-player-video-wrap video'
    
    const settings = JSON.parse(localStorage.getItem('bilibili_player_settings'))
    // 视频自动播放功能打开时，手动触发
    if (settings.video_status.autoplay) {
      handleVideoPlay()
    }

    dq(domKey).addEventListener('play', handleVideoPlay)

    dq(domKey).addEventListener('pause', () => {
        videoPlaying = false
        handleInitStoreData(aid, previewTime)
    })

    dq(domKey).addEventListener('ended', () => {
      videoPlaying = false
      clearInterval(timer)
      timer = 0
      console.log(`浏览该视频总时长为: ${previewTime}秒`)
      handleInitStoreData(aid, previewTime)
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
