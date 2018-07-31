import { Person } from './../lesson-01-classes/person';
import { DaoInterface } from './dao.interface';
import { Dao} from './dao';

let dao: DaoInterface<Person> = new Dao<Person>();
let person: Person = new Person('Mike');

dao.insert(person);