<style lang="scss">
@import '../../scss/var.scss';

.app-layout {
  min-height: 100%;

  .app-layout-header {
    padding: 0;
    background-color: $baseColor;
  }

  .app-layout-aside, .app-layout-main-wrapper {
    .el-scrollbar {
      height: 100%;

      .side-scrollbar-wrapper {
        overflow-x: hidden !important;
        height: 100%;

        .el-scrollbar__view {
          height: 100%;
        }
      }
    }
  }

  .app-layout-aside {
    background-color: white;
  }

  .app-layout-main-wrapper {
    padding: 0;
  }
}
</style>

<template>
  <el-container class="app-layout">
    <!-- <a href="" class="app-layout-header">5555</a> -->
    <el-header :height="styles.appHeader" class="app-layout-header">
      <nav-bar />
    </el-header>
    <el-container>
      <el-aside :width="styles.appAside" class="app-layout-aside">
        <side-bar />
      </el-aside>
      <el-main class="app-layout-main-wrapper">
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { NavBar, AppMain, SideBar } from './components'
import styles from '../../scss/var.scss'

export default {
  name: 'appLayoutDefault',
  data () {
    return {
      styles
    }
  },
  components: {
    NavBar,
    AppMain,
    SideBar
  }
}
</script>
