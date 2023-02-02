"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('testando generics'));
console.log(showData(true));
console.log(showData(['teste', 'teste2']));
// 2 - constraint em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen = {
    name: 'Caneta BIC',
    wheels: false,
    engine: false,
    color: 'Azul',
};
console.log(myCar);
console.log(myPen);
// 4 - Type Parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
console.log(getSomeKey(server, 'teste'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Matheus',
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'hasDriveLicense'));
// 6 - typeof Type operator
// eslint-disable-next-line
const userName = 'Matheus';
const userName2 = 'João';
console.log(userName2);
const userName3 = 'Maria';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'caminhão para pouca carga',
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000,
};
showKm(newCar.km);
const someVar = 5;
const testing = 'some text';
