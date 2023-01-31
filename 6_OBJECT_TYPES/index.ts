// 1 - tipo de objeto para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é R$${product.price}`,
  );
  if (product.isAvailable) {
    console.log('O produto está disponível');
  }
}

const shirt: Product = {
  name: 'Camisa',
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false });

// 2 - propriedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`);
  }
}

const u1: User = { email: 'user@email.com', role: 'Admin' };
const u2: User = { email: 'user2@email.com' };

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly

interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4,
};

console.log(fusca);

// Não é possível alterar a propriedade readonly do objeto
// fusca.wheels = 5;

// 4 - Index signature

interface CoordObject {
  [index: string]: number;
}

const coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// 5 - Extending interfaces

interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const guilherme: Human = {
  name: 'Guilherme',
  age: 34,
};

const goku: SuperHuman = {
  name: 'Goky',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama'],
};

console.log(guilherme);
console.log(goku);

// 6 - Intersection Types

interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12,
};

console.log(arnold);

// 7 - Readonly array

let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana'];

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

// 8 - Tuples
// é um tipo de array, porém definimos a quantidade e o tipo de elementos

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ['Matheus', 30];

console.log(anotherUser);

// 9 - Tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
  // não é possível alterar o valor dentro da tupla readonly
  // numbers[0] = 10;

  console.log(numbers[0]);
  console.log(numbers[1]);
}

showNumbers([1, 2]);
