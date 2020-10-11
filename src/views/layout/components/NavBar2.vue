<style lang="scss">
@import '../../../scss/var.scss';

.nav-bar2 {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: $activeTxtTopBar;
}
</style>

<template>
  <div class="nav-bar2">
    <user-info def />
  </div>
</template>

<script>
import styles from '../../../scss/var.scss'
import UserInfo from './UserInfo'

export default {
  name: 'navBar2',
  components: {
    UserInfo
  },
  data () {
    return {
      styles
    }
  }
}
</script>
