<style lang="scss">
@import '../../../scss/var.scss';

.nav-bar {
  height: 100%;
  display: flex;
  align-items: center;
  background-color: $baseColor;

  $size: 20px;

  &-logo {
    width: $appAside;
  }

  .el-menu--horizontal > .el-menu-item.is-active, .el-menu--horizontal > .el-menu-item {
    border: none;
  }

  &-tab {
    margin-left: $size;

    .el-tabs__header.is-top {
      margin: 0;
    }

    .el-tabs__active-bar.is-top {
      display: none;
    }

    .el-tabs__nav-wrap::after {
      display: none;
    }

    .el-tabs__item {
      padding: 0;
      padding-left: $size;
    }

    .el-tabs__item.is-top {
      color: $txtTopBar;
    }

    .el-tabs__item:hover, .el-tabs__item.is-top.is-active {
      color: $activeTxtTopBar;
    }
  }

  &-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>

<template>
  <div class="nav-bar">
    <div class="nav-bar-logo">logo</div>
    <el-tabs class="nav-bar-tab" :value="systemType" @tab-click="tabClick">
      <el-tab-pane v-for="item in topNav" :key="item.name" :label="item.label" :name="item.name" />
    </el-tabs>
    <div class="nav-bar-right">
      <user-info />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import styles from '../../../scss/var.scss'
import UserInfo from './UserInfo'

export default {
  name: 'navBar',
  components: {
    UserInfo
  },
  computed: {
    ...mapGetters([
      'topNav',
      'systemType'
    ])
  },
  data () {
    return {
      styles
    }
  },
  created () {
    const route = this.$route
    const { type = '' } = route.meta
    this.$store.dispatch('SetType', type)
  },
  methods: {
    tabClick (tab) {
      if (tab.name === this.systemType) {
        return
      }
      this.$store.dispatch('SetType', tab.name)
      this.$router.push(`/${tab.name}`)
    }
  }
}
</script>
