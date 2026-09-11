const person1AsList = ["Linus", 33, "Linus@email.com"]
const person2AsList = [35, "Anna@email.com", "Anna"]

const person1AsObjekt = { "name": "Linus", "age": 33, "email": "Linus@email.com"} 

const person2AsObjekt = {
    "age": 35,
    "email": "Anna@email.com",
    "name": "Anna",
    "hoddies": ["Fotboll", "Mat"],
    "kids": [
        {
            "name": "Hans",
            "age": 2
        },
        {
            "name": "Greta",
            "age": 5
        }
    ] 
} 

console.log(person2AsObjekt.name)

person1AsObjekt.name = "Sunil"

console.log(person2AsObjekt.kids[0].name)