# Day 17: Fetching and rendering Pokemon

This frontend uses Vite and plain JavaScript to request data from the Pokemon backend and render the results in the browser.

The code is separated into small files so each file has one clear responsibility:

1. `index.html` provides the page elements.
2. `main.js` selects those elements and connects browser events to functions.
3. `eventHandlers.js` fetches data and decides which render function to call.
4. `renderFunctions.js` updates what the user sees.
5. `style.css` controls the layout and appearance.

By the end, you should be able to follow this complete flow:

```text
User action → event listener → event handler → fetch → response → render function → updated page
```

## 1. Start the backend and frontend

The frontend needs the backend API to be running on `http://localhost:3000`.

Open a terminal in the backend folder:

```bash
npm install
npm start
```

Open another terminal in the frontend folder:

```bash
npm install
npm run dev
```

Vite prints the frontend URL in the terminal, usually `http://localhost:5173`.

## 2. Understand the frontend files

- [`index.html`](index.html) contains the initial HTML structure.
- [`src/main.js`](src/main.js) starts the application and adds event listeners.
- [`src/eventHandlers.js`](src/eventHandlers.js) contains the current fetch requests.
- [`src/renderFunctions.js`](src/renderFunctions.js) displays Pokemon and errors.
- [`src/api.js`](src/api.js) is currently empty and can later hold reusable API functions.
- [`src/style.css`](src/style.css) contains the page styles.
- [`package.json`](package.json) contains the Vite commands and dependency.

## 3. Start with the HTML

The page begins with an application container:

```html
<div id="app">
  <!-- The page interface lives here. -->
</div>
```

Inside it, the search section contains three controls:

```html
<section class="search">
  <select id="pokemon-type">
    <option value="">All types</option>
  </select>

  <form id="search-pokemon-by-name">
    <input id="pokemon-name" type="text" placeholder="Enter a Pokemon name" />
  </form>

  <button id="get-all-pokemons-btn" type="button">Get all Pokemons</button>
</section>
```

- The selector will later be used to choose a Pokemon type.
- The form lets the user search by name by typing and pressing Enter.
- The button retrieves every Pokemon.

The `results` element is where JavaScript displays responses:

```html
<main id="results">
  <p class="empty-message">No Pokemon currently displayed.</p>
</main>
```

The page loads `main.js` as a module:

```html
<script type="module" src="/src/main.js"></script>
```

Modules let us split the code into files and use `import` and `export`.

## 4. Select elements in `main.js`

Before adding events, JavaScript needs references to the relevant HTML elements:

```js
const nameFormEL = document.querySelector("#search-pokemon-by-name");
const buttonEl = document.querySelector("#get-all-pokemons-btn");
const nameInputEl = document.querySelector("#pokemon-name");
```

`document.querySelector()` finds the first element matching a CSS selector. An ID selector begins with `#`.

These variables refer to existing DOM elements; they do not create new elements.

## 5. Initialize the application

The `init()` function contains work that should happen once when the page starts:

```js
function init() {
  buttonEl.addEventListener("click", handleGetAllPokemons);

  nameFormEL.addEventListener("submit", function (event) {
    event.preventDefault();
    handleGetPokemonByName(nameInputEl.value);
  });
}

init();
```

Defining a function does not run it. The final `init()` call starts the initialization.

### Listen for the button click

```js
buttonEl.addEventListener("click", handleGetAllPokemons);
```

`addEventListener()` receives an event name and a callback. `handleGetAllPokemons` is passed as a function reference. It runs later when the button is clicked.

Do not write `handleGetAllPokemons()` here. The parentheses would run the function immediately while initializing the page.

### Listen for the form submission

```js
nameFormEL.addEventListener("submit", function (event) {
  event.preventDefault();
  handleGetPokemonByName(nameInputEl.value);
});
```

Pressing Enter inside the input submits the form. A browser normally reloads the page when a form is submitted. `event.preventDefault()` prevents that default reload so JavaScript can handle the search.

`nameInputEl.value` contains the text currently entered by the user. That value is passed to `handleGetPokemonByName()`.

## 6. Understand asynchronous functions

Fetching data takes time. The response may arrive quickly or after several seconds. JavaScript should be able to continue running while it waits.

An asynchronous function is declared with `async`:

```js
export async function handleGetAllPokemons() {
  // Fetch work happens here.
}
```

`await` pauses that asynchronous function until a promise settles:

```js
const response = await fetch("http://localhost:3000/pokemon");
```

It pauses only this function; it does not freeze the whole browser.

## 7. Fetch all Pokemon

The complete handler follows four steps:

```js
export async function handleGetAllPokemons() {
  const response = await fetch("http://localhost:3000/pokemon");

  if (response.ok === false) {
    console.error("ERROR LOG: Something went wrong with the fetch to this endpoint - /pokemon");
    return [];
  }

  const pokemons = await response.json();
  renderPokemons(pokemons);
}
```

### Step 1: Send the request

```js
const response = await fetch("http://localhost:3000/pokemon");
```

`fetch()` sends a GET request by default and returns a `Response` object.

### Step 2: Check the HTTP response

```js
if (response.ok === false) {
  console.error("ERROR LOG: Something went wrong with the fetch to this endpoint - /pokemon");
  return [];
}
```

`response.ok` is `true` for successful HTTP statuses from 200 through 299. Returning early prevents the rest of the handler from trying to render unsuccessful data.

### Step 3: Parse the JSON

```js
const pokemons = await response.json();
```

The response body arrives as JSON. `response.json()` parses it into a JavaScript value. This operation is also asynchronous, so it uses `await`.

