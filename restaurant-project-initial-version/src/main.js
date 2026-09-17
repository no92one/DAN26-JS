console.log("index e här!")

const h2Element = document.querySelector("#event-example")

console.dir(h2Element)

h2Element.addEventListener("click", function () {
    console.log("Du klickar på en h2'a!")

    const menu = document.querySelector(".menus")

    const text = document.createElement("p")

    text.innerHTML = "Jag är något nytt!"

    menu.appendChild(text)
})