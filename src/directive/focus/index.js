import Focus from './focus'

const install = function (Vue) {
  Vue.directive('Focus', Focus)
}

if (window.Vue) {
  window.focus = Focus
  // eslint-disable-next-line no-undef
  Vue.use(install)
}

Focus.install = install
export default Focus
