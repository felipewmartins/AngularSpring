"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
class Student extends person_1.Person {
    constructor(name) {
        super(name);
    }
    showAge(age) {
        console.log('Studying...');
        super.showAge(25);
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map