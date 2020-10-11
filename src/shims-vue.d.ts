/*
 * @Description:
 * @Author: Mankeung
 * @Date: 2020-10-10 11:09:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:35:54
 */
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
declare module 'viewport-units-buggyfill'

declare interface Window {
  _axiosPromiseArr: any [],
}