# Grundläggande JavaScript

## Innehåll

- [Variabler](#variabler)
  - [Övningsexempel](#övningsexempel-variabler)
- [Villkor](#villkor)
  - [Jämförelseoperatorer](#jämförelseoperatorer)
  - [Logiska operatorer](#logiska-operatorer)
  - [Övningsexempel](#övningsexempel-villkor)
- [Arrays](#arrays)
  - [Komma åt värden i en array](#komma-åt-värden-i-en-array)
  - [Manipulera värden i en array](#manipulera-värden-i-en-array)
  - [Övningsexempel](#övningsexempel-arrayer)
- [Loopar](#loopar)
  - [for-loop](#for-loop)
  - [while-loop](#while-loop)
  - [Övningsexempel](#övningsexempel-loopar)
- [Objekt](#objekt)
- [Funktioner](#funktioner)
  - [Funktioner utan parametrar och returvärde](#funktioner-utan-parametrar-och-returvärde)
  - [Funktioner med parametrar](#funktioner-med-parametrar)
  - [Funktioner med parametrar och returvärde](#funktioner-med-parametrar-och-returvärde)

## Variabler

Vad är en variabel? Tänk er en lagerlokal med massa tomt utrymme, i detta utrymme så kan vi skicka in massa lådor som vi kan stoppa saker i. En variabel är precis en sådan låda, och denna låda kan vi välja att ha tom eller att fylla med innehåll. Men varje låda kan endast innehålla ett värde. Dessa saker motsvaras av de olika datatyperna som finns i JS:

- `Number` - Motsvarar ett heltal eller ett decimaltal. Maxgränsen för detta tal är väldigt, väldigt stor så vi behöver nästan aldrig tänka på storleken på detta tal. Det kan vara 1, 400, 75000, eller några miljoner eller miljarder.
- `String` - En samling tecken, alltså alla typer av texter. Till exempel, Niklas, Henrik, Erik och Sofia. Men det kan även vara längre texter såsom: "Jag heter Niklas och gillar att spela handboll". Det speciella med dessa är att strängar alltid börjar och slutar med ett citattecken, det kan vara enkelcitat, dubbelcitat eller så kallade "backticks".
- `Boolean` - En boolean har bara två värden, antingen  `true` eller `false`. Används primärt när man jobbar med if-satser eller ska spara passande värden, till exempel, har denna lägenhet balkong? Ja eller nej, motsvaras då av en boolean.
- `Object` - En lite mer avancerad datatyp som ni kommer jobba med mer senare, men den klumpar ihop olika datavärden i ett och samma "samlingsobjekt". Typ en bil kan man se som ett objekt. Den har ju flera olika egenskaper/attribut, typ färg, antal hjul, hästkrafter, modell, märke och så vidare.

Så tillbaks till variabler, dessa datatyper kan ni då stoppa ner i dessa "lådor". Hur gör man det då? I JS så finns det dedikerade nyckelord för att skapa dessa "lådor", som vi då kallar för variabler.

Dessa två är  `const` och `let`. Dessa är reserverade av JS för att skapa just variabler, så att vi får enkla enheter att jobba med i vår kod. Vi kan alltså inte använda dem till något annat, som till exempel att använda dem för att namnge någon variabel.

Skillnaden mellan dessa är att en variabel deklarerad med `const` inte kan tilldelas ett nytt värde, medan en variabel deklarerad med `let` kan det.

```js
const name = 'Niklas'; // A simple string
name = 'Henrik'; // Won't work, since we can't reassign a const variable.

let lastName = 'Svensson'; // Totally fine
lastName = 'Johansson'; // Totally fine as well, we have given the variable a new value here.
```

I de flesta fallen så kommer ni alltid att använda `const` eftersom variabler sällan ändras under ett programs gång. Men det finns givetvis lägen för att använda `let` också.

[Till toppen](#grundläggande-javascript)

### Övningsexempel variabler

Vi kan prova att lösa några uppgifter som ni har fått tidigare bara för att öva kort på dessa.

**2. Flera variabler**

Skapa tre variabler som innehåller:

- ditt namn
- din ålder
- din hemstad

Skriv ut alla tre variablerna med console.log()

```js
const myName = 'Niklas';
const myAge = 35;
const village = 'Skurup';

console.log(myName, myAge, village); // This will write out the content of the variable or variables in the console window inside the inspector in the browser.
```

**6. Räkna med variabler**

Skapa två variabler:

- pris per produkt
- antal produkter

Skapa sedan en tredje variabel som räknar ut det totala priset.
Skriv ut totalsumman.

```js
const pricePerProduct = 45;
const numberOfProducts = 135;
const totalPrice = pricePerProduct * numberOfProducts;
console.log(totalPrice); // = 6075
```

**8. Bygg en mening med variabler**

Skapa variabler för:

- produktnamn
- pris

Använd variablerna för att skriva ut en mening som berättar vad produkten heter och vad den kostar.

```js
const productName = 'Ferrari 40';
const price = 1500000;

// This can be written in a couple of different ways

// Alternative 1 - String concatenation, addition of strings to a new string
const description1 = 'This is an amazing car, the' + ' ' + productName + ' ' + 'only costs around' + ' ' + price + '$'

// Alternative 2 - String concatenation, include whitespaces in a better way, a little bit more readable,
const description2 = 'This is an amazing car, the ' +  productName + ' only costs around ' + price + '$'

// Alternative 3 - Template literal. Backticks are required here. This lets us include variables directly inside the string and improves readability.
const description3 = `This is an amazing car, the ${productName} only costs around ${price}$`;
```

[Till toppen](#grundläggande-javascript)

## Villkor

Villkor inom programmering används när vårt program ska utföra olika saker beroende på olika situationer. Dessa olika situationer kan uppkomma om till exempel datan som vi jobbar med varierar och ger olika utfall under programmets gång. Verktyget vi använder är  det som kallas för en if-sats (`if statement`).

Exempel på dessa är:

- Om en lägenhet har balkong eller inte. Programmet kanske hanterar det olika.
- Om en kund lyckas uppnå ett visst orderbelopp och låser upp en rabatt.
- Om en betalning går igenom eller inte.
- En användare filtrerar produkter på olika saker, då ska hemsidan visa det urvalet på olika sätt.

Verktygen ser ut så här:

En klassisk if/else-sats
```js
if (/* condition that is evaluated to true or false */) {
	// code block that executes if the condition above is true.
} else {
 // code block that executes if the condition is false.
}
```

Sen har vi även if/else-if/else-satser

```js
if (/* condition that is evaluated to true or false */) {
	// code block that executes if the condition above is true.
} else if ( /* another condition */) {
	// code block
} else if (/* another condition */) {
	// code block
} else {
 // code block that executes if none of the conditions above results in true
}
```
Det som händer ovan är att vi har massa villkor efter varandra och de körs i ordning så att säga, men endast ett kodblock i den här if-elseif-kedjan kan köras vid varje givet tillfälle. Så fort ett villkor utvärderas till sant så kommer dess kodblock att köras och efter det så hoppar man "ur" if-satsen och låter koden fortsätta med det som kommer sen.

Vill man inte ha en kedja som den ovan så kan man istället lägga massa if-satser efter varandra.

```js
const age = 30;

if (age === 30) { // true, code block will run!
	console.log("Great, you are getting older...")
}

if (age > 30) { // false, code block will not run
	console.log("Well, you ain't getting younger..")
}

if (age < 30) { // false, code block will not run
	console.log("Let's enjoy still being young!")
}

```

I dessa if-checkar så har vi lite olika tecken vi jobbar med. Dessa kallas för  jämförelseoperatorer.

[Till toppen](#grundläggande-javascript)

### Jämförelseoperatorer

- `==` - Likhet mellan två värden, men den är inte strikt. Så 20 kan vara lika med "20". Den jämför värden, inte datatyper, och om datatyper skulle vara olika så kan JS försöka att konvertera något av dem för att "lösa" likheten.
- `===` - Strikt likhet mellan två värden där både värdet och datatypen måste vara lika. Alltså 20 och "20" är inte lika här.
- `>`, `<`, `<=`, `>=` - Jämförelser, större eller mindre, eller större än eller lika med, eller mindre än eller lika med.
- `!=` - Olikhet men inte strikt.
- `!==` - Olikhet men strikt.

[Till toppen](#grundläggande-javascript)

### Logiska operatorer

Det finns även något som kallas för logiska operatorer när vi pratar om if-checks. De används för att kombinera olika villkor i en och samma if-check. Delvillkoren utvärderas från vänster till höger, men `&&` har högre prioritet än `||`. Använd parenteser för att tydliggöra hur villkoren grupperas.

- `&&` - Betyder AND, så något villkor  OCH ett annat villkor ska vara sant. Man kan kombinera två eller flera villkor i de här fallen. Om det första villkoret är falskt så kommer JS att strunta i att fortsätta med de andra villkoren eftersom alla måste vara sanna.
-  `||` - Betyder OR, så något villkor ELLER något annat villkor ska vara sant. Här gäller motsatsen från ovan, om det första (eller vilket som helst i ordningen) villkoret är sant så kommer den att strunta i de övriga.

Dessa två operatorer kan du kombinera godtyckligt men det blir givetvis mer komplicerat och svårläsligt desto fler du använder.

Låt oss ta ett exempel med OR

```js
let color = "red";

if (color === 'red' || color === "blue") {
	console.log("Yes, those are good colors for a car.");
} else {
 console.log("Ooh, bad color..");
}
```

Exempel med AND
```js
const name = 'niklas';
const lastName = 'Fähnrich';

if (name === 'niklas' && lastName === 'Fähnrich' ) {
	console.log('Amazing teacher!');
} else {
	console.log("Not so much");
}
```

[Till toppen](#grundläggande-javascript)

### Övningsexempel villkor

[Till toppen](#grundläggande-javascript)

## Arrays

Om en variabel var en låda som vi kan stoppa ner en sak i så är en array en byrålåda som innehåller flera lådor som oftast innehåller saker som relaterar till varandra. Till exempel en byrålåda med kläder. En av lådorna kan innehålla underkläder, tröjor, jeans, byxor, strumpor, linnen och så vidare. Det är helt enkelt ett verktyg som gör att vi kan hantera större mängder data som har med varandra att göra.

Låt oss ta ett exempel med typ namn. Låt oss skapa fyra namn med fyra olika variabler först.

```js
const name1 = 'niklas';
const name2 = 'henrik';
const name3 = 'erik';
const name4 = 'sofia';

console.log(name1, name2, name3, name4)
```

Detta funkar ju fint, men kan bli lite jobbigt att hantera om vi vill manipulera dessa namn likvärdigt. Till exempel om vi vill lägga till ett efternamn så måste vi ändra i de fyra olika variablerna var för sig. Om vi istället gör om till en array så kan vi hantera namnen som en enhet istället kan vi säga. Hur skapar man då en array?

```js
let names = []; // We use square brackets to create an array. Here we create an empty array.

names = ['niklas', 'henrik', 'erik', 'sofia'];
console.log(names) // ['niklas', 'henrik', 'erik', 'sofia']
```

Utskriften som vi får kan vi identifiera som en array eftersom den har hakparenteser runt sig. Varje namn i denna array kallas för ett element av en array, och vi kan räkna till fyra namn här så alltså har vi fyra stycken element i denna array. Den har alltså en längd på fyra.  I browser inspector så kan vi se detta genom att utvidga arrayen genom att klicka på pilen som finns.

Utskriften ser ut något så här:

```
1.  ['niklas', 'henrik', 'erik', 'sofia']
	 0: "niklas"
	1: "henrik"
    2: "erik"
    3: "sofia"
length: 4
```

Vi kan även se här att varje element har fått en position som börjar från 0 och räknas uppåt. Detta kallas för en indexposition. Vi kan säga att en array i JS är nollindexbaserad.

Vi ser att "niklas" har indexposition 0 medan "sofia" har indexposition 3 och dessa kan vi sen använda för att komma åt värdena i denna array.

### Komma åt värden i en array

Hur kan vi då komma åt de olika elementen? Med en variabel är det ju enkelt, då skriver vi bara variabelnamnet så kan vi göra olika saker med den, ge den nytt värde om det är en "let", lägga in den i en if-check, eller något annat. Med element i en array så använder vi dess indexposition istället.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
// index position in an array starts from zero - [ 0, 1, 2, 3, 4, 5....]

// To access an element, use square brackets
console.log(names[0]); // 'niklas'
console.log(names[2]); // 'erik'
```

Försöker vi komma åt en indexposition som inte finns i denna array, till exempel indexposition 5, så får vi värdet `undefined`.

Det finns ett annat sätt man kan använda för att komma åt ett specifikt värde i en array, och det är ett metodanrop (ny term som ni inte har hört tidigare - tänk inte så mycket på det nu). Den metoden heter `at()`. Funkar på samma sätt som att använda hakparenteser, med tillägget att du kan använda negativa värden och på så sätt börja räkna från längst bak i arrayen istället.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];

console.log(names.at(0)); // 'niklas'
```

### Manipulera värden i en array

Om vi ska ändra ett värde då? Vi kan ändra flera värden åt gången men då måste vi börja använda oss av andra verktyg som till exempel en loop. Men när det gäller enskilda värden så funkar användningen av hakparenteser suveränt.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
console.log(names); // ['niklas', 'henrik', 'erik', 'sofia']

names[0] = "peter";
console.log(names); // ['peter', 'henrik', 'erik', 'sofia']

names[2] = 'johan';
console.log(names); // ['peter', 'henrik', 'johan', 'sofia']
```

Arrayer är en speciell datatyp, vilket innebär att alla arrayer delar funktionalitet på olika sätt.  Till exempel så är `at()` en metod som alla arrayer har tillgång till oavsett innehållet i arrayen. En funktionalitet som alla arrayer kan utnyttja. Det finns även en egenskap som alla arrayer har också, och det är längden på arrayen, alltså hur många element som arrayen innehåller. Den kommer vi åt genom att skriva `.length` efter arrayen.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
const numberOfElements = names.length;
console.log(numberOfElements); // 4
```

### Övningsexempel arrayer

**1. Skapa en array och skriv ut några element**

```js
const foods = ['pancakes', 'meatballs', 'taco', 'sushi', 'hamburger'];

console.log(foods[0]);
console.log(foods[2]);
console.log(foods.at(4));
```

**2. Ändra ett element i en array**

```js
const cities = ['stockholm', 'gothenburg', 'malmo', 'copenhagen'];
console.log(cities);

cities[0] = 'helsinki';
console.log(cities);
```

**3. Skriv ut det första och sista elementet med `.length`**

```js
const names = ['niklas', 'henrik', 'erik', 'sofia']; // The length is 4

console.log(names.at(0));

// names.length returns 4, but there is no element at index 4.
console.log(names[names.length]); // undefined

// Subtract 1 to get the last valid index.
console.log(names[names.length - 1]); // 'sofia'
```

**4. Kontrollera längden på en array**

```js
const products = ['tv', 'playstation', 'xbox', 'laptop'];
const numberOfProducts = products.length;

console.log(`There are ${numberOfProducts} products available!`);

if (numberOfProducts > 5) {
    console.log('A lot of products available');
} else {
    console.log('Limited amount of products available');
}
```

[Till toppen](#grundläggande-javascript)

## Loopar

Loopar är vårt främsta verktyg för att arbeta med arrayer. Men loopar kan självfallet användas till massa saker där vi behöver iterera kod ett bestämt eller obestämt antal gånger. Allt beror givetvis på situationen i koden. Men det är som det låter, ett stycke kod upprepas tills vi anser att koden har kört färdigt.

### for-loop

En for-loop är en loop som utgår ifrån ett initialt värde och ett villkor som är kopplat till det initiala värdet. Inför varje iteration så utvärderas detta villkor och avgör om loopen ska iterera vidare eller inte.

Vi tar ett exempel på en gång:

```js
const colors = ['red', 'blue', 'green'];
```

Vi vill nu skriva ut varje färg i denna array i konsolen, hur gör vi då? Vi kan skriva en console.log för varje element såklart, men har vi mer än 10 stycken element till exempel, så blir det mycket kod att skriva.

```js
console.log(colors[0]); // red
console.log(colors[1]); // blue
console.log(colors[2]); // green
```

Men en loop så kan det se ut så här istället:

```js
for(let i = 0; i < colors.length; i++) {// Strange syntax..
	console.log(colors[i])
};

// Output
// red
// blue
// green
```

Okej, så det fungerade utmärkt. Detta var alltså en så kallad `for-loop`. Dess syntax är ny och ser krånglig ut men här är en beskrivning:

- `for` - Reserverat nyckelord som säger till JS att här ska vi köra en loop.
- `let i = 0` - Detta deklarerar en räknarvariabel och sätter dess startvärde innan loopen börjar. Vi använder oss av index här så "i" i det här fallet motsvarar index-position 0, det är där vi vill starta loopen.
- `i < colors.length` - Detta är villkoret som anger hur länge loopen ska köras. Så länge villkoret är sant så fortsätter den att köra, men så fort det blir falskt så avbryter den. I det här fallet ska "i" vara mindre än längden på colors-arrayen.
- `i++` - Denna del kallas för "the afterthought", alltså det som ändras efter varje iteration av loopen. I det här fallet ska variabeln "i" öka sitt värde med 1 hela tiden.
- Sen har vi kodblocket som anger vilken kod som körs i varje iteration.

Så detta är alltså en for-loop där vi använder oss av indexvärden. Passar perfekt när vi är intresserade av just indexposition av varje givet element i arrayen och när vi vet att loopen endast ska köras ett bestämt antal gånger, alltså den ska köras lika många gånger som det finns element i arrayen.

### while-loop

En while-loop fungerar ungefär som en for-loop men den använder sig av ett villkor på ett litet annat sätt. Det första som händer är att while-loopen undersöker villkoret. Är det sant så körs den första iterationen, sen inför varje ny iteration så utvärderar den villkoret igen, är det fortfarande sant så fortsätter den, är det falskt så avslutar den.  Man får tänka sig att: "så länge något är sant så vill vi fortsätta iterera loopen".

Syntax:

```js
while (/* condition */) {
	// Run code
}
```

Vi kan ta ett exempel som visar hur detta funkar. Ta en räknare till exempel. Vi utgår ifrån ett värde som är 0, och så räknar vi upp det tills det blir 100, och sen avslutar vi den.

```js
let count = 0;

while (count < 100) {
	count++
	// count = count + 1; // Same thing as above
	console.log(count);
}
```

Så i detta fall så skriver vi ut 1-100 i konsolen, och när väl `count` blir 100, så kommer villkoret att gå ifrån sant till falskt och då kommer loopen avslutas. Här gäller det att vara försiktig, eftersom vi måste på något sätt trigga att villkoret slår över till falskt någon gång, annars har vi något som kallas för en oändlig loop, och det är inte bra. Ta samma exempel som ovan men vi slarvar med villkoret.

```js
let count = 0;

while (count >= 0) {
	count++
	// count = count + 1; // Same thing as above
	console.log(count);
}
```

Detta resulterar i en oändlig loop och det vill vi helst undvika för det kan göra att datorn kraschar till slut då dess minne kan käkas upp.

En while-loop kan användas som en for-loop, men med lite fler rader kod.

```js
const colors = ['red', 'blue', 'green'];
let index = 0;

while (index < colors.length) {
	console.log(colors[index]);
	index++;
}
```

Detta funkar fint men är lite mer "boilerplate" än en vanlig for-loop. Minnesregel, använd for-loop när ni jobbar med arrayer, och en while-loop när ni jobbar med annan typ av kod.

### Övningsexempel loopar

**1. Räkna från 1 till 10**

```js
for (let count = 1; count <= 10; count++) {
    console.log(count);
}
```

**2. Räkna baklänges från 10 till 1**

```js
for (let count = 10; count > 0; count--) {
    // count-- is the same as count = count - 1
    console.log(count);
}
```

**3. Skriv ut jämna tal**

```js
for (let count = 1; count <= 20; count++) {
    if (count % 2 === 0) {
        console.log(count);
    }
}
```

**4. Skriv ut alla maträtter**

```js
const foods = ['tacos', 'hamburger', 'hotdogs', 'pancakes'];

for (let index = 0; index < foods.length; index++) {
    console.log(foods.at(index));
}
```

**5. Skriv ut varje maträtt och dess indexposition**

```js
const foods = ['tacos', 'hamburger', 'hotdogs', 'pancakes'];

for (let index = 0; index < foods.length; index++) {
    const currentFood = foods[index];
    const text = `${index}: ${currentFood}`;
    console.log(text);
}
```

**6. Sök efter ett namn i en array**

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
const targetName = 'niklas';

for (let index = 0; index < names.length; index++) {
    if (names[index] === targetName) {
        const successMessage = `The name '${targetName}' you are looking for exists!`;
        const successMessage2 = 'The name ' + targetName + ' you are looking for exists!';

        console.log(successMessage);
        console.log(successMessage2); // String concatenation also works
    }
}
```

**7. Räkna hur många tal som är större än 10**

```js
const numbers = [4, 60, 34, 134, 30, 5, 7, 14, 2, 3];
let count = 0;

for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];

    if (currentNumber > 10) {
        count++;
    }
}

const text = `There are ${count} numbers that are greater than 10.`;
console.log(text);
```

[Till toppen](#grundläggande-javascript)

## Objekt

Ett objekt är något som vi kan jobba med som en enhet i vårt program. Vi känner ju till variabler och de olika värdena en variabel kan innehålla. Till exempel kan vi prata om en färg, en ålder, en längd, en vikt och så vidare. Allt detta är olika självständiga egenskaper. Om vi skulle prata om en bil till exempel så har den massa egenskaper.

```js

// volvo
const carColorVolvo = 'red';
const carModelVolvo = 'v70';
const carMakeVolvo = 'volvo';
const horsepowersVolvo = 320;
const carYearVolvo = 2016;

//saab
const carColorSaab = 'gul';
const carModelSaab = '95';
const carMakeSaab = 'saab';
const horsepowersSaab = 150;
const carYearSaab = 2009;

//volkswagen
const carColorVolkswagen = 'navy';
const carModelVolkswagen = 'sharan';
const carMakeVolkswagen = 'volkswagen';
const horsepowersVolkswagen = 200;
const carYearVolkswagen = 2015;
```

Alla dessa är egenskaper på en bil, vi kan hitta på tusen till om vi vill. Men poängen här är att det blir svårt att hantera alla dessa egenskaper en och en hela tiden. Om vi vill hantera 10 bilar i en array, hur gör vi då till exempel?

```js
const cars = [carColorVolvo, carModelVolvo, carColorSaab, carModelSaab]; // Valid JavaScript, but the properties are not grouped by car.
```

Denna struktur kommer ju falla ihop ganska snabbt när vi ska jobba med denna array. Hur ska vi kunna särskilja på de olika bilarna i denna array? Jag kanske vill hitta färgen på volkswagen specifikt, hur hittar jag den?

Det blir knepigt hur man än vrider och vänder på det. Därför ska vi introducera objekt! Ett objekt är något som vi kan "ta" på som vi kan samla olika egenskaper under.

```js
const volvo = {
	color: 'red',
	model: 'v70',
	make: 'volvo',
	horsePower: 320,
	year: 2016
}

const saab = {
	color: 'gul',
	model: '95',
	make: 'saab',
	horsePower: 150,
	year: 2009
}

const volkswagen = {
	color: 'navy',
	model: 'sharan',
	make: 'volkswagen',
	horsePower: 200,
	year: 2015
}
```

Ovan har vi samlat ihop de olika egenskaperna på de olika bilarna i objekt som vi kan arbeta med. Varje objekt har ett bestämt antal egenskaper, även kallat "properties" eller "attributes".

Att samla ihop dessa i en array blir nu mycket enklare.

```js
const cars = [volvo, saab, volkswagen];
```

Att loopa igenom dessa blir nu enklare, eftersom vi vet att varje bil är en "enhet" som innehåller de olika egenskaperna. Så vill vi hitta bilen som är en volvo så kan vi med en enkel if-sats hitta detta objekt.

```js
for (let index = 0; index < cars.length; index++) {
	const currentCar = cars[index];

	if (currentCar.make === 'volvo') {
		console.log(currentCar)
	}
}
```

Objekt är kort och gott en samling av relaterade egenskaper samlade under en "enhet". Vi skulle kunna dra en parallell till SQL här. En array av liknande objekt kan jämföras med en tabell. Varje objekt motsvarar en rad, egenskaperna motsvarar kolumnerna och egenskapernas värden motsvarar värdena i radens celler.

[Till toppen](#grundläggande-javascript)

## Funktioner

Funktioner har lite samma syfte som objekt. Där objekt samlar ihop relaterade egenskaper till en "enhet" så klumpar funktioner ihop kod till en egen enhet. Denna kod kan vara något som man gör väldigt många gånger. Till exempel en uträkning. I stället för att göra samma uträkning om och om igen så kan man lägga uträkningen i en funktion och på så sätt återanvända den i olika situationer. Detta introducerar lite nya termer som vi ska använda oss av.

### Funktioner utan parametrar och returvärde

Syntaxen är enkel, ett nyckelord, namn, parenteser och ett kodblock.

```js
function greeting () {
	console.log("Greetings");
}
```

Detta gör att JS skapar upp en variabel, som den vet är en anropningsbar funktion, och sparar den i minnet. Funktioner körs inte av sig själva, utan vi som utvecklare, eller koden, måste anropa den här funktionen för att dess kodblock ska köras. För att anropa en funktion, skriv dess namn och lägg till parenteser.

```js
greeting(); // Will log 'Greetings' in the console.
```

Denna funktion är nu återanvändbar så vi kan anropa den hur många gånger vi vill i vår kod.

```js
greeting();
greeting();
greeting();
greeting();
greeting();
```

### Funktioner med parametrar

Ny term, parametrar. Vad är det för något? Jo, det är data som skickas med till funktionen när den ska köras. Så har vi en funktion, som kör någon typ av kod som är beroende av data utifrån så måste denna data tillföras på något sätt, och det görs via det som kallas för parametrar. Denna parameter skickas in till funktionen via dess parentes, och vi kan skicka med ett godtyckligt antal parametrar, men vi kan börja med en.

```js
function greetingWithName (name) {
	console.log(`Greetings to you, ${name}`);
}
```

Så anropar vi denna med lite olika namn:

```js
greetingWithName('Niklas'); // Greetings to you, Niklas
greetingWithName('Henrik'); // Greetings to you, Henrik
greetingWithName('Erik'); // Greetings to you, Erik
```

Det som händer här är att när vi skickar med en sträng med ett namn så kommer JS automatiskt att lägga det värdet i `name`-variabeln i funktionen, så att vi tillåts använda den inuti kodblocket hur vi vill.

Låt oss ta ett annat exempel, en additionsfunktion! En addition sker ju mellan minst två tal, så det känns rimligt att skicka med två tal till en funktion, så att den kan summera dem till något. Tänk på att kommaseparera de olika parametrarna om det är flera.

```js
function add (num1, num2) {
	const sum = num1 + num2;
	console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
```

Låt oss ta ett annat exempel. Jag vill konvertera svenska mil till amerikanska miles.

```js
function convertMilesToAmericanMiles (miles) {
	const americanMiles = miles * 6.21371;
	console.log(`${miles} Swedish mil equals ${americanMiles} American miles`);
}
```

Denna funktion kan vi nu använda hur många gånger vi vill och konvertera alla möjliga milantal till amerikanska miles.

### Funktioner med parametrar och returvärde

Om parametrar är datan vi skickar in till en funktion så är returvärdet det som funktionen skickar tillbaks till oss. De funktionerna ovan skickade inte tillbaks något till oss, utan de utförde bara någon form av logik.

Exempel på detta, låt oss skapa en funktion som tar emot en array av olika tal, och returnerar summan av alla dessa tal i arrayen.

```js
function calculateSumOfArray (array) {
	let sum = 0;

	for(let i = 0; i < array.length; i++) {
		const currentNumber = array[i]
		sum = sum + currentNumber;
	}

	return sum;
}
```

För att returnera något från en funktion så använder man nyckelordet `return`. Detta returvärde är sen något vi kan använda i resten av vår kod om vi sparar undan det i en egen variabel. Gör vi inte det, så kommer funktionen att köras som vanligt, men returvärdet kommer inte att användas.

```js
const numbers = [1,2,3,4,5,7,8,9,10];
const sum = calculateSumOfArray(numbers);
console.log(sum)
```

Här väljer vi att ta hand om returvärdet genom att lägga det i variabeln `sum`. När vi har den så kan vi göra vad vi vill med den, i det här fallet så skriver vi bara ut den i konsolen.

[Till toppen](#grundläggande-javascript)
