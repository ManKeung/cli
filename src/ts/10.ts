/*
 * @Description: Mixins
 * @Author: Mankeung
 * @Date: 2020-08-28 09:24:56
 * @LastEditors: Mankeung
 * @LastEditTime: 2020-09-20 17:52:20
 */

class Disposable {
  isDisposed: boolean
  dispose() {
    this.isDisposed = true
  }
}

class Activatable {
  isActive: boolean
  activate() {
    this.isActive = true
  }
  deactivate() {
    this.isActive = false
  }
}

class SmartObject implements Disposable, Activatable {
  constructor() {
    setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500)
  }

  interact() {
    this.activate()
  }

  isDisposed: boolean = false
  dispose: () => void
  isActive: boolean = false
  activate: () => void
  deactivate: () => void
}

applyMixins(SmartObject, [Disposable, Activatable])
const smartObj = new SmartObject()
setTimeout(() => smartObj.interact(), 1000)

function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name]
    })
  })
}