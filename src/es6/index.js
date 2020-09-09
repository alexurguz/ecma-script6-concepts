/* DEFAULT PARAMETERS CONCAT */

//Default parameters
function newFunction(name, age, country) {
  var name = name || 'Johnatan';
  var age = age || 32;
  var country = country || 'Colombia';
  console.log(name, age, country);
}

// es6
function newFunction2(name = 'Johnatan', age = 32, country = "Colombia") {
  console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//Concat literal template
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui consequatur. Commodi. Ipsum vel duis yet minima \n"
  + "otra frase epica que necesitamos."

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

/* LET, CONST, SPREAD, DESTRUCTURING */

let person = {
  'name': 'Johnatan',
  'age': 32,
  'country': 'Colombia'
}

console.log(person.name, person.age);
//Destructuring
let { name } = person;
console.log(name);

let team1 = ['Johnatan', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
//Spread
let education = ['David', ...team1, ...team2];

console.log(education);

//Let, Const, Var
{
  var globalVar = "Global Var";
}

{
  let globalLet = 'Global Let';
  console.log(globalLet);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);

let name = 'Johnatan';
let age = 32;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

/* ARROW FUNCTIONS, PROMISES, OBJECT PARAMETERS */

//Arrow Function
const names = [
  { name: 'Johnatan', age: 32 },
  { name: 'Yesica', age: 27 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //TODO SOURCE CODE
}

const listOfNames4 = name => {
  //TODO SOURCE CODE
}

const square = num => num * num;
console.log(square(2));

//PROMISES
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Hey!');
    } else {
      reject('Ups!!');
    }
  });
}

helloPromise()
  .then(response => console.log(response))
  .catch(error => console.log(error));

/* CLASS, MODULES, GENERATORS */

//Class
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//Modules
import { hello } from './module';

hello();

function* helloWorld() {
  if (true) {
    yield 'Hello, ';
  }
  if (true) {
    yield 'World';
  }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);