// Good to know commands in the terminal:
// ls = list
// list the content of the folder the terminal is opened in.
// cd = change directory
// change directory, up or down. If you want to go up you write '../the-folder-name', and if you want to go down, you just write the folder name or use one period and a slash: './the-folder-name'.

// Solutions for the array exercises

// #1 - create an array and log some elements
// const foods = ['pancakes', 'meatballs', 'taco', 'sushi', 'hamburger'];
// console.log(foods[0]);
// console.log(foods[2]);
// console.log(foods.at(4));

// #2 - Manipulate an element in the array
// const cities = ['stockholm', 'gothenburg', 'malmo', 'copenhagen'];
// console.log(cities);

// cities[0] = 'helsinki';
// console.log(cities);

// #3 = Log first and last element of array, use .length
// const names = ["niklas", "henrik", "erik", "sofia"]; // length is 4
// console.log(names.at(0));
// console.log(names[names.length]); // names.lenght will result in 4 so this is okay syntax. This won't work though since we don't have any element on index position 4

// console.log(names[names.length - 1]); // Will give index position 3 in this case which will work.

// #4 - Controll the lenght of the array
// const products = ["tv", "playstation", "xbox", "laptop"];
// const numberOfProducts = products.length; // Just save the lenght in a variable that is easier to use.

// console.log(`There are ${numberOfProducts} products available!`); // Backtics becasue I want to inject a variable in the string/

// if (numberOfProducts > 5) {
//   console.log("A lot of products availabel");
// } else {
//   console.log("Limited amount of products available");
// }