### Step 4: Render the result

```js
renderPokemons(pokemons);
```

The handler retrieves the data, while the render function handles the DOM. Separating these responsibilities makes both functions easier to understand.

## 8. Fetch one Pokemon by name

The name from the form becomes part of the endpoint URL:

```js
export async function handleGetPokemonByName(name) {
  const response = await fetch("http://localhost:3000/pokemon/byName/" + name);
  const data = await response.json();

  if (response.ok === false) {
    const message = data.error;
    renderErrorMessage(message);
    return;
  }

  const pokemon = data;
  renderOnePokemon(pokemon);
}
```

For example, entering `Pikachu` creates this URL:

```text
http://localhost:3000/pokemon/byName/Pikachu
```

The backend sends either a Pokemon or an object containing an `error` property. The response body is parsed before the status check so the frontend can display the backend's error message.

On success, the same parsed data is assigned a clearer name and sent to `renderOnePokemon()`:

```js
const pokemon = data;
renderOnePokemon(pokemon);
```

## 9. Render a collection of Pokemon

All render functions use the same results container:

```js
const mainEl = document.querySelector("#results");
```

Start by removing the previous content:

```js
mainEl.innerHTML = "";
```

This prevents a new response from being added below an older response.

### Handle an empty array

```js
if (pokemons.length === 0) {
  const p = document.createElement("p");
  p.classList.add("empty-message");
  p.textContent = "Could not find any pokemons..";
  mainEl.appendChild(p);
  return;
}
```

- `document.createElement("p")` creates a paragraph element.
- `classList.add()` applies a CSS class.
- `textContent` sets safe text inside the element.
- `appendChild()` places the new element inside the results area.
- `return` stops the function because there are no Pokemon to loop through.

### Render each Pokemon with a loop

```js
for (let i = 0; i < pokemons.length; i++) {
  const p = pokemons[i];
  const pokemonEl = document.createElement("article");
  pokemonEl.classList.add("pokemon");

  pokemonEl.innerHTML = `
    <p>Name: ${p.name}</p>
    <p>Id: ${p.id}</p>
    <p>Type: ${p.type.join(", ")}</p>
  `;

  mainEl.appendChild(pokemonEl);
}
```

The loop creates one `<article>` for every Pokemon. Template literals insert the object's values into the HTML.

`p.type` is an array. `join(", ")` combines its items into readable text such as `fire, flying`.

## 10. Render one Pokemon

`renderOnePokemon()` follows the same pattern without a loop:

```js
export function renderOnePokemon(pokemon) {
  mainEl.innerHTML = "";
  const pokemonEl = document.createElement("article");
  pokemonEl.classList.add("pokemon");

  pokemonEl.innerHTML = `
    <p>Name: ${pokemon.name}</p>
    <p>Id: ${pokemon.id}</p>
    <p>Type: ${pokemon.type.join(", ")}</p>
  `;

  mainEl.appendChild(pokemonEl);
}
```

The all-Pokemon response is an array, so it needs a loop. The name endpoint returns one object, so it can be rendered directly.

## 11. Render an error message

```js
export function renderErrorMessage(message) {
  mainEl.innerHTML = "";

  const p = document.createElement("p");
  p.classList.add("error-message");
  p.textContent = message;
  mainEl.appendChild(p);
}
```

This function clears the old result, creates a paragraph, adds an error class, inserts the backend message, and appends it to the page.

## 12. Understand the CSS

The stylesheet gathers its colors into custom properties under `:root`:

```css
:root {
  --color-background: #f3f4f6;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-primary: #b91c1c;
}
```

Use a variable with `var()`:

```css
button {
  background-color: var(--color-primary);
  color: var(--color-surface);
}
```

This keeps repeated colors in one place and makes the theme easier to change.

The search controls use a vertical flex layout:

```css
.search {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
```

The results area has a minimum height, border, background, rounded corners, and a subtle shadow so it remains visible before any Pokemon are rendered.

## 13. Follow the complete flows

### Get all Pokemon

```text
Click button
→ click listener in main.js
→ handleGetAllPokemons()
→ GET /pokemon
→ response.json()
→ renderPokemons(pokemons)
→ Pokemon articles appear in #results
```

### Search by name

```text
Type a name and press Enter
→ submit listener in main.js
→ prevent the form reload
→ handleGetPokemonByName(input value)
→ GET /pokemon/byName/:name
→ renderOnePokemon() or renderErrorMessage()
→ the result appears in #results
```

## 14. What is implemented so far

The current frontend can:

- Retrieve and render all Pokemon when the button is clicked.
- Search for a Pokemon by name when the form is submitted.
- Render a backend error when a name is not found.
- Render an empty-state message for an empty Pokemon array.
- Display each Pokemon's name, ID, and types.

The type selector is present in the HTML but is not connected to JavaScript yet. A later step can fetch the available types, render them as `<option>` elements, listen for the selector's `change` event, and request Pokemon by type.

`api.js` is also empty. A later refactor can move repeated fetch logic out of `eventHandlers.js` and into reusable API functions.

## 15. Test the frontend

With both servers running, try these actions:

1. Click **Get all Pokemons** and confirm that all Pokemon are displayed.
2. Enter `Pikachu` and press Enter.
3. Enter `PIKACHU` and confirm that the backend's case-insensitive search still works.
4. Enter a name that does not exist and confirm that its error appears in the results area.
5. Repeat the actions and confirm that each new result replaces the previous one.

When debugging fetch code, use the browser's **Console** and **Network** panels. The Network panel shows the requested URL, HTTP status, and response body.
