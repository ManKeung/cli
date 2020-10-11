<style lang="scss">
@import '../../scss/var.scss';

.app-layout2 {
  min-height: 100%;

  .app-layout2-header {
    padding: 0;
  }

  .app-layout2-aside, .app-layout2-main-wrapper {
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

  .app-layout2-aside {
    background-color: $baseColor;
  }

  .app-layout2-main-wrapper {
    padding: 0;
  }
}
</style>

<template>
  <el-container class="app-layout2">
    <el-aside :width="styles.appAside" class="app-layout2-aside">
      <side-bar />
    </el-aside>
    <el-container>
      <el-header :height="styles.appHeader" class="app-layout2-header">
        <nav-bar />
      </el-header>
      <el-main class="app-layout2-main-wrapper">
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { NavBar2 as NavBar, AppMain, SideBar2 as SideBar } from './components'
import styles from '../../scss/var.scss'

export default {
  name: 'appLayoutDefault2',
  data () {
    return {
      styles
    }
  },
  components: {
    NavBar,
    AppMain,
    SideBar
  },
  mounted () {
    console.log(this.styles)
  }
}
</script>
