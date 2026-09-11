
# Repetition av variabler och villkor

## Innehåll

- [Variabler](#variabler)
  - [Övningsexempel](#övningsexempel)
- [Villkor](#villkor)
  - [Jämförelseoperatorer](#jämförelseoperatorer)
  - [Logiska Operatorer](#logiska-operatorer)
  - [Övningsexempel](#övningsexempel-1)
- [Arrays](#arrays)
  - [Komma åt värden i en array](#komma-åt-värden-i-en-array)
  - [Manipulera värden i en array](#manipulera-värden-i-en-array)

## Variabler

Vad är en variabel? Tänk er en lagerlokal med massa tomt utrymme, i detta utrymme så kan vi skicka in massa lådor som vi kan stoppa saker i. En variabel är precis en sådan låda, och i denna låda kan vi välja att ha tomma eller att fylla med innehåll. Men varje låda kan endast en sak. Dessa saker motsvaras av de olika datatyperna som finns i JS:

- `Number` - Motsvarar ett heltal eller ett decimaltal. Maxgränsen för detta tal är väldigt väldigt stort så vi behöver nästan aldrig tänka på storleken på detta number. Det kan vara 1, 400, 75000, eller några miljoner eller miljarder.
- `String` - Ett samling karaktärer, alltså alla typer av texter. Till exempel, Niklas, Henrik, Erik och Sofia. Men det kan även vara lägre texter så som: "Jag heter Niklas och gillar att spela handboll". Det speciella med dessa är att strängar alltid börjar och slutar med ett citattecken, det kan vara enkelcitat, dubbelcitat eller så kallad "backticks". 
- `Boolean` - En boolean har bara två värden, antingen  `true` eller `false`. Används primärt när man jobbar med if-statser eller ska spara passande värden, till exempel, har denna lägenhet balkong? Ja eller nej, motsvaras då av en boolean.
- `Object` - En lite mer avancerad datatyp som ni kommer jobba med mer senare, men den klumpar ihop olika datavärden i ett och samma "samlingsobjekt". Typ en bil kan man se som ett objekt. Den har ju flera olika egenskaper/attribut, typ färg, antal hjul, hästkrafter, modell, märke och så vidare. 

Så tillbaks till variabler, dessa datatyper kan ni då stoppa ner i dessa "lådor". Hur gör man det då? I JS så finns det dedikerade nyckelord för att skapa dessa "lådor", som vi då kallar för variabler.

Dessa två är  `const` och `let`. Dessa är reserverade av JS för att skapa just variabler, så får enkla enheter att jobba med i vår kod. Vi kan alltså inte använda de till något annat, som till exempel att använda dem för att namnge någon variabel.

Skillnaden mellan dessa är att `const` inte tillåtas att deklareras om medan `let` tillåter det.

```js
const name = 'Niklas'; // A simple string
name = 'Henrik'; // Won't work, since we can't re-declare this, we can't change the value here.

let lastName = 'Svensson'; // Totally fine
lastName = 'Johansson'; // Totally fine as well, we have given the variable a new name here.
```

I de flesta fallen så kommer ni alltid att använda `const` eftersom variabler sällan ändras under ett programs gång. Men det finns givetvis lägen för att använda `let`också.

[Till toppen](#repetition-av-variabler-och-villkor)

### Övningsexempel
Vi kan prova att läsa några uppgifter som ni har fått tidigare bara för att öva kort på dessa.

2. Flera variabler
Skapa tre variabler som innehåller:
 - ditt namn
 - din ålder
 - din hemstad
Skriv ut alla tre variablerna med console.log() 

```js
const myName = 'Niklas';
const myAge = 35;
const village = 'Skurup';

console.log(nyName, myAge, villag); // This will write out the content of the variable or variabels in the console window inside the inspector in the browser.  
```

6. Räkna med variabler
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

8. Bygg en mening med variabler
Skapa variabler för:
- produktnamn
- pris
Använd variablerna för att skriva ut en mening som berättar vad produkten heter och vad den kostar.

```js
const productName = 'Ferrari 40';
const price = 1500000;

// This can be written in a couple of difference ways

// Alternative 1 - String concatenation, addition of strings to a new string
const description1 = 'This is an amazing car, the' + ' ' + productName + ' ' + 'only costs around' + ' ' + price + '$'

// Alternative 2 - String concatenation, include whitespaces in a better way, a little bit more readable, 
const description2 = 'This is an amazing car, the ' +  productName + ' only costs around ' + price + '$'

// Alternative 3 - String Literal, maybe it is called a template literal, don't remember. Backtics are requried here.It allows us to include variables inside the string. This gives most readablity.
const description3 = `This is an amazing car, the ${productName} only consts around ${price}$`; 
```

[Till toppen](#repetition-av-variabler-och-villkor)

## Villkor

Villkor inom programmering användas när vårt program ska utföra olika saker beroende på olika situationer. Dessa olika situationer kan uppkomma om till exempel datan som vi jobbar med varierar och ger olika utfall under progammets gång. Verktet vi använder är  det som kallas för en `if statement`.

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
 // code block that exectues if the condition is false.
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
 // code block that exectues if none of the condtions above results in true
}
```
Det som händer är ovan är att vi har massa villkor efter varandra och de körs i ordning så att säga, men endast ett kodblock i den här if-elseif-kedjan kan köras vid varje givet tillfället. Så fort en villkor utvärderas till sant så kommer dess kodblock att köras och efter det så hoppar man "ur" if-satsen och låter koden fortsätta med det som kommer sen.

Vill man inte ha en kedja som den ovan så kan man istället lägga massa if-satser eftervarandra.

```js
const age = 30;

if (age === 30) { // true, code block will run!
	console.log("Great, you are getting older...")
}

if (age > 30) { // false, code block will not run
	console.log("Well, you ain't getting younger..")
}

if (age < 30) { // false, code block will not runt
	console.log("Let's enjoy still being young!")
}

```

I dessa if-checkar så har vi lite olika tecken vi jobbar med. Dessa kallas för  jämförelseoperatorer.

[Till toppen](#repetition-av-variabler-och-villkor)

### Jämförelseoperatorer
- `==` - Likhet mellan två värden, men den är inte strikt. Så 20 kan vara lika med "20". Den jämför värden, inte datatyper, och om datatyper skulle vara olika så kan JS försöka att konvertera något av dem för att "lösa" likheten.
- `===` - Strikt likhet mellan två värden där både värdet och datatypen måste vare like. Alltså 20 och "20" är inte lika här.
- `>`, `<`, `<=`, `>=` - Jämförelser, större eller mindre, eller större och like, eller minde och lika.
- `!=` - Olikhet men inte strikt.
- `!==` - Olikhet men strikt.

[Till toppen](#repetition-av-variabler-och-villkor)

### Logiska Operatorer
Det finns även något som kallas för logiska operatorer när vi pratar om if-checks. De används för att kombinera olika villkor i en och samma if-check. Dessa kombinerade villkor utvärderas alltid från vänster till höger. 

- `&&` - Betyder AND, så något villkor  OCH ett annat villkor ska vara sant. Man kan kombinera två eller flera villkor i de här fallen. Om det första villkoret är falskt så kommer JS att strunta att fortsätta med de andra villkoren eftersom alla måste vara sanna.
-  `||` - Betyder OR, så något villkor ELLER något annat villkort ska vara sant Här fäller motsatsen från ovan, om det första (eller vilket som helst i ordningen) villkoret är sant så kommer den att strunta i de övriga.

Dessa två operatorer kan du kombinera godtyckligt men det blir givetvis med komplicerat och svårläsligt desto fler du använder.

Låt oss ta ett exempel men OR

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

[Till toppen](#repetition-av-variabler-och-villkor)

### Övningsexempel

[Till toppen](#repetition-av-variabler-och-villkor)

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

Utskriften som vi får kan vi identifiera som en array eftersom den har hakparanteser runt sig. Varje namn i denna array kallas för ett element av en array, och vi kan räkna till fyra namn här så alltså har vi fyra stycken element i denna array. Den har alltså en längd på fyra.  I browser inspector så kan vi se detta genom att utvidga arrayen genom att klicka på pilen som finns.

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

Vi se att "niklas" har indexposition 0 medan "sofia" har indexposition 3 och dessa kan vi sen använda för att komma åt värdena i denna array. 

### Komma åt värden i en array
Hur kan vi då komma åt de olika elementen? Med en variabel är det ju enkelt, då skriver vi bara variabelnamnet så kan vi göra olika saker med den, ge den nytt värde om det är en "let", lägga in den i en if-check, eller något annat. Med element i en array så använder vi dess indexposition istället.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
// index position in an array starts from zero - [ 0, 1, 2, 3, 4, 5....]

// To access a element, use sqauare brackets
console.log(names[0]); // 'niklas'
console.log(names[2]); // 'erik'
```

Försöker vi komma åt en indexposition som inte finns i denna array, till exempel indexpostion 5, så kommer det bli undefined i browers i alla fall. I andra program, typ visual studio code, så kanske det blir ett mer definierat error som dyker upp.

Det finns ett annat sätt man kan använda för att komma åt ett specifikt värde i en array, och det är ett metodanrop (ny term som ni inte har hört tidigare - tänk inte så mycket på det nu). Den metoden heter `at()`. Funkar på samma sätt som att använda hakparanteser, med tillägget att du kan använda negativa värden och på så sätt börja räkna från längs bak i arrayen istället.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];

console.log(namse.at(0)); // 'niklas'
```

### Manipulera värden i en array

Om vi ska ändra ett värde då? Vi kan ändra flera värden åt gången men då måste vi börja använda oss av andra verktyg som till exempel en loop. Men när det gäller enskilda värden så funkar användningen av hakparanteser suveränt.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
console.log(names); // ['niklas', 'henrik', 'erik', 'sofia']

names[0] = "peter";
console.log(names); // ['peter', 'henrik', 'erik', 'sofia']

names[2] = 'johan';
console.log(names); // ['peter', 'henrik', 'johan', 'sofia']
```

   Arrayer är en speciell datatyp, vilket innebär att alla arrayer delar funktionalitet på olika sätt.  Till exempel så är `at()` en metod som alla arrayer har tillgång till oavsett innehållet i arrayen. En funktionalitet som alla arrayer kan utnyttja. Det finns även engenskap som alla arrayer har också, och det är längden på arrayen, alltså hur många element som arrayen innehåller. Den kommer vi åt genom att skriva `.length` efter arrayen.

```js
const names = ['niklas', 'henrik', 'erik', 'sofia'];
const numberOfElements = names.length;
console.log(numberOfElements); // 4
```

[Till toppen](#repetition-av-variabler-och-villkor)
