import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { MODE as mode } from '../config'

Vue.use(Router)

export default new Router({
  mode,
  base: process.env.BASE_URL,
  routes
})
