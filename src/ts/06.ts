/*
 * @Description: 泛型
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-19 19:48:13
 */

// function identity<T>(arg: T): T {
//   return arg
// }

// console.log(typeof identity(1))
// console.log(typeof identity(false))
// console.log(typeof identity('1'))

// function identity<T>(arg: T): T {
//   return arg
// }

// const myIdentity: <T>(arg: T) => T = identity

// function identity<T>(arg: T): T {
//   return arg
// }

// const myIdentity: <U>(arg: U) => U = identity

interface GenericIdentityFn {
  <T>(arg: T):T
}

function identity<T>(arg: T): T {
  return arg
}

const myIdentity: GenericIdentityFn = identity

// 泛型类
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

const myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function (x, y) { return x + y }

const stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ""
stringNumeric.add = function (x, y) { return x + y }

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"))

// 泛型约束
interface Lengthwise {
  length: number
}

function loggingIdebtity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}

// loggingIdebtity(1) // error
loggingIdebtity('1')

// 在泛型约束中使用类型参数
// function getProperty(obj: T, key: K) {
//   return obj[key]
// }

// const x = { a: 1, b: 2 }
// getProperty(x, 'a')
// getProperty(x, 'm')

// 在泛型里使用类类型
function create<T>(c: { new(): T }): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean;
}

class ZooKeeper {
  nametag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag
createInstance(Bee).keeper.hasMask