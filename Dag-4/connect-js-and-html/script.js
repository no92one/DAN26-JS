console.log("Script filen är kopplad!!!");

const title = document.querySelector("h1");

console.dir(title);
console.log(title.textContent);

title.textContent = "Jag har ändrat texten nu i javascript!";

console.log(title.classList);

title.classList.remove("red");
title.classList.add("blue");

console.log(title.classList);