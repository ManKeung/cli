<style lang="scss">
@import '../../../../scss/var.scss';

.user-info {
  display: flex;
  align-items: center;
  $size: 20px;

  .def {
    color: $txtTopBar!important;
  }

  &-msg {
    .el-icon-bell {
      font-size: 20px;
      cursor: pointer;
      color: $baseColor;
    }
  }

  &-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: $size;
  }

  &-name {
    font-size: 16px;
    padding: 0 $size;
    color: $baseColor;
  }

  &-out {
    padding-right: $size;
    font-size: 20px;
    cursor: pointer;
    color: $baseColor;
  }
}
</style>

<template>
  <div class="user-info">
    <el-badge :value="msgNum" class="user-info-msg">
      <i :class="def ? 'el-icon-bell' : 'el-icon-bell def'" />
    </el-badge>
    <img class="user-info-avatar" :src="avatar" alt="" />
    <p :class="def ? 'user-info-name' : 'user-info-name def'">你好！{{name}}</p>
    <i :class="def ? 'el-icon-switch-button user-info-out' : 'el-icon-switch-button def user-info-out'" @click="logOut" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'userInfo',
  props: {
    def: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'msgNum'
    ])
  },
  methods: {
    logOut () {
      this.$confirm('您确定要退出登录，是否继续操作？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }).catch(() => {
        console.log('no')
      })
    }
  }
}
</script>
