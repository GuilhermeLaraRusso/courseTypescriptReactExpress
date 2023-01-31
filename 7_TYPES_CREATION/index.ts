// 1 - generics

function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData('testando generics'));
console.log(showData(true));
console.log(showData(['teste', 'teste2']));

// 2 - constraint em generics
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: 'Porta', cor: 'Branca' };
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: 'Roupa' };

console.log(showProductName(myObj));
console.log(showProductName(otherProduct));

// Não funciona, pois o objeto passado não possui a propriedade "name"
// console.log(showProductName(thirdObj));

// 3 - generics com interface

interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' };
const myPen: Pen = {
  name: 'Caneta BIC',
  wheels: false,
  engine: false,
  color: 'Azul',
};

console.log(myCar);
console.log(myPen);

// 4 - Type Parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
  hd: '2TB',
  ram: '32GB',
};

console.log(getSomeKey(server, 'ram'));
console.log(getSomeKey(server, 'teste'));

// 5 - keyof Type Operator

type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C) {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: 'Matheus',
  age: 30,
  hasDriveLicense: true,
};

console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'hasDriveLicense'));

// 6 - typeof Type operator
// eslint-disable-next-line
const userName: string = 'Matheus';

const userName2: typeof userName = 'João';

console.log(userName2);

type x = typeof userName;

const userName3: x = 'Maria';

// 7 - Idexed access types

type Truck = { km: number; kg: number; description: string };

type Km = Truck['km'];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'caminhão para pouca carga',
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

// 8 - conditional types

interface A {}

type B = A;

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 5;

// tipo já foi inferido anteriormente, portanto, não funciona mais
// const someVar2: myType = 'teste';

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

// 9 - Template Literals Type

type testA = 'text';

type CustomType = `some ${testA}`;

const testing: CustomType = 'some text';

// não funciona
// const testing2: CustomType = 'some text 2';

type a1 = 'Testando';
type a2 = 'Union';

type a3 = `${a1}` | `${a2}`;
