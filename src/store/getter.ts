/*
 * @Description: getters
 * @Author: Mankeung
 * @Date: 2020-10-10 13:59:14
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 13:59:32
 */
const getters = {
  getcount: (state: { count: any }, getters: any) => {
    console.log(getters)
    return state.count
  }
}

export default getters
