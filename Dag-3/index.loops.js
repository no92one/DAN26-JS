// #1 - Count from 1 to 10
// for (let count = 1; count <= 10; count++) {
//   console.log(count);
// }

// #2 - Count down from 10 to 1
// for (let count = 10; count > 0; count--){
//   // count-- => count = count - 1
//   console.log(count)
// }

// #3 - Log even numbers
// for (let count = 1; count <= 20; count++) {
//   if (count % 2 === 0) {
//     console.log(count);
//   }
// }

// #4 - Log all the foods
// const foods = ['tacos', 'hamburger', 'hotdogs', 'pancakes'];

// for(let index = 0; index < foods.length; index++){
//   console.log(foods.at(index));
// }

// #5 - Log food and its index position
// const foods = ["tacos", "hamburger", "hotdogs", "pancakes"];

// for(let index = 0; index < foods.length; index++) {
//   const currentFood = foods[index]; // The food that we are currently iterating over
//   const text = `${index}: ${currentFood}`;
//   console.log(text);
// }

// #6 - Search for a given name in an array
// const names = ['niklas', 'henrik', 'erik', 'sofia'];
// const targetName = 'niklas';

// for (let x = 0; x < names.length; x++) {
//   if (names[x] === targetName) {
//     const successMessage = `The name '${targetName}' you are looking for exists!`;
//     const successMessage2 = "The name " + targetName + " you are looking for exists!"; // Works perfectly fine as well
//     console.log(successMessage2);
//   };
// }

// #7 - Find out how many numbers are bigger than 10
const numbers = [4, 60, 34, 134, 30, 5, 7, 14, 2, 3];
let count = 0;

for(let index = 0; index < numbers.length; index++) {
  const currentNumber = numbers[index];

  if (currentNumber > 10) {
    count++;
  }
}

const text = `There are ${count} numbers that are larger the 10.`;
console.log(text);