/*
 * @Description: 装饰器
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-20 17:42:09
 */

function f() {
  console.log('f(): evaluated')

  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called')
  }
}

function g() {
  console.log('g(): evaluated')

  return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g(): called')
  }
}

class C {
  @f()
  @g()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  methods() {}
}