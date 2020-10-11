/*
 * @Description: routers
 * @Author: Mankeung
 * @Date: 2020-09-22 16:40:13
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-22 16:45:37
 */
import homeController from './controller/home-controller';

export default [
  {
    path: '/',
    method: 'get',
    action: homeController.hello
  }
];