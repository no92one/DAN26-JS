const button = document.querySelector("#fetch-button");

button.addEventListener("click", async () => {
  const response = await fetch("http://localhost:3000/api/dishes");
  const result = await response.json();

  console.log("Status: " + response.status);
  console.log(result);
});