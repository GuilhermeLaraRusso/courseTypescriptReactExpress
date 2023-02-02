"use strict";
// 1 - Arrays
const numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
const nomes = ['Guilherme', 'Russo'];
console.log(nomes[0]);
// 2 - Arrays outra sintaxe
const nums = [1, 2, 3];
nums.push(300);
console.log(nums[3]);
// 3 - Any (evitar ao máximo esse tipo)
const arr1 = [1, 'teste', true, [], { nome: 'Guilherme' }];
console.log(arr1);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(5, 10);
// 5 - retornos de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting('Guilherme'));
// 6 - funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary));
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log('X coordinatas: ' + coord.x);
    console.log('Y coordinatas: ' + coord.y);
}
const objCoord = { x: 329, y: 84.5 };
passCoordinates(objCoord);
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c)
        console.log('C: ' + c);
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validação de propriedades opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting('Guilhrme', 'Russo'));
console.log(advancedGreeting('Guilhrme'));
// 10 - Union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance('500');
const arr2 = [1, 'teste', false];
console.log(arr2);
// 11 - Avançando em union types
function showUserRole(role) {
    if (typeof role === 'boolean') {
        return 'Usuário não aprovado!';
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole('Admin'));
function showId(id) {
    console.log(`O ID é : ${id}`);
}
showId(1);
showId('200');
function showCoords(obj) {
    console.log(`X: ${obj.x}`);
    console.log(`Y: ${obj.y}`);
    console.log(`Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 30,
};
showCoords(coordObj);
const somePerson = { name: 'Guilherme', age: 34 };
console.log(somePerson);
// código abaixo não funciona
// type personType = {
//   age: number;
// };
const otherPerson = { name: 'Guilherme' };
console.log(otherPerson);
// 15 - literal types
function showDirection(direction) {
    console.log(`A direção é : ${direction}`);
}
showDirection('left');
// 16 - Non null assertion operator "!"
// const p = document.getElementById('some-p');
// Eslint não aceita esse tipo de asserção
// console.log(p!.innerText);
// 17 - BigInt
// eslint-disable-next-line
const n = 100n;
console.log(n);
console.log(typeof n);
// 18 - Symbol - cria uma referência única para um valor, mesmo que outra variável tenha o mesmo valor, ele considera que são diferentes
// eslint-disable-next-line
const symbolA = Symbol("a");
const symbolB = Symbol('a');
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
