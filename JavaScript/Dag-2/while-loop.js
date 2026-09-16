const menu = ["Margherita", "Vesuvio", "Hawaii", 
    "Vesuvio", "Hawaii"]

let start = 0;

while (start < menu.length) {
    console.log(start + ". " + menu[start])

    start++
}




/*
let menuText = "1. Addera, 2. Sub, 3. Avsluta. Välj mellan 1-3:" 

let run = true

while (run) {
    console.log(menuText)
    
    let choice = 1 // kod som låter amvändaren skriva in något värde 

    if (choice >= 1 && choice <= 2){
        console.log("kör koden kopplat till de menyvalet.")
    } else if (choice == 3) {
        run = false;
    } else {
        console.log("Ditt val är inte giltigt, du måste välja mellan 1-3!")
    }
}
*/

