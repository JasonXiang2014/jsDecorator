import xxx from "./test2"

// @xxx
// function a(){

// }

@transform
class IronMan {
    // ...
}

function transform(target) {
    target.weapon = "laser"
}

console.log(IronMan.weapon) // laser

class Person {
    constructor(first, last) {
        this.first = first
        this.last = last
    }

    @readonly
    @logDecorator('开始的log', '结束的log')
    name() { return `${this.first} ${this.last}` }
}

function readonly(target, name, descriptor) {
    console.log('readonly toggled')
    descriptor.writable = false
    return descriptor
}
function logDecorator(startLog, endLog){
    return function log(target, name, descriptor) {
        let method = descriptor.value
        descriptor.value = function(args) {
            console.log("log监听开始:", startLog)
            let res = method.apply(this, args)
            console.log("log监听结束:", endLog)
            return res
        }
        return descriptor
    }
}

const person = new Person("x", "j")
// person.name()
console.log(person.name())
// console.log(person.name = 1)
// console.log(person.name)