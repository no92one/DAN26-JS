export default function productDetails(products_id) {
  const response = await fetch("http://localhost:3000/products/" + products_id);
  const result = await response.json();
  return 
}
