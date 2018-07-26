"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name) {
        this.name = name;
    }
    showAge(age) {
        console.log(`${this.name} has ${age} years old.`);
    }
    toString() {
        return `Class Person, name ${this.name}`;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map