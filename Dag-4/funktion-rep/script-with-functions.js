import { input } from "@inquirer/prompts";

// const name = await input({ "message": "Skriv vad du heter:" });
// console.log(`Hej ${name}!`);

let run = true;

while (run) {
  printMenu()
  const choice = await input({ "message": "Välj ett av meny valen 1-4:" });

  if (choice == "1") {
    await calculate("+")
  } else if (choice == "2") {
    await calculate("-")
  } else if (choice == "3") {
    await calculate("*")
  } else if (choice == "4") {
    run = false;
    console.log("Programmet avslutas");
  } else {
    console.log("Du måste välja mellan 1-4!");
  }
}

function printMenu() {
  console.log("\n\n");
  console.log("1. addera");
  console.log("2. sub");
  console.log("3. multi");
  console.log("4. avsluta");
}

async function calculate(symbol) {
  const number1 = Number.parseInt(await input({ "message": "Skriv in tal1:" }));
  const number2 = Number.parseInt(await input({ "message": "Skriv in tal2:" }));
  let result;

  if (symbol == "+") {
    result = number1 + number2;
  } else if (symbol == "-") {
    result = number1 - number2;
  } else if (symbol == "*") {
    result = number1 * number2;
  }

  console.log(`${number1} ${symbol} ${number2} = ${result}`);
}



