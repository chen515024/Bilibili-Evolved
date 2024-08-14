<template>
  <div class="preview-timer-wrap">
    <div class="preview-list">
      <div v-for="item in previewList" :key="item.aid" class="preview-list-item">
        <div class="cover-img">
          <img :src="item.coverUrl" />
        </div>
        <div class="base-info">
          <div class="base-info-title">{{ item.title }}</div>
          <div class="base-info-other">
            <span class="base-info-other-up">{{ item?.up?.name }}</span>
            <span class="base-info-other-time">{{ item.previewTime | formatTime }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { PreviewTimeItemInstance, PreviewTimerKeyMap } from './type.d'

export default Vue.extend({
  filters: {
    formatTime(seconds: number) {
      const h = parseInt(String((seconds / 60 / 60) % 24))
      const m = parseInt(String((seconds / 60) % 60))
      const s = parseInt(String(seconds % 60))
      return `${h}:${m}:${s}`
    },
  },
  data() {
    return {
      timer: 0,
      videoPlaying: false,
      previewTime: 0,
      previewList: []
    }
  },
  methods: {
    handleInitPreviewList() {
      const storeData = JSON.parse(localStorage.getItem(PreviewTimerKeyMap.store) || '{}')
      const list: PreviewTimeItemInstance[] = []
      for (const key in storeData) {
        if (Object.prototype.hasOwnProperty.call(storeData, key)) {
          const item = storeData[key]
          list.push(item)
        }
      }

      this.previewList = list.sort((prev, curr) => curr.createDate - prev.createDate)
    }
  },
  mounted() {
    this.handleInitPreviewList()
  }
})
</script>

<style lang="scss">
.preview-timer-wrap {
  .preview-list {
    max-height: 500px;
    padding: 20px 10px;
    overflow-y: scroll;
    box-sizing: border-box;

    &-item {
      display: grid;
      grid-template-columns: 136px 180px;
      column-gap: 10px;
      border-radius: 6px;
      box-sizing: border-box;
      padding: 10px;
      .cover-img {
        width: 136px;
        height: 89px;
        img {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
          width: 136px;
          height: 89px;
        }
      }

      .base-info {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &-other {
          display: flex;
          align-items: center;
          justify-content: space-between;
          &-up {
            text-align: left;
          }

          &-time {
            text-align: right;
          }
        }
      }
    }

    &-item:hover {
      cursor: pointer;
      box-shadow: 2px 2px 5px #332020;
    }
  }
}
</style>
