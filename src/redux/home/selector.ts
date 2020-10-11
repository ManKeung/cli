/*
 * @Description: 
 * @Author: Mankeung
 * @Date: 2020-09-30 14:06:09
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-30 14:15:04
 */
export const getHome = (state: { getIn: (arg0: string[]) => any; }) => state.getIn(['home', 'name'])