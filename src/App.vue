<!--
 * @Description:
 * @Author: Mankeung
 * @Date: 2020-10-10 11:09:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:59:21
-->
<script lang="ts">
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route (to: { meta: { index: number } }, from: { meta: { index: number } }) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.transitionName = 'slide-left'
      } else if (to.meta.index < from.meta.index) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this.transitionName = 'slide-right'
      }
      // console.log(to.meta.index, from.meta.index)
    }
  }
}
</script>

<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
