<style lang="scss">
.app-main {
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  background-color: yellow;
  position: relative;
  overflow: hidden;

  .app-container {
    height: 100%;

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
}

// .dialog-title, .dialog-footer{
//   text-align: center;
// }
// .app-inner{
//   /* min-height: calc(100vh - 100px); */
//   background-color: #fff;
//   padding: 15px;
// }
</style>

<template>
  <section class="app-main">
    <div class="app-container">
      <el-scrollbar wrap-class="side-scrollbar-wrapper">
        <transition name="fade-transform" mode="out-in">
          <div>
            <breadcrumb />
            <router-view/>
          </div>
        </transition>
      </el-scrollbar>
    </div>
  </section>
</template>

<script>
import Breadcrumb from './Breadcrumb'
export default {
  name: 'appMain',
  components: { Breadcrumb }
}
</script>
