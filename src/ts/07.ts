/*
 * @Description: 枚举
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-19 20:22:08
 */

// 数字枚举
// enum Direction {
//   Up = 1, // 不设置 默认从0开始
//   Down,
//   Left,
//   Right
// }

// console.log(Direction[1])
// console.log(Direction.Up)

// 字符串枚举
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

console.log(Direction)
console.log(Direction.Up)

// 异构枚举
enum BooleanLikeHeteroogeneousEnum {
  No = 0,
  Yes = 'YES'
}

// const 枚举
// const enum Enum {
//   A = 1,
//   B = A * 2
// }

// 外部枚举
declare enum Enum {
  A = 1,
  B,
  C = 2
}

console.log(Enum)