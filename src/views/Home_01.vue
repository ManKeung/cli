/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
    <p>{{new Date() | dateFormat('yyyy-MM-dd')}}</p>
    <hr>
    <p>{{count}} -- state</p>
    <hr>
    <p>{{getternum}} -- getternum</p>
    <hr>
    <button @click="add">add</button>
    <button @click="reduce">reduce</button>
    <button @click="add1000">add1000</button>
    <button @click="reduce1000(11)">reduce1000</button>
    <router-link :to="{name: 'about'}">关于</router-link>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { test } from '../mixins'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import * as TYPES from '../store/types'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mixins: [test],
  data () {
    return {
      msg: 'Hello Vue.js'
    }
  },
  computed: {
    ...mapState({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      count: (state: any) => state.count
    }),
    ...mapGetters({
      getternum: 'getcount'
    })
  },
  methods: {
    ...mapMutations({
      addnum: TYPES.SET_COUMT_ADD,
      reducenum: TYPES.SET_COUMT_REDUCE
    }),
    ...mapActions({
      addmore: TYPES.ADD1000,
      reducemore: TYPES.REDUCE1000
    }),
    add () {
      this.addnum()
      // console.log(this.count, '+1')
    },
    reduce () {
      this.reducenum()
      // console.log(this.getternum, '-1')
    },
    add1000 () {
      this.addmore()
      // console.log(this.count, '+1000')
    },
    reduce1000 (v: any) {
      this.reducemore(v)
      // console.log(this.count, '-1000')
    }
  },
  mounted () {
    // console.log(this.count, (this as any).$store.state.count, 111111111)
  }
}
</script>

<style lang="scss" scoped>
.home {
  button {
    background-color: peru;
    padding: 10px 20px;
    margin-right: 20px;
    border-radius: 4px;
    color: white;
  }
}
</style>
