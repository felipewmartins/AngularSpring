"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./../lesson-01-classes/person");
class PersonDao {
    insert(person) {
        console.log('inserting...', person.toString());
        return true;
    }
    update(person) {
        return true;
    }
    delete(id) {
        return true;
    }
    find(id) {
        return null;
    }
    findAll() {
        return [new person_1.Person('Mike')];
    }
}
exports.PersonDao = PersonDao;
//# sourceMappingURL=person-dao.js.map