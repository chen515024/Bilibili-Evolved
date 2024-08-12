<template>
  <div class="preview-timer-container">
    <div class="preview-list">
      <div class="preview-list-item" v-for="item in previewList" :key="item.aid">
        <div class='cover-img'>
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
  import { videoChange } from '@/core/observer'
  import { PreviewTimerKeyMap } from './type.d.ts'

  export default Vue.extend({
    data() {
      return {
        timer: 0,
        videoPlaying: false,
        previewTime: 0,
      }
    },
    computed: {
      previewList() {
        const storeData = JSON.parse(localStorage.getItem(PreviewTimerKeyMap.store)) || {}
        const list = []
        for (let key in storeData) {
          const item = storeData[key]
          list.push(item)
        }
        return list
      }
    },
    filters: {
      formatTime(seconds: number) {
        const h = parseInt(seconds / 60 / 60 % 24)
        const m = parseInt(seconds / 60 % 60)
        const s = parseInt(seconds % 60)
        return `${h}小时${m}分钟${s}秒`
      }
    },
  })
</script>

<style lang="scss">
@import 'common';

.preview-timer-container {
  width: 300px;
  height: 500px;
  background: #FFF;
  border-radius: 6px;

  .preview-list {
    padding: 20px 0;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    box-sizing: border-box;

    &-item {
      display: grid;
      grid-template-columns: 50px 1fr;
      column-gap: 20px;
      width: 100%;
      margin-bottom: 20px;
      padding: 10px;
      .cover-img {
        width: 50px;
        height: 50px;
        border-radius: 6px;
        img {
          width: 50px;
          height: 50px;
        }
      }

      .base-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-title {
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        &-other {
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
      box-shadow:2px 2px 5px #332020;
    }
  }
}
</style>