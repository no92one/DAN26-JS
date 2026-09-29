import homepage from "./pages/homepage.js";
import products from "./pages/products.js";

const main = document.querySelector("main");

async function router() {
  const page = location.hash;
  console.log("Page - " + page);

  if (page == "#home" || page == "") {
    main.innerHTML = homepage();
  } else if (page == "#products") {
    main.innerHTML = await products();
  } else {
    main.innerHTML = `<h1>404 - Denna sidan finns inte!</h1>`;
  }

}

window.onhashchange = router;
window.onload = router;