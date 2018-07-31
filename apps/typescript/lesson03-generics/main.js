"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./../lesson-01-classes/person");
const dao_1 = require("./dao");
let dao = new dao_1.Dao();
let person = new person_1.Person('Mike');
dao.insert(person);
//# sourceMappingURL=main.js.map