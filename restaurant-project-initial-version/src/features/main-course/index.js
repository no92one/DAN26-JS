import { mainCourses } from "./data";
import { createMainCourseEL, handleMenuElClick } from "./utils";

import placeholderImage from "../../assets/placeholder.png";

const menuEl = document.querySelector(".menu");
const formEL = document.querySelector("#main-course-form");
const nameInputEl = document.querySelector("#new-name");
const descInputEl = document.querySelector("#new-description");
const priceInputEl = document.querySelector("#new-price");

menuEl.addEventListener("click", handleMenuElClick);

formEL.addEventListener("submit", function (event) {
  event.preventDefault();

  const newMainCourseData = {
    name: nameInputEl.value,
    description: descInputEl.value,
    image: placeholderImage,
    price: priceInputEl.value,
  };

  const newMainCourseEl = createMainCourseEL(newMainCourseData);
  menuEl.appendChild(newMainCourseEl);
});

for (let i = 0; i < mainCourses.length; i++) {
  const mainCourseEl = createMainCourseEL(mainCourses[i]);
  menuEl.appendChild(mainCourseEl);
}
