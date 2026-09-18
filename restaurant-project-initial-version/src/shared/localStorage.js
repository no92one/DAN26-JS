const PRODUCTS_KEY = "products";

function setLS(key, value) {
  const stringifiedValue = JSON.stringify(value);
  localStorage.setItem(key, stringifiedValue);
}

export function getProductsFromLS() {
  const rawProducts = localStorage.getItem(PRODUCTS_KEY);
  const products = JSON.parse(rawProducts);
  return products;
}

export function addProductToLS(product) {
  const products = getProductsFromLS();

  if (products !== null) {
    products.push(product);
    setLS(PRODUCTS_KEY, products);
  } else {
    setLS(PRODUCTS_KEY, [product]);
  }
}

export function removeProductFromLS(product) {
  const products = getProductsFromLS();

  if (products === null) return;

  let updatedProducts = [];

  for (let i = 0; i < products.length; i++) {
    const currentProduct = products[i];

    if (currentProduct.name !== product.name) {
      updatedProducts.push(currentProduct);
    }
  }

  setLS(PRODUCTS_KEY, updatedProducts);
}
