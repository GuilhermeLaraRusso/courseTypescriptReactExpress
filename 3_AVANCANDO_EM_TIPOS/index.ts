import { firstName, lastName } from './../2_FUNDAMENTOS/string';
// 1 - Arrays
const numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

const nomes: string[] = ['Guilherme', 'Russo'];

console.log(nomes[0]);

// 2 - Arrays outra sintaxe
const nums: Array<number> = [1, 2, 3];

nums.push(300);

console.log(nums[3]);

// 3 - Any (evitar ao máximo esse tipo)

const arr1: any = [1, 'teste', true, [], { nome: 'Guilherme' }];

console.log(arr1);

// 4 - parametros tipados

function soma(a: number, b: number) {
  console.log(a + b);
}

soma(5, 10);

// 5 - retornos de função

function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting('Guilherme'));

// 6 - funções anônimas

setTimeout(function () {
  const sallary = 1000;

  // console.log(parseFloat(sallary));
}, 2000);

// 7 - tipos de objeto

function passCoordinates(coord: { x: number; y: number }) {
  console.log('X coordinatas: ' + coord.x);
  console.log('Y coordinatas: ' + coord.y);
}

const objCoord = { x: 329, y: 84.5 };

passCoordinates(objCoord);

// 8 - propriedades opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a);
  console.log('B: ' + b);
  if (c) console.log('C: ' + c);
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - validação de propriedades opcionais

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting('Guilhrme', 'Russo'));
console.log(advancedGreeting('Guilhrme'));

// 10 - Union type

function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance('500');

const arr2: Array<number | string | boolean> = [1, 'teste', false];

console.log(arr2);

// 11 - Avançando em union types

function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    return 'Usuário não aprovado!';
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole('Admin'));

// 12 - Type alias

type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é : ${id}`);
}

showId(1);
showId('200');

// 13 - Interfaces

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x}`);
  console.log(`Y: ${obj.y}`);
  console.log(`Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 30,
};

showCoords(coordObj);

// 14 - interface x type alias
// interfaces podem ser incrementadas com a evolução do código
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: 'Guilherme', age: 34 };

console.log(somePerson);

//type alias não podem ser alterados

type personType = {
  name: string;
};

// código abaixo não funciona
// type personType = {
//   age: number;
// };

const otherPerson: personType = { name: 'Guilherme' };

console.log(otherPerson);

// 15 - literal types

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é : ${direction}`);
}

showDirection('left');

// 16 - Non null assertion operator "!"

// const p = document.getElementById('some-p');

// Eslint não aceita esse tipo de asserção
// console.log(p!.innerText);

// 17 - BigInt

// eslint-disable-next-line
const n: bigint = 100n;

console.log(n);
console.log(typeof n);

// 18 - Symbol - cria uma referência única para um valor, mesmo que outra variável tenha o mesmo valor, ele considera que são diferentes

// eslint-disable-next-line
const symbolA:symbol = Symbol("a");
const symbolB = Symbol('a');

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
