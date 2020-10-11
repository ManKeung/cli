<style lang="scss">

</style>

<template>
  <div class="page-i">
    页面布局1
    <!-- <input type="text" v-focus:5.a.b="txt"> -->
  </div>
</template>

<script>
import focus from '../../directive/focus'

export default {
  name: 'pageI',
  directives: {
    focus
  },
  data () {
    return {
      txt: '555'
    }
  }
}
</script>
