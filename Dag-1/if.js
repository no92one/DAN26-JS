const age = 66

// Lösning 1
if (age >= 16 && age <= 64) {
    console.log("Du är över 16, så red bull'en kostar 20 kr. Dags att betala!")
} else if (age >= 65) {
    console.log("Du är pensionär och får 10% rabatt, så red bull'en kostar 18 kr. Dags att betala!")
} else {
    console.log("Du är under 16. Tyvärr, du får inte köpa en red bull!")
}


// Lösning 2
// if (age >= 65) {
//     console.log("Du är pensionär och får 10% rabatt, så red bull'en kostar 18 kr. Dags att betala!")
// } else if (age >= 16) {
//     console.log("Du är över 16, så red bull'en kostar 20 kr. Dags att betala!")
// } else if (age < 16) {
//     console.log("Du är under 16. Tyvärr, du får inte köpa en red bull!")
// }

console.log("Programmet är slut!")