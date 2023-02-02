// 1 - forEach
const arr = ["Alice", "Bob", "Charlie"];
// TODO use #forEach to say hello to everyone (using console.log):

// Solution with long function
arr.forEach(function (element) {
  console.log(`hello, ${element}`);
});

// Solution with arrow function
arr.forEach(element => console.log(`hello, ${element}`));



// 2 - map
const people = [
  { name: "James", age: 18 },
  { name: "Alice", age: 20 },
];
// TODO use #map create an array with names ONLY
const namesOnly = people.map(element => element["name"]);
console.log(namesOnly);



// 3 - filter
const people2 = [
  { name: "James", age: 18 },
  { name: "Alice", age: 20 },
  { name: "John", age: 17 },
];
// TODO use #filter to create an array with people that are 18 or older (>=)
const adults = people2.filter(element => element["age"] >= 18);
console.log(adults);



// 4 - find
const people3 = [
  { name: "James", age: 18 },
  { name: "Alice", age: 20 },
  { name: "John", age: 17 },
  { name: "Maria", age: 65 },
  { name: "James", age: 65 },
];
// TODO use #find to find James, 65
const found = people3.find(element => element["name"] === "James" && element["age"] === 65);
console.log(found);



// 5 - every
const people4 = [
  { name: "James", age: 18 },
  { name: "Alice", age: 20 },
  { name: "John", age: 17 },
  { name: "Maria" },
  { name: "James", age: 65 },
];
// TODO use #every to check if all people have their age defined
const ageDefined = people4.every(element => element["age"]);
console.log(ageDefined);



// 6 - some
const people5 = [
  { name: "James", age: 18 },
  { name: "Alice", age: 20 },
  { name: "John", age: 17 },
  { name: "Maria", age: 65 },
  { name: "James", age: 65 },
];
// TODO use #some to check if the array contains someone younger than 18 (<)
const tooYoung = people5.some(element => element["age"] < 18);
console.log(tooYoung);



// Reduce
let myString = "hello marc how are you";
// return an object that has as properties the letters of that string and as values how many times that letter appears on that string
// {
//   h: 2,
//   e: 2,
//   l: 2
//   o: 3
// }

// let letters = {};
// for (let i = 0; i < myString.length; i++) {
//   letters[myString[i]] = 0;
// }
// console.log(letters);

// Solution with if-else statement
let letters = {};

for (let i = 0; i < myString.length; i++) {
  if (letters[myString[i]] === undefined) {
      letters[myString[i]] = 1;
  } else {
      letters[myString[i]] += 1;
  }
}
console.log(letters);

// Solution with ternary operator
// let letters = {};
//
// for (let i = 0; i < myString.length; i++) {
//   letters[myString[i]] === undefined ? letters[myString[i]] = 1 : letters[myString[i]] += 1;
// }
// console.log(letters);

// Solution with reduce method and if-else
// source: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
const myArray = myString.split("");
// const myArray = [...myString];
let solution =  myArray.reduce(function(obj, letter) {
  if (obj[letter] === undefined) {
    obj[letter] = 1;
  } else {
    obj[letter]++;
  }
  return obj;
}, {});

console.log(solution);
