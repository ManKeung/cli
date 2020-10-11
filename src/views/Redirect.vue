<style lang="scss">

</style>

<template>
  <div class="redirect"></div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'redirect',
  computed: {
    ...mapGetters([
      'role'
    ])
  },
  created () {
    if (this.role === 'admin') {
      this.$router.replace({ path: '/account' })
    } else {
      this.$router.replace({ path: '/home2' })
    }
  }
}
</script>
