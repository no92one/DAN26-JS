import { renderPokemons, renderErrorMessage, renderOnePokemon } from "./renderFunctions";

export async function handleGetAllPokemons() {
  const response = await fetch("http://localhost:3000/pokemon");

  if (response.ok === false) {
    console.error("ERROR LOG: Something went wrong with the fetch to this endpoint - /pokemon");
    return [];
  }

  const pokemons = await response.json();

  renderPokemons(pokemons);
}

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
