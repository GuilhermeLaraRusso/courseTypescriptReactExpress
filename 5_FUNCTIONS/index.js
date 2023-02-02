"use strict";
// 1 - void
function whithoutReturn() {
    console.log('Esta função não tem retorno!');
}
whithoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Guilherme');
console.log(greeting('Russo'));
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(['a', 'b', 'c']));
console.log(firstElement([true, false, true]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: 'Guilherme' }, { age: 34, job: 'Programmer' });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('5', '8'));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ['teste', 'testando']));
// 6 - parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Guilherme'));
console.log(modernGreeting('Guilherme', 'Dr.'));
// 7 - parâmetros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 30));
// 8 - tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - tipo never
// Semelhante ao void porém é utilizado quando a função não retorna nada;
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage('Algum Erro!');
// 10 - Rest Operator
function sumAll(...n) {
    return n.reduce((number, acc) => acc + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
// 11 - Destructuring como parâmetro
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: 'Camisa', price: 49.99 };
console.log(showProductDetails(shirt));
//não funciona
// console.log(showProductDetails({ name: 'teste', age: 40 }));
