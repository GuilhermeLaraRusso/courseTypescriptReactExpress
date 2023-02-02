// 1 - importação de arquivos
import importGreet from './greet.js';
importGreet();
// 2 - import de variável
import { x } from './variable.js';
console.log(x);
// 3 - múltiplas importações
import { a, b, myFunction } from './multiple.js';
console.log(a);
console.log(b);
myFunction();
// 4 - alias
import { someName as name } from './changename.js';
console.log(name);
// 5 - import all
import * as myNumbers from './numbers.js';
console.log(myNumbers);
const nX = myNumbers.n1;
console.log(nX);
myNumbers.showNumber();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new User('João', 23);
console.log(joao);
