const mainEl = document.querySelector("#results");

export function renderPokemons(pokemons) {
  mainEl.innerHTML = "";
  const length = pokemons.length;

  if (length === 0) {
    const p = document.createElement("p");
    p.classList.add("empty-message");
    p.textContent = "Could not find any pokemons..";
    mainEl.appendChild(p);
    return;
  }

  for (let i = 0; i < length; i++) {
    const p = pokemons[i];
    const pokemonEl = document.createElement("article");
    pokemonEl.classList.add("pokemon");

    pokemonEl.innerHTML = `
      <p>Name: ${p.name}</p>
      <p>Id: ${p.id}</p>
      <p>Type:${p.type.join(", ")} </p>
    `;

    mainEl.appendChild(pokemonEl);
  }
}

export function renderErrorMessage(message) {
  mainEl.innerHTML = "";

  const p = document.createElement("p");
  p.classList.add("error-message");
  p.textContent = message;
  mainEl.appendChild(p);
}

export function renderOnePokemon(pokemon) {
  mainEl.innerHTML = "";
  const pokemonEl = document.createElement("article");
  pokemonEl.classList.add("pokemon");

  pokemonEl.innerHTML = `
      <p>Name: ${pokemon.name}</p>
      <p>Id: ${pokemon.id}</p>
      <p>Type:${pokemon.type.join(", ")} </p>
    `;

  mainEl.appendChild(pokemonEl);
}
