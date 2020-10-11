/*
 * @Description: home service
 * @Author: Mankeung
 * @Date: 2020-09-22 16:42:13
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-22 16:49:05
 */
export default class HomeService {
  hello = () => {
    return new Promise(resolve => resolve('hello world!'));
  }
}