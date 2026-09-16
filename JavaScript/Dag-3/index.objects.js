const volvo = {
  color: "red",
  model: "v70",
  make: "volvo",
  horsePower: 320,
  year: 2016,
};

const saab = {
  color: "gul",
  model: "95",
  make: "saab",
  horsePower: 150,
  year: 2009,
};

const volkswagen = {
  color: "navy",
  model: "sharan",
  make: "volkswagen",
  horsePower: 200,
  year: 2015,
};

const cars = [volvo, saab, volkswagen];

for (let carIndex = 0; carIndex < cars.length; carIndex++) {
  const currentCar = cars[carIndex];

  if (currentCar.make === "volvo") {
    console.log(currentCar.horsePower);
  }
}
