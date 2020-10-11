/*
 * @Description: 命名空间
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-20 16:51:06
 */

// interface StringValidator {
//   isAcceptable(s: string): boolean
// }

// const lettersRegexp = /^[A-Za-z]+$/
// const numberRegexp = /^[0-9]+$/

// class LettersOnlyValidator implements StringValidator {
//   isAcceptable(s: string) {
//     return lettersRegexp.test(s)
//   }
// }

// class ZipCodeValidator implements StringValidator {
//   isAcceptable(s: string) {
//     return s.length === 5 && numberRegexp.test(s)
//   }
// }

// const strings = ['hello', '98052', '101']

// const validators: { [s: string]: StringValidator } = {}
// validators['ZIP code'] = new ZipCodeValidator()
// validators['Letters only'] = new LettersOnlyValidator()

// for (const s of strings) {
//   for (const name in validators) {
//     const isMatch = validators[name].isAcceptable(s)
//     console.log(`'${s}' ${isMatch ? "matches" : "does not match"} '${name}'.`)
//   }
// }

// 命名空间
// namespace Validation {
//   export interface StringValidator {
//     isAcceptable(s: string): boolean
//   }

//   const lettersRegexp = /^[A-Za-z]+$/
//   const numberRegexp = /^[0-9]+$/

//   export class LettersOnlyValidator implements StringValidator {
//     isAcceptable(s: string): boolean {
//       return lettersRegexp.test(s)
//     }
//   }

//   export class ZipCodeValidator implements StringValidator {
//     isAcceptable(s: string): boolean {
//       return s.length === 5 && numberRegexp.test(s)
//     }
//   }
// }

// const strings = ['hello', '98052', '101']
// const validators: { [s: string]: Validation.StringValidator } = {}
// validators['ZIP code'] = new Validation.ZipCodeValidator()
// validators['Letters only'] = new Validation.LettersOnlyValidator()

// for (const s of strings) {
//   for (const name in validators) {
//     console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`)
//   }
// }

/// <reference path='./08_Validation.ts' />
/// <reference path='./08_LettersOnlyValidator.ts' />
/// <reference path='./08_ZipCodeValidator.ts' />

// const strings = ['hello', '98052', '101']

// const validators: { [s: string]: Validation.StringValidator } = {}
// validators['ZIP code'] = new Validation.ZipCodeValidator()
// validators['Letters only'] = new Validation.LettersOnlyValidator()

// for (const s of strings) {
//   for (const name in validators) {
//     console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`)
//   }
// }

// 别名
namespace Shapes {
  export namespace Polygons {
    export class Triangle { }
    export class Square { }
  }
}

import polygons = Shapes.Polygons
const sq = new polygons.Square()

// 外部命名空间
declare namespace D3 {
  export interface Selectors {
    select: {
      (selector: string): Selection
      (element: EventTarget): Selection
    }
  }

  export interface Event {
    x: number
    y: number
  }

  export interface Base extends Selectors {
    event: Event
  }
}

declare const d3: D3.Base