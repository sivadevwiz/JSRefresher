const person = { name: "Siva", age: 34 };

const x = person;

console.log("person...", person);
console.log("x...", x);

x.age = 16;

console.log("person...", person);
console.log("x...", x);

for (let x in person) {
  console.log("x=", x);
  console.log(person[x]);
}

// adding new property
person.nationality = "Indian";

console.log("person...", person);

// delete - deletes both property and value

delete person.age;

console.log("person...", person);

const myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

// All the following will work perfect
console.log("dot notation", myObj.cars.car2);
console.log("bracker notation", myObj["cars"]["car2"]);
console.log("mix notation", myObj.cars["car2"]);
console.log("mix notation", myObj["cars"].car2);

const myObj1 = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

// iterates the array of cars
for (let i in myObj1.cars) {
  console.log("i=", i);
  console.log(myObj1.cars[i]);
  // iterates the array of models
  for (let j in myObj1.cars[i].models) {
    console.log("j=", j);
    console.log(myObj1.cars[i].models[j]);
  }
}

const myObj2 = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

delete myObj2.cars[0].models;

console.log(myObj2);

const person1 = {
  name: "John",
  age: 30,
  city: "New York",
};
let txt = "";
for (let x in person1) {
  console.log("x=", x);
  txt += person1[x] + " ";
}

console.log("txt=", txt);

const myArraykeys = Object.keys(person1);
console.log("myArraykeys=", myArraykeys);

const myArray = Object.values(person1);
console.log("myArray=", myArray);

let myString = JSON.stringify(person1);
console.log("myString.....", myString);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get getlang() {
    return this.language;
  },
  set setlang(lang) {
    this.language = lang;
  },
};

console.log("person2.........", person2);

console.log("lang.......", person2.getlang);

person2.setlang = "ta";

console.log("person2.........", person2);

console.log("lang.......", person2.getlang);

const obj = { counter: 0 };

//Define setters and getters

Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});

Object.defineProperty(obj, "add", {
  set: function (value) {
    return (this.counter += value);
  },
});

obj.add = 5;
console.log("add....", obj.counter);
