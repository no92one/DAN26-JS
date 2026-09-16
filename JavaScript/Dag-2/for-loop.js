const menu = ["Margherita", "Vesuvio", "Hawaii", 
    "Vesuvio", "Hawaii"]

console.log("----------------------------------")

for (let i = 0; i < menu.length; i++) {
    console.log(i + ". " + menu[i])
}

console.log("----------------------------------")

// Skriver ut listan baklänges
for (let i = menu.length - 1; i >= 0; i--) {
    console.log(i + ". " + menu[i])
}

console.log("----------------------------------")
console.log("Programmet avslutas")