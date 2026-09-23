import express from "express";
import cors from "cors";
import { pokemon, types } from "./data.js";

const app = express();

app.use(cors());

app.get("/test", function (req, res) {
  res.json({ message: "It works!" });
});

app.get("/pokemon", function (req, res) {
  res.json(pokemon);
});

app.get("/pokemon/count", function (req, res) {
  return res.json({ count: pokemon.length });
});

app.get("/pokemon/random", function (req, res) {
  if (pokemon.length === 0) {
    return res.status(404).json({ error: "No pokemon available" });
  }

  const randomIndex = Math.floor(Math.random() * pokemon.length);
  return res.json(pokemon[randomIndex]);
});

app.get("/pokemon/:id", function (req, res) {
  const id = req.params.id;

  const idAsANumber = parseInt(id);

  if (Number.isNaN(idAsANumber) || idAsANumber < 0) {
    return res.status(400).json({
      error: "Invalid ID. Please provide a positve whole number.",
    });
  }

  let foundPokemon = null;

  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].id === idAsANumber) {
      foundPokemon = pokemon[i];
    }
  }

  if (foundPokemon === null) {
    return res.status(404).json({ error: "Pokemon not found" });
  }

  return res.json(foundPokemon);
});

app.get("/pokemon/byName/:name", function (req, res) {
  const name = req.params.name.trim().toLowerCase();

  const foundPokemon = pokemon.find(function (p) {
    return p.name.trim().toLowerCase() === name;
  });

  if (foundPokemon === null || foundPokemon === undefined) {
    return res.status(404).json({ error: `Pokemon with name ${name} was not found` });
  }

  return res.json(foundPokemon);
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
