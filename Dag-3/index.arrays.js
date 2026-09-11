// Good to know commands in the terminal:
// ls = list
// list the content of the folder the terminal is opened in.
// cd = change directory
// Use '..' to go to the parent folder, or './the-folder-name' to enter a child folder.

// Solutions for the array exercises

// #1 - create an array and log some elements
const arrayFoods = ['pancakes', 'meatballs', 'taco', 'sushi', 'hamburger'];
console.log(arrayFoods[0]);
console.log(arrayFoods[2]);
console.log(arrayFoods.at(4));

// #2 - Manipulate an element in the array
const travelCities = ['stockholm', 'gothenburg', 'malmo', 'copenhagen'];
console.log(travelCities);

travelCities[0] = 'helsinki';
console.log(travelCities);

// #3 = Log first and last element of array, use .length
const studentNames = ["niklas", "henrik", "erik", "sofia"]; // length is 4
console.log(studentNames.at(0));
console.log(studentNames[studentNames.length]); // studentNames.length will result in 4 so this is okay syntax. This won't work though since we don't have any element on index position 4

console.log(studentNames[studentNames.length - 1]); // Will give index position 3 in this case which will work.

// #4 - Check the length of the array
const availableProducts = ["tv", "playstation", "xbox", "laptop"];
const availableProductCount = availableProducts.length; // Just save the length in a variable that is easier to use.

console.log(`There are ${availableProductCount} products available!`); // Backticks because I want to inject a variable in the string.

if (availableProductCount > 5) {
  console.log("A lot of products available");
} else {
  console.log("Limited amount of products available");
}

