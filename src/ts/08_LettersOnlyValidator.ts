/*
 * @Description: 命名空间
 * @Author: Mankeung
 * @Date: 2020-09-20 10:38:19
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-20 16:35:51
 */
/// <reference path='./08_Validation.ts' />
namespace Validation {
  const lettersRegexp = /^[A-Za-z]+$/
  export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return lettersRegexp.test(s)
    }
  }
}