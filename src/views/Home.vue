<template>
  <div class="home">
    <HelloWorld :msg="msg"/>
    <p>{{new Date() | dateFormat('yyyy-MM-dd')}}</p>
    <hr>
    <p>{{home}} -- home</p>
    <hr>
    <p>{{test}} -- test</p>
    <hr>
    <button @click="clickBtn">改变title</button>
    <button @click="clickTest">test</button>
    <button @click="clickTest02">test02</button>
    <button @click="clickTest03">test03</button>
    <router-link :to="{name: 'about'}">关于</router-link>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { test } from '../mixins'
import { mapMutations, mapActions, mapGetters } from 'vuex'

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
    ...mapGetters([
      'home',
      'test'
    ])
  },
  methods: {
    clickBtn () {
      this.setHome('test')
    },
    clickTest () {
      this.changeTest()
    },
    clickTest02 () {
      this.setTest('test02')
    },
    clickTest03 () {
      (this as any).$store.commit('home/setHome', 'test03')
    },
    ...mapMutations('home', {
      setHome: 'setHome'
    }),
    ...mapMutations('test', {
      setTest: 'setTest'
    }),
    ...mapActions('test', {
      changeTest: 'changeTest'
    })
  },
  mounted () {
    // console.log(this.count, this.$store.state, 111111111)
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 750px;
  background-color: red;
  button {
    background-color: peru;
    padding: 10px 20px;
    margin-right: 20px;
    border-radius: 4px;
    color: white;
  }
}
</style>
