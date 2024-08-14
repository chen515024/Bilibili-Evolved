<template>
  <div class="preview-time-container">
    <div class="tab-list">
      <div v-for="tab in componentList" :key="tab.component" :class="`tab-list-item ${tab.component === currentComponent ? 'tab-list-item--focus' : ''}`" @click="() => changeComponent(tab.component)">{{ tab.label }}</div>
    </div>
    <component :is="currentComponent" />
  </div>
</template>

<script lang="ts">
  import List from './list.vue'
  import Setting from './setting.vue'

  export default Vue.extend({
    components: { List, Setting },
    data() {
      return {
        componentList: [
          { label: '播放记录', component: 'List' },
          { label: '设置', component: 'Setting' },
        ],
        currentComponent: 'List',
      }
    },
    methods: {
      changeComponent(component) {
        if (this.currentComponent !== component) {
          this.currentComponent = component
        }
      }
    },
    mounted() {
      console.log('test preview timer')
    }
  })
</script>

<style lang="scss">
@import 'common';
.preview-time-container {
  display: flex;
  flex-direction: column;
  width: 381px;
  .tab-list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;

    &-item {
      text-align: center;
      padding: 10px 0;
      cursor: pointer;

      &--focus {
        color: #F00;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 3px;
          bottom: 0;
          left: 50%;
          transform: translate(-50%);
          background: #F00;
        }
      }
    }

    &-item:hover {
      color: #F00;
      opacity: 0.85;
    }
  }
}
</style>