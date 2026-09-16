function greeting() {
  console.log("Greetings");
}

greeting();
greeting();
greeting();
greeting();
greeting();
greeting();
greeting();

// Greet someone by name
function greetingWithName(name) {
  console.log(`Greetings to you, ${name}`);
}

greetingWithName('Niklas');
greetingWithName('Henrik');
greetingWithName('Erik');
greetingWithName("");

function add(firstAddend, secondAddend) {
  const additionResult = firstAddend + secondAddend;
  console.log(`The sum of ${firstAddend} and ${secondAddend} is ${additionResult}`);
}

add(10,20);
add(7,59);
add(13057, 118000);

function convertMilesToAmericanMiles(miles) {
  const americanMiles = miles * 6.21371;
  console.log(`${miles} Swedish mil equals ${americanMiles} American miles`);
}

convertMilesToAmericanMiles(10);
convertMilesToAmericanMiles(67);

const sumInputNumbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

function calculateSumOfArray(valuesToSum) {
  let arrayTotal = 0;

  for (let sumIndex = 0; sumIndex < valuesToSum.length; sumIndex++) {
    const summand = valuesToSum[sumIndex];
    arrayTotal = arrayTotal + summand;
  }

  return arrayTotal;
}

const calculatedTotal = calculateSumOfArray(sumInputNumbers);
console.log(calculatedTotal);
