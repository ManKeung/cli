<style lang="scss">

</style>

<template>
  <div class="my-breadcrumb" v-show="!hidden">
    <el-breadcrumb class="breadcrumb-container" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'myBreadcrumb',
  data () {
    return {
      levelList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  computed: {
    hidden () {
      return this.levelList[this.levelList.length - 1].meta.hidden
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      // $route.matched一个数组 包含当前路由的所有嵌套路径片段的路由记录
      const matched = this.$route.matched.filter(item => item.name)
      this.levelList = this.arr(matched[0], [])
    },
    arr (item, arr = []) {
      if (item.parent) {
        return this.arr(item.parent, [{
          meta: item.meta,
          path: item.path
        }, ...arr])
      }

      return [{
        meta: item.meta,
        path: item.path
      }, ...arr]
    }
  }
}
</script>
