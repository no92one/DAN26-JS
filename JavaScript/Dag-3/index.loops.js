// #1 - Count from 1 to 10
for (let ascendingCount = 1; ascendingCount <= 10; ascendingCount++) {
  console.log(ascendingCount);
}

// #2 - Count down from 10 to 1
for (let descendingCount = 10; descendingCount > 0; descendingCount--) {
  // descendingCount-- => descendingCount = descendingCount - 1
  console.log(descendingCount);
}

// #3 - Log even numbers
for (let evenCandidate = 1; evenCandidate <= 20; evenCandidate++) {
  if (evenCandidate % 2 === 0) {
    console.log(evenCandidate);
  }
}

// #4 - Log all the foods
const menuFoods = ['tacos', 'hamburger', 'hotdogs', 'pancakes'];

for (let menuIndex = 0; menuIndex < menuFoods.length; menuIndex++) {
  console.log(menuFoods.at(menuIndex));
}

// #5 - Log food and its index position
const indexedFoods = ["tacos", "hamburger", "hotdogs", "pancakes"];

for (let foodIndex = 0; foodIndex < indexedFoods.length; foodIndex++) {
  const indexedFood = indexedFoods[foodIndex]; // The food that we are currently iterating over
  const foodDescription = `${foodIndex}: ${indexedFood}`;
  console.log(foodDescription);
}

// #6 - Search for a given name in an array
const searchNames = ['niklas', 'henrik', 'erik', 'sofia'];
const nameToFind = 'niklas';

for (let nameIndex = 0; nameIndex < searchNames.length; nameIndex++) {
  if (searchNames[nameIndex] === nameToFind) {
    const nameFoundMessage = `The name '${nameToFind}' you are looking for exists!`;
    const concatenatedNameFoundMessage = "The name " + nameToFind + " you are looking for exists!"; // Works perfectly fine as well
    console.log(nameFoundMessage);
    console.log(concatenatedNameFoundMessage);
  }
}

// #7 - Find out how many numbers are bigger than 10
const numbersToCount = [4, 60, 34, 134, 30, 5, 7, 14, 2, 3];
let largeNumberCount = 0;

for (let countIndex = 0; countIndex < numbersToCount.length; countIndex++) {
  const numberToCheck = numbersToCount[countIndex];

  if (numberToCheck > 10) {
    largeNumberCount++;
  }
}

const largeNumberSummary = `There are ${largeNumberCount} numbers that are larger than 10.`;
console.log(largeNumberSummary);

// #13 - Find the first number bigger than 20
const numbersToSearch = [3, 6, 18, 15, 12, 24, 56, 2, 113];
let searchInProgress = true;
let searchIndex = 0;

while (searchInProgress && searchIndex < numbersToSearch.length) {
  const searchNumber = numbersToSearch[searchIndex];

  if (searchNumber > 20) {
    console.log(searchNumber);
    searchInProgress = false;
  } else {
    console.log(`The number ${searchNumber} is not greater than 20`);
    searchIndex++; // same as searchIndex = searchIndex + 1
  }
}


// #15 Add numbers until the sum hits or goes above 100
const numbersToAdd = [3, 6, 18, 15, 12, 24, 56, 2, 113];
let runningTotal = 0;
let additionIndex = 0;

while (runningTotal < 100 && additionIndex < numbersToAdd.length) {
  const numberToAdd = numbersToAdd[additionIndex];
  console.log(`${numberToAdd} was added to the sum: ${runningTotal}..`);
  runningTotal = runningTotal + numberToAdd;
  console.log(`..new sum is ${runningTotal}`);
  additionIndex++;
}

console.log(`The final sum is ${runningTotal}.`);
