export default async function products() {
  const response = await fetch("http://localhost:3000/products");
  const result = await response.json();

  const productsList = document.createElement("div");
  productsList.classList.add("productsList");

  let products = "";
  for (let i = 0; i < result.length; i++) {
    products += `<a class="productCard" href='#products/${result[i].id}'>
      <p class="product-name">${result[i].name}</p>
      <p class="product-price">${result[i].price} kr</p> 
    </a>`;
  }

  productsList.innerHTML = products;

  console.log(productsList.outerHTML);
  console.log(productsList.innerHTML);

  return `<h1>Se alla mina Produkter</h1>` + productsList.outerHTML;
}