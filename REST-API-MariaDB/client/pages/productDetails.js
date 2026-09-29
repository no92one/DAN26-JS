export default async function productDetails(products_id) {
  const response = await fetch("http://localhost:3000/products/" + products_id);
  const result = await response.json();

  console.log(result);

  return `<h2>${result.name}</h2>
  <div class="productsDetails">
    <p>Pris: ${result.price} kr</p>
    <p>Beskrivning: ${result.description}</p>
  </div>`;
}
