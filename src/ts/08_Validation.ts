/*
 * @Description: 命名空间
 * @Author: Mankeung
 * @Date: 2020-09-20 10:36:50
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-20 16:34:30
 */
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean
  }
}