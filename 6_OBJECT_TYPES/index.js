"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log('O produto está disponível');
    }
}
const shirt = {
    name: 'Camisa',
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: 'user@email.com', role: 'Admin' };
const u2 = { email: 'user2@email.com' };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: 'VW',
    wheels: 4,
};
console.log(fusca);
const coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const guilherme = {
    name: 'Guilherme',
    age: 34,
};
const goku = {
    name: 'Goky',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama'],
};
console.log(guilherme);
console.log(goku);
const arnold = {
    name: 'Arnold',
    type: 'Shotgun',
    caliber: 12,
};
console.log(arnold);
// 7 - Readonly array
let myArray = ['Maçã', 'Laranja', 'Banana'];
// Não é possível adicional um item ao array
// myArray[3] = 'Mamão';
myArray.forEach((item) => {
    console.log('Fruta: ' + item);
});
// com o map, é possível modificar o array
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ['Matheus', 30];
console.log(anotherUser);
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // não é possível alterar o valor dentro da tupla readonly
    // numbers[0] = 10;
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
