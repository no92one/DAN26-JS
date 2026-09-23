import "./style.css";
import { handleGetAllPokemons, handleGetPokemonByName } from "./eventHandlers";

const nameFormEL = document.querySelector("#search-pokemon-by-name");
const buttonEl = document.querySelector("#get-all-pokemons-btn");
const nameInputEl = document.querySelector("#pokemon-name");

function init() {
  buttonEl.addEventListener("click", handleGetAllPokemons);

  nameFormEL.addEventListener('submit', function (event) {
    event.preventDefault();
    handleGetPokemonByName(nameInputEl.value);
  });
}

init();
