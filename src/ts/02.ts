/* * @Author: ManKeung*@Date: 2020-09-14 16:56:36*@Last Modified by: Mankeung*@Last Modified time: 2020-09-14 16:56:36*//**
 * @desc 基础类型
 */

//  布尔值
const isDone: boolean = false

// 数字
const decLiteral: number = 6
const hexLiteral: number = 0xf00d
const binaryLiteral: number = 0b1010
const octalLiteral: number = 0o744

// 字符串
const names: string = 'bob'

// 数组
const list: number[] = [1, 2, 3]
const list2: Array<number> = [1, 2, 3]

// 元祖 Tuple
const x: [string, number] = ['hello', 10]
console.log(x[0])

// 枚举
enum Color {Red, Green, Blue}
const c: Color = Color.Green
console.log(c) // 默认从0开始为元素编码
enum Color2 {Red = 'wo', Green = 'wi', Blue = 'wp'}
console.log(Color2)

// Any
let notSure: any = 4
notSure = true
notSure = 'string'
notSure = [1, 2, 3]
const list3: any[] = [1, true, 'str']

// void
function warnUser(): void {
  console.log('This is my warning message')
}

const unusable: void = undefined // null

// Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    console.log(1)
  }
}

// Object
declare function create(o: object | null): void

// 类型断言
const somenValue: any = 'this is a string'
const strLength: number = (<string>somenValue).length
console.log(strLength)
const strLength2: number = (somenValue as string).length