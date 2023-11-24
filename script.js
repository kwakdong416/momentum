function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "and I'm " + age);
}

sayHello("nico", 23);
sayHello("lynn", 25);
sayHello("dal", 27);

function plus(a, b) {
  console.log(a + b);
}

plus(1, 2);
plus(10, 20);
plus(100, 200);

/*
NaN 은 Not a Number라는 의미이다.
*/

function divide(a, b) {
  console.log(a / b);
}

divide(10, 2);
divide(100, 10);
divide(1000, 25);

const player = {
  name: "Nico",
  age: 23,
  sayHello: function (otherPersonsName) {
    console.log("hello! my name is " + otherPersonsName + ".");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("dal");
