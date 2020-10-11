require('./scss/index.scss')

function greeter(person: any):string {
  return `hello, ${person}`
}

const user = 'Jane User'

document.body.innerHTML = greeter(user)