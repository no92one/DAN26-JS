export function createCartItemEL(product) {
  const { name, price, amount } = product;
  const cartItemEl = document.createElement("article");

  cartItemEl.classList.add("cart-item");
  cartItemEl.dataset.name = name;
  cartItemEl.innerHTML = `
    <h3>${name}</h3>
    <p>Antal: ${amount}</p>
    <p>Pris per styck: ${price} kr</p>
    <p>Totalt: ${Number(price) * Number(amount)} kr</p>
    <button class="remove-btn" type="button">Ta bort</button>
  `;

  return cartItemEl;
}

export function calculateCartTotals(products) {
  let totalAmount = 0;
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const amount = Number(product.amount);
    const price = Number(product.price);

    totalAmount += amount;
    totalPrice += price * amount;
  }

  return { totalAmount, totalPrice };
}
