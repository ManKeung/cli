export default {
  bind (el, binding, vnode, oldVnode) { // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
    console.log(el)
    console.log(binding)
    console.log(vnode)
    console.log(oldVnode)
  },
  inserted (el) {
    el.focus()
    el.style.backgroundColor = 'red'
  }
}
