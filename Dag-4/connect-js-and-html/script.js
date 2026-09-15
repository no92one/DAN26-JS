// console.log("Script filen är kopplad!!!");

// const title = document.querySelector("h1");
// console.log(title);

// console.dir(title);
// console.log(title.textContent);

// title.textContent = "Jag har ändrat texten nu i javascript!";

// console.log(title.classList);

// title.classList.remove("red");
// title.classList.add("blue");

// console.log(title.classList);

//--------------------------------------------------------------------

// const products = ["Margarita", "Vesuvio", "Kebabpizza"];

// const productsElements = document.querySelectorAll("h2");

// console.log(productsElements);

// for (let i = 0; i < productsElements.length; i++) {
//   productsElements[i].textContent = products[i];
// }

//--------------------------------------------------------------------

const products = [
  {
    "name": "Margarita",
    "price": 80
  },
  {
    "name": "Vesuvio",
    "price": 85
  },
  {
    "name": "Kebabpizza",
    "price": 120
  },
  {
    "name": "Hawaii",
    "price": 100
  },
  {
    "name": "Fungi",
    "price": 100
  },
  {
    "name": "Kyckingpizza",
    "price": 110
  },
  {
    "name": "Calzone",
    "price": 90
  }
];

const menuElement = document.querySelector("#menu");

console.dir(menuElement);

for (let i = 0; i < products.length; i++) {
  const product = document.createElement("article");

  product.classList.add("product");

  console.log("products - ", product);

  product.innerHTML = `<h2>${products[i].name}</h2>
  <p>${products[i].price} kr</p>`;
  menuElement.appendChild(product);
}
