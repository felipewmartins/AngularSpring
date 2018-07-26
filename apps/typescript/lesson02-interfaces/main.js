"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./../lesson-01-classes/person");
const person_dao_1 = require("./person-dao");
let personDao = new person_dao_1.PersonDao();
let person = new person_1.Person('Mike');
personDao.insert(person);
//# sourceMappingURL=main.js.map