/*
 * @Description: 类
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-19 10:51:57
 */


// class Greeter {
//   greeting: string

//   constructor(message: string) {
//     this.greeting = message
//   }

//   greet() {
//     return `Hello, ${this.greeting}`
//   }
// }

// const greeter = new Greeter('world')

// console.log(greeter.greet())

// 继承
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}m.`)
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log('Woof! Woof!')
//   }
// }

// const dog = new Dog()
// dog.bark()
// dog.move(10)
// dog.bark()

// class Animal {
//   name: string

//   constructor(theName: string) {this.name = theName}

//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`)
//   }
// }

// class Snake extends Animal {
//   constructor(name: string) {super(name)}

//   move(distanceInMeters = 5) {
//     console.log('Slithering...')
//     super.move(distanceInMeters)
//   }
// }

// class Horse extends Animal {
//   constructor(name: string) {super(name)}

//   move(distanceInMeters = 45) {
//     console.log('Galloping...')
//     super.move(distanceInMeters)
//   }
// }

// const sam = new Snake('Sammy the Python')
// const tom: Animal = new Horse('Tommy the Palomino')

// sam.move()
// tom.move()

// public 公共
// class Animal {
//   public name: string
//   public constructor(theName: string) { this.name = theName }
//   public move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}m.`)
//   }
// }

// private 私有
// class Animal {
//   private name: string
//   public age: number
//   constructor(theName: string, theAge: number) {
//     this.name = theName
//     this.age = theAge
//   }
// }

// const a = new Animal('cat', 10)
// console.log(a.age)
// console.log(a.name) // error

// protected 受保护的
// class Person {
//   protected name: string
//   constructor(name: string) { this.name = name }
// }

// class Employee extends Person {
//   private department: string

//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}`
//   }
// }

// const howard: Employee = new Employee('Howard', 'Sales')
// console.log(howard.getElevatorPitch())
// howard.name // error

// class Person {
//   protected name: string
//   protected constructor(theName: string) { this.name = theName }
// }

// // Employee 能够继承 Person
// class Employee extends Person {
//   private department: string

//   constructor(name: string, department: string) {
//     super(name)
//     this.department = department
//   }

//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}.`
//   }
// }

// const howard = new Employee("Howard", "Sales")
// const john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.

// readonly 只读
// class Octopus {
//   readonly name: string
//   readonly numberOfLegs: number = 8

//   constructor(theName: string) {
//     this.name = theName
//   }
// }

// const dad = new Octopus('Man with the 8 strong legs')
// dad.name = 'Man with the 3-piece suit' // error name 只读

// 参数属性
// class Octopus {
//   readonly numberOfLegs: number = 8
//   constructor(readonly name: string) {
//   }
// }

// 存取器
// class Employee {
//   fullName: string
// }

// const employee = new Employee()
// employee.fullName = 'Bob Smith'

// if (employee.fullName) console.log(employee.fullName)

// let passcode = '123456'

// class Employee {
//   private _fullName: string

//   get fullName(): string {
//     return this._fullName
//   }

//   set fullName(newName: string) {
//     if (passcode && passcode === '123456') {
//       this._fullName = newName
//     } else {
//       console.log('Error: Unauthorized update of employee')
//     }
//   }
// }

// const employee = new Employee()
// employee.fullName = 'Bod Smith'
// if (employee.fullName) console.log(employee.fullName)
// passcode = '0'
// employee.fullName = '0'

// 静态属性
// class Grid {
//   static origin = { x: 0, y: 0 };
//   calculateDistanceFromOrigin(point: { x: number; y: number; }) {
//     const xDist = (point.x - Grid.origin.x)
//     const yDist = (point.y - Grid.origin.y)
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
//   }
//   constructor(public scale: number) { }
// }

// const g = new Grid(1.0)
// const g2 = new Grid(5.0)

// console.log(g.calculateDistanceFromOrigin({ x: 10, y: 10 }))
// console.log(g2.calculateDistanceFromOrigin({ x: 10, y: 10 }))

// 抽象类
// abstract class Animal {
//   abstract makeSounc(): void

//   move(): void {
//     console.log('roaming the earch...')
//   }
// }

// class Dog extends Animal {
//   makeSounc(): void {
//     console.log(111)
//   }
// }

// const d = new Dog()
// d.makeSounc()
// d.move()