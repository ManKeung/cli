<style lang="scss">
@import '../../../../scss/var.scss';

.side-scrollbar-wrapper2 {
  overflow-x: hidden!important;

  a {
    text-decoration: none;
  }

  &-menu {
    border-right: none!important;

    .el-submenu.is-active {

      .el-submenu__title {
        i, span {
          color: $activeTxtTopBar;
        }
      }
    }

    .el-menu-item {
      i {
        color: $txtTopBar;
      }
    }

    .el-menu-item.is-active {
      i, span {
        color: $activeTxtTopBar;
      }
    }

    .el-submenu {

      .el-submenu__title {
        i, span {
          color: $txtTopBar;
        }
      }
    }

    .menu-wrapper.nest-menu {
      .el-submenu {
        .el-submenu__title {
          i, span {
            color: $txtTopBar;
          }
        }
      }

      .el-submenu.is-active {
        .el-submenu__title {
          i, span {
            color: $activeTxtTopBar;
          }
        }
      }
    }
  }
}
</style>

<template>
  <el-scrollbar wrap-class="side-scrollbar-wrapper2">
    <el-menu
      :background-color="styles.baseColor"
      :text-color="styles.txtTopBar"
      :active-text-color="styles.activeTxtTopBar"
      :default-active="activeMenu"
      unique-opened
      class="side-scrollbar-wrapper2-menu"
      mode="vertical"
    >
      <sidebar-item v-for="route in permission_routers" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import styles from '../../../../scss/var.scss'
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'

export default {
  name: 'appSideBar',
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routers'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      const { activeMenu } = meta
      if (activeMenu) {
        return activeMenu
      }
      return path
    }
  },
  data () {
    return {
      styles
    }
  }
}
</script>
