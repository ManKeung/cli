/*
 * @Description: 接口
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-17 18:07:03
 */

// 初探接口
// function printLable(labelledObj:{label: string}) {
//   console.log(labelledObj.label)
// }

// const myObj = { size: 10, label: 'Size 10 Object'}

// printLable(myObj)

interface labelledValue {
  label: string
}

function printLable(labelledObj: labelledValue) {
  console.log(labelledObj.label)
}

const myObj = {size: 10, label: 'Szie 10 Object'}
printLable(myObj)

// 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any; // 任意属性
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  const newSquare = {color: 'white', area: 100}

  if (config.color) {
    newSquare.color = config.color
  }

  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

const mySquare = createSquare({color: 'black'})
// alert(JSON.stringify(mySquare))

// 只读属性
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1:Point = {x: 10, y: 20}
// p1.x = 5 // error
// console.log(p1)

// ReadonlyArray
let a: number[] = [1, 2, 3, 4]
const ro: ReadonlyArray<number> = a
// ro[0] = 12 // error
// ro.push(5) // error
// ro.length = 100 // error
// a = ro // error

a = ro as number[]

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch:SearchFunc = function(source: string, subString: string): boolean {
  const result = source.search(subString)

  return result > -1
}

// 可索引的类型
interface StringArray {
  [index: number]: string
}

const myArray: StringArray = ['Bob', 'Fred']
const myStr: string = myArray[0]
// console.log(myStr)

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
  readonly [index: number]: string; // 索引签名是只读
}
const myArray2: ReadonlyStringArray = ["Alice", "Bob"];
// myArray2[2] = "Mallory"; // error!

// 类类型
// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date):void;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d
//   }

//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   constructor(h: number, m: number) {}
// }

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick():any
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(h: number, m: number) { }
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tock')
  }
}

const digital = createClock(DigitalClock, 12, 17)
const analog = createClock(AnalogClock, 7, 32)

// 继承接口
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

const square = <Square>{}
square.color = 'blue'
square.sideLength = 10

interface PenStroke {
  penWidth: number
}

interface Square2 extends Shape, PenStroke {
  sideLength: number
}

const square2 = <Square2>{}
square2.color = 'blue'
square2.penWidth = 5
square2.sideLength = 10

// 混合类型
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const counter = <Counter> function(start: number) {}
  counter.interval = 123
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  counter.reset = function () {}

  return counter
}

const c = getCounter()
c(10)
c.reset()
c.interval = 5.0

// 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  select() {}
}

class TextBox extends Control {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  select() {}
}