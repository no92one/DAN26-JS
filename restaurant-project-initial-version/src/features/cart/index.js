import { getProductsFromLS, removeProductFromLS } from "../../shared/localStorage";
import { createCartItemEL, calculateCartTotals } from "./utils";

const cartEl = document.querySelector(".cart");
const totalAmountEl = document.querySelector("#cart-total-amount");
const totalPriceEl = document.querySelector("#cart-total-price");

function renderCart() {
  let products = getProductsFromLS();

  if (products === null) {
    products = [];
  }

  cartEl.innerHTML = "";

  if (products.length === 0) {
    const emptyMessageEl = document.createElement("p");
    emptyMessageEl.textContent = "Din kundvagn är tom.";
    cartEl.appendChild(emptyMessageEl);
  } else {
    for (let i = 0; i < products.length; i++) {
      cartEl.appendChild(createCartItemEL(products[i]));
    }
  }

  const { totalAmount, totalPrice } = calculateCartTotals(products);
  totalAmountEl.textContent = totalAmount;
  totalPriceEl.textContent = totalPrice;
}

cartEl.addEventListener("click", function (event) {
  if (!event.target.classList.contains("remove-btn")) return;

  const cartItemEl = event.target.closest(".cart-item");
  removeProductFromLS({ name: cartItemEl.dataset.name });
  renderCart();
});

renderCart();
