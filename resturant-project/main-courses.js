console.log("hej hej från mej!")

const products = [
    {
        "image": "images/margherita.jpg",
        "name": "Margherita",
        "description": "Pizza med tomatsås, mozzarella och färsk basilika.",
        "price": 129
    },
    {
        "image": "images/vesuvio.jpg",
        "name": "Vesuvio",
        "description": "Pizza med tomatsås, mozzarella och skinka.",
        "price": 139
    },
    {
        "image": "images/carbonara.jpg",
        "name": "Carbonara",
        "description": "Pasta med pancetta, ägg, parmesan och svartpeppar.",
        "price": 159
    },
    {
        "image": "images/burger.jpg",
        "name": "Java Burger",
        "description": "Hamburgare med cheddar, sallad, tomat, dressing och pommes frites.",
        "price": 179
    }
]

const menu = document.querySelector(".menu")

for (let i = 0; i < products.length; i++) {
    const product = document.createElement("article");
    product.classList.add("product")

    product.innerHTML = `<img src="${products[i].image}" alt="${products[i].name}">
        <h3>${products[i].name}</h3>
        <p>${products[i].description}</p>
        <p>Pris: ${products[i].price} kr</p>
        <label for="${products[i].name.toLowerCase()}-amount">Antal:</label>
        <input type="number" id="${products[i].name.toLowerCase()}-amount" min="1" value="1">
        <button type="button">Lägg till</button>`

    //console.dir(product.innerHTML)

    menu.appendChild(product)
}

/*

products.forEach(product => {
    const product = document.createElement("article");

    product.innerHTML = `<img src="${product.image}" alt="Pizza Margherita">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Pris: ${product.price} kr</p>
        <label for="${product.name.toLowerCase()}-amount">Antal:</label>
        <input type="number" id="${product.name.toLowerCase()}-amount" min="1" value="1">
        <button type="button">Lägg till</button>`
});
*/


const button = document.querySelector("#new-product")

button.addEventListener("click", function () {
    console.log("lägger till en ny produkt")

    const name = document.querySelector("#new-name").value
    const description = document.querySelector("#new-description").value
    const image = document.querySelector("#new-image").value
    const price = document.querySelector("#new-price").value

    console.log(name)
    console.log(description)
    console.log(image)
    console.log(price)

    const product = document.createElement("article");
    product.classList.add("product")

    product.innerHTML = `<img src="${image}" alt="Pizza Margherita">
        <h3>${name}</h3>
        <p>${description}</p>
        <p>Pris: ${price} kr</p>
        <label for="${name.toLowerCase()}-amount">Antal:</label>
        <input type="number" id="${name.toLowerCase()}-amount" min="1" value="1">
        <button type="button">Lägg till</button>`

        menu.appendChild(product)
})
