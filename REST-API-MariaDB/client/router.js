import homepage from "./pages/homepage.js";
import productDetails from "./pages/productDetails.js";
import products from "./pages/products.js";

const main = document.querySelector("main");

async function router() {
  const hash = location.hash;
  const page = hash.split("/")[0];
  const id = hash.split("/")[1];

  console.log("Page - " + page);
  console.log("Id - " + id);

  if (page == "#home" || page == "") {
    main.innerHTML = homepage();
  } else if (page == "#products") {

    if (id) {
      main.innerHTML = await productDetails(id);
    } else {
      main.innerHTML = await products();
    }
  } else {
    main.innerHTML = `<h1>404 - Denna sidan finns inte!</h1>`;
  }

}

window.onhashchange = router;
window.onload = router;