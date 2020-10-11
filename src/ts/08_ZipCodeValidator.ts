/*
 * @Description: 命名空间
 * @Author: Mankeung
 * @Date: 2020-09-20 10:49:26
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-20 16:35:37
 */
/// <reference path='./08_Validation.ts' />
namespace Validation {
  const numberRegexp = /^[0-9]+$/
  export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return s.length === 5 && numberRegexp.test(s)
    }
  }
}