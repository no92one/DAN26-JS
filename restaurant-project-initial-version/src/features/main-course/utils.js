import { addProductToLS } from "../../shared/localStorage";

export function createMainCourseEL(mainCourse) {
  const { image, name, description, price } = mainCourse;
  const mainCourseEl = document.createElement("article");
  const inputId = name.toLowerCase() + "-amount";

  mainCourseEl.dataset.name = name;
  mainCourseEl.dataset.price = price;
  mainCourseEl.classList.add("product");

  mainCourseEl.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3>${name}</h3>
    <p>${description}</p>
    <p>Pris: ${price} kr</p>
    <label for="${inputId}">Antal:</label>
    <input type="number" id="${inputId}" min="1" value="1">
    <button class="add-btn" type="button">Lägg till</button>
  `;

  return mainCourseEl;
}

export function handleMenuElClick(event) {
  const target = event.target;

  if (target.classList.contains("add-btn")) {
    const productEl = target.closest('.product');
    addProductToLocalStorage(productEl);
  }
}

function addProductToLocalStorage(productEl) {
  const amountInputEl = productEl.querySelector("input");
  const amount = amountInputEl.value;

  const name = productEl.dataset.name;
  const price = productEl.dataset.price;

  const newProduct = {
    name,
    price,
    amount,
  };

  addProductToLS(newProduct);
}
