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
    name() { return `${this.first} ${this.last}` }
}

function readonly(target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

const person = new Person("x","j")
console.log(person.name())
console.log(person.name = 1)
console.log(person.name)