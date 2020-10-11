/*
 * @Description: 时间格式化
 * @Author: Mankeung
 * @Date: 2020-09-26 16:21:21
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-10-10 14:42:40
 */
export default (time: (string | Date | number), fmt: string = 'yyyy-MM-dd hh:mm:ss'): string => {
  const date = new Date(time)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }

  const dt:any = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for (let key in dt) {
    if (new RegExp(`(${key})`).test(fmt)) {
      let str = dt[key] + ''
      fmt = fmt.replace(RegExp.$1,
        (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length)
      )
    }
  }

  return fmt
}