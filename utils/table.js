/*
 * @Description: 获取项目列表
 * @Author: Mankeung
 * @Date: 2020-10-11 15:27:03
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-11 15:37:36
 */
module.exports = (obj, types = ['name', 'description', 'url', 'branch']) => {
  const arr = []

  for (const o in obj) {
    const ty = {}

    for (const t of types) {
      t === 'name' ? ty[t] = o : ty[t] = obj[o][t]
    }
    arr.push(ty)
  }

  return arr
}