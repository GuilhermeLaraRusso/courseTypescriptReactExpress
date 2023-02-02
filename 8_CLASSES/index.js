"use strict";
// 1 - campos em classe
class User {
}
const matheus = new User();
matheus.name = 'Matheus';
matheus.age = 30;
console.log(matheus);
// 2 - constructor (é uma função que nos dá a possibilidade de iniciar um objeto com valores nos seus campos)
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser('João', 22);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car('Fusca');
console.log(fusca);
fusca.name = 'Fusca Turbo';
console.log(fusca);
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hey Stranger! My name is ${this.name}`);
    }
}
const jimmy = new Dwarf('Jimmy');
jimmy.greeting();
// 6 - this (se refere da entidade a qual foi criada)
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck('Volvo', 400);
volvo.showDetails();
// 7 - Getters (método para ler propriedades)
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    // O getter precisa retornar algum valor
    get fullName() {
        return this.name + ' ' + this.surname;
    }
}
const matheusBattisti = new Person('Matheus', 'Battisti');
// getter é chamado igual um parâmetro, e não igual um método
console.log(matheusBattisti.fullName);
// 8 - Setters (método para atribuir valores)
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log('X inserido com sucesso');
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log('Y inserido com sucesso');
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
// Setters também são utilizados igual Propriedades
myCoords.fillX = 2;
myCoords.fillY = 0;
myCoords.fillY = 5;
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new blogPost('Hello World');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é ${this.title}`;
    }
}
const myTestingPost = new TestingInterface('HELOOOO');
console.log(myTestingPost.itemTitle());
// 10 - override (substituir um método da classe pai por um método da classe filha)
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('testando outra coisa');
    }
}
const myObject = new Nova();
myObject.someMethod();
//  Visibilidade (public, protected, private)
// public: visibilidade default, pode ser acessado em qualquer lugar;
// protected: acessível apenas a subclasses da classe do método, para acessar uma propriedade precisamos de um método;
// private: apenas a classe que declarou o método pode utilizar;
// 11 - Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
dInstance.x = 30;
console.log(dInstance.x);
// 12 - protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Este método é protegido');
    }
}
const eInstance = new E();
// não funciona, pois o método é protegido, portanto só pode ser acessado dentro da classe ou em suas subclasses
// eInstance.protectedMethod();
class F extends E {
    showX() {
        console.log('X: ' + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - Private (só podem ser acessado na classe que o definiu e precisa de métodos para ser acessado)
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Método privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// não funciona
// console.log(pObj.name);
console.log(pObj.showName());
// também não funciona
// pObj.privateMethod();
pObj.showPrivateMethod();
class TestingPrivate extends PrivateClass {
}
// 14 - Static members (faz com que o acesso ou utilização de uma classe não dependam do instanciamento desta classe)
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic class (propriedades dos argumentos podem ter os tipos definidos na hora da criação da instância)
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem);
console.log(typeof secondItem.first);
// 16 - Parameters properties (recurso para definir a privacidade, nome e tipo das propriedades do construtor)
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties('Camisa', 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price);
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
// 17 - Class expressions (recurso para criar uma classe anônima)
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Johnes');
console.log(pessoa);
console.log(pessoa.name);
// 18 - Abstract Class (recurso para servir como molde de outra classe)
class AbstractClass {
}
// não é possível criar uma instância de uma classe abstrata
// const newObj = new AbstractClass();
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample('Jair');
console.log(newAbstractObject.name);
newAbstractObject.showName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
