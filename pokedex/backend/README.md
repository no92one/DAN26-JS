# Day 17: A Pokemon API with Express

In this project, we use JavaScript and Express to build an API that returns Pokemon data. The guide follows the same order as the code-along, starting with a test endpoint and gradually adding routes, route parameters, array searches, validation, and useful error responses.

By the end, you should be able to explain how a request reaches an endpoint, read a route parameter, search an array, and send either data or an error response.

## 1. Start the backend

Open a terminal in the `backend` folder and install the dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

You can also start it directly:

```bash
node server.js
```

If nodemon is installed globally, it can restart the server whenever a file is saved:

```bash
nodemon server.js
```

Open [http://localhost:3000/test](http://localhost:3000/test) in a browser. The response should be:

```json
{ "message": "It works!" }
```

Keep the terminal running while using the API. Press `Ctrl+C` to stop the server.

## 2. Understand the backend files

- [`server.js`](server.js) creates the server and defines the endpoints.
- [`data.js`](data.js) exports the first 25 Pokemon and the 15 original Generation 1 types.
- [`package.json`](package.json) lists the project dependencies and scripts.
- `package-lock.json` records the exact installed dependency versions.
- `node_modules/` is created by `npm install` and contains the installed packages.

Each Pokemon in `data.js` has an `id`, a `name`, and a `type` array. A type is stored in an array because some Pokemon have two types.

The project does not use a database. Its data comes directly from the arrays in `data.js`.

## 3. Create the Express server

At the top of `server.js`, import Express, CORS, and the data:

```js
import express from "express";
import cors from "cors";
import { pokemon, types } from "./data.js";
```

The `"type": "module"` setting in `package.json` allows `.js` files to use `import` and `export`.

Create the Express application:

```js
const app = express();
```

Calling `express()` creates the application that represents the server. We use `app` to add middleware, define endpoints, and start listening for requests.

### Enable CORS

CORS means **Cross-Origin Resource Sharing**. It lets a browser frontend on another origin, such as another port, read responses from this API.

```js
app.use(cors());
```

`app.use()` adds middleware: a function that runs while a request passes through the application. Calling `cors()` without options allows every origin, which is useful while developing this project.

## 4. Follow a request and response

A **request** is a message sent by a client, such as a browser, to the server. A **response** is the answer sent back by the server.

An endpoint combines an HTTP method and a path. This project starts with GET endpoints, which retrieve data without creating, changing, or deleting it.

```js
app.get("/test", function (req, res) {
  res.json({ message: "It works!" });
});
```

`app.get()` receives two main arguments:

1. The endpoint path as a string.
2. A callback function that Express runs when a GET request matches the path.

The callback receives two objects:

- `req` means **request** and contains information about the incoming request.
- `res` means **response** and provides methods for answering the client.

`res.json(data)` sends JSON and ends the response. JSON is a text format commonly used to exchange data between a backend and frontend.

All callbacks in this project use regular `function` syntax.

## 5. Get all Pokemon

`GET /pokemon` returns the complete Pokemon array:

```js
app.get("/pokemon", function (req, res) {
  res.json(pokemon);
});
```

When the frontend requests `http://localhost:3000/pokemon`, it receives every Pokemon in the array.

## 6. Get the number of Pokemon

`pokemon.length` contains the number of items in the array:

```js
app.get("/pokemon/count", function (req, res) {
  return res.json({ count: pokemon.length });
});
```

The response is an object:

```json
{ "count": 25 }
```

## 7. Get a random Pokemon

```js
app.get("/pokemon/random", function (req, res) {
  if (pokemon.length === 0) {
    return res.status(404).json({ error: "No pokemon available" });
  }

  const randomIndex = Math.floor(Math.random() * pokemon.length);
  return res.json(pokemon[randomIndex]);
});
```

`Math.random()` returns a number from `0` up to, but not including, `1`. Multiplying it by the array length creates a number within the array's range. `Math.floor()` rounds the number down to a valid array index.

For example:

```js
Math.floor(24.65); // 24
Math.floor(3.9);   // 3
```

The empty-array check prevents the endpoint from trying to retrieve a Pokemon when none are available.

### Why route order matters

Express checks routes from top to bottom. Keep `/pokemon/count` and `/pokemon/random` above `/pokemon/:id`. Otherwise, Express could treat the words `count` and `random` as ID values.

## 8. Get one Pokemon by ID

In `/pokemon/:id`, `:id` is a **route parameter**. It is a placeholder for a value supplied in the URL.

```js
app.get("/pokemon/:id", function (req, res) {
  const id = req.params.id;
});
```

For a request to `/pokemon/25`, Express creates this value:

```js
req.params.id; // "25"
```

Express stores route parameters in `req.params`. Route parameters are strings, even when they contain digits.

### Convert the ID to a number

The Pokemon objects store their IDs as numbers, so convert the route parameter before comparing it with those IDs:

```js
const idAsANumber = parseInt(id);
```

For example:

```js
parseInt("25"); // 25
```

### Validate the ID

```js
if (Number.isNaN(idAsANumber) || idAsANumber < 0) {
  return res.status(400).json({
    error: "Invalid ID. Please provide a positve whole number.",
  });
}
```

- `Number.isNaN(idAsANumber)` is `true` when the conversion did not produce a number.
- `idAsANumber < 0` is `true` for a negative number.
- `||` means **or**, so either invalid condition produces the error.
- Status `400` means **Bad Request**.
- `return` stops the callback after sending the response.

### Alternative 1: A normal `for` loop

This is the first search approach used in the code-along:

```js
let foundPokemon = null;

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].id === idAsANumber) {
    foundPokemon = pokemon[i];
  }
}
```

The loop visits each Pokemon. When an ID matches, it stores that Pokemon in `foundPokemon`. If no match exists, the value remains `null`.

### Alternative 2: The `find()` method

The same search can later be written with `find()`:

```js
const foundPokemon = pokemon.find(function (item) {
  return item.id === idAsANumber;
});
```

`find()` checks items until its callback returns `true`, then returns that item. It returns `undefined` if no match exists.

Use only one alternative at a time because both create a variable named `foundPokemon`.

### Handle an ID that does not exist

```js
if (foundPokemon === null) {
  return res.status(404).json({ error: "Pokemon not found" });
}

return res.json(foundPokemon);
```

Status `404` means **Not Found**. A number can pass validation but still be missing from the data. For example, Pokemon number 999 is not in this array.

## 9. Lesson exercise: get a Pokemon by name

Pause the code-along here and let students create this endpoint:

```js
app.get("/pokemon/byName/:name", function (req, res) {
  // Read req.params.name.
  // Find the matching Pokemon.
  // Return 404 if no Pokemon was found.
  // Return the Pokemon if it was found.
});
```

Ask students to handle uppercase letters, lowercase letters, surrounding spaces, and a name that does not exist.

### Prepare the name for comparison

```js
const name = req.params.name.trim().toLowerCase();
```

`trim()` removes spaces from the beginning and end. `toLowerCase()` makes the comparison case-insensitive.

### Alternative 1: A normal `for` loop

```js
let foundPokemon = null;

for (let i = 0; i < pokemon.length; i++) {
  const currentPokemonName = pokemon[i].name.trim().toLowerCase();

  if (currentPokemonName === name) {
    foundPokemon = pokemon[i];
  }
}
```

### Alternative 2: The `find()` method

This is the shorter solution used after reviewing the exercise:

```js
const foundPokemon = pokemon.find(function (p) {
  return p.name.trim().toLowerCase() === name;
});
```

`find()` is a built-in array search. Its callback runs for each current item and must return `true` or `false`. The first item that returns `true` becomes the result.

If nothing matches, `find()` returns `undefined`:

```js
if (foundPokemon === null || foundPokemon === undefined) {
  return res.status(404).json({
    error: `Pokemon with name ${name} was not found`,
  });
}

return res.json(foundPokemon);
```

### Choose clear endpoint names

`byName` tells the reader how the endpoint searches and distinguishes it from `/pokemon/:id`. Creating both `/pokemon/:id` and `/pokemon/:name` would not work as intended because both routes have the same URL shape.

## 10. Continue with Pokemon types

The following endpoints are natural next steps after the name exercise.

### Get all available types

```js
app.get("/types", function (req, res) {
  return res.json(types);
});
```

`GET /types` returns the available Generation 1 types.

### Get Pokemon by type

```js
app.get("/pokemon/byType/:type", function (req, res) {
  const type = req.params.type.trim().toLowerCase();
  const typeWithCapitalLetter = type.charAt(0).toUpperCase() + type.slice(1);

  if (!types.includes(typeWithCapitalLetter)) {
    return res.status(400).json({
      error: "Invalid type. See /types for available types.",
    });
  }

  const matchingPokemon = pokemon.filter(function (item) {
    return item.type.includes(type);
  });

  return res.json(matchingPokemon);
});
```

The `types` array begins each type with a capital letter, while the Pokemon objects store their types in lowercase. The two variables prepare the requested type for both comparisons.

An unknown type is invalid input, so the endpoint returns status `400`.

### Alternative: find all matches with a `for` loop

```js
const matchingPokemon = [];

for (let i = 0; i < pokemon.length; i++) {
  if (pokemon[i].type.includes(type)) {
    matchingPokemon.push(pokemon[i]);
  }
}
```

`includes()` checks each Pokemon's type array. `push()` adds each matching Pokemon to the result. There is no `break` because this endpoint needs every match.

`filter()` performs the same job by returning a new array containing every item for which its callback returns `true`. If no Pokemon match a valid type, it returns an empty array.

## 11. Understand responses and errors

| Status | Meaning in this API | Example |
| --- | --- | --- |
| `200` | The request succeeded | `/pokemon/25` |
| `400` | The client supplied invalid input | `/pokemon/abc` |
| `404` | A Pokemon or endpoint was not found | `/pokemon/999` |

`res.status(code)` selects the HTTP status code but does not send a response by itself. Combine it with `res.json()`:

```js
return res.status(404).json({ error: "Pokemon not found" });
```

The `return` also stops the callback. This prevents later code from trying to send a second response.

### Optional catch-all response

A final middleware can handle requests that did not match any endpoint:

```js
app.use(function (req, res) {
  return res.status(404).json({ error: "Endpoint not found." });
});
```

Keep this after every endpoint because Express checks the file from top to bottom. Without a path, `app.use()` can handle unmatched requests for any HTTP method.

## 12. Start listening for requests

At the bottom of `server.js`, start the server on port 3000:

```js
app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
```

The callback runs once the server is ready. The API is available at `http://localhost:3000`.

## 13. Try the endpoints

Use these paths after `http://localhost:3000`:

| Method and path | Expected result |
| --- | --- |
| `GET /test` | `{ "message": "It works!" }` |
| `GET /pokemon` | All 25 Pokemon |
| `GET /pokemon/count` | `{ "count": 25 }` |
| `GET /pokemon/random` | One random Pokemon |
| `GET /pokemon/25` | Pikachu |
| `GET /pokemon/abc` | `400`: invalid ID |
| `GET /pokemon/999` | `404`: Pokemon not found |
| `GET /pokemon/byName/PIKACHU` | Pikachu despite the uppercase input |
| `GET /pokemon/byName/unknown` | `404`: Pokemon not found |
| `GET /types` | All available types after that endpoint is added |
| `GET /pokemon/byType/Fire` | Fire-type Pokemon after that endpoint is added |
| `GET /pokemon/byType/unknown` | `400`: invalid type after that endpoint is added |

For practice, follow `/pokemon/25` through the code and explain every step: matching the route, reading the parameter, converting it, validating it, searching the array, and sending the response. Then try the alternative array methods and confirm that the responses remain the same.
