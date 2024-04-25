import { useEffect, useState } from "react";
import "./App.css";
import PokemonThumnail from "./component/PokemonThumnail";

function App() {
  // api url
  const url = import.meta.env.VITE_APP_API_URL;

  // useful state to manage pokemon state and fetching from api
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadPoke, setLoadPoke] = useState(`${url}/?limit=20`);

  const getAllPokemons = async () => {
    // fetch api with state

    const res = await fetch(loadPoke);
    const data = await res.json();
    console.log(data);
    // get next set of 20 datas from "next" property
    setLoadPoke(data.next);

    // make pokemon object
    function newPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`${url}/${pokemon.name}`);
        const data = await res.json();
        setAllPokemons((currList) => [...currList, data]);
      });
    }

    newPokemonObject(data.results);
    await console.log(allPokemons);
  };
  // call on component mount
  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <>
      <div className="app-container">
        <h1>Poke Kingdom</h1>
        <div className="pokemon-container">
          <div className="all-container">
            {/* map data */}
            {allPokemons.map((pokemon, i) => (
              <PokemonThumnail
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={i}
                height={pokemon.height}
                weight={pokemon.weight}
                stat1={pokemon.stats[0].stat.name}
                stat2={pokemon.stats[1].stat.name}
                stat3={pokemon.stats[2].stat.name}
                stat4={pokemon.stats[3].stat.name}
                stat5={pokemon.stats[4].stat.name}
                stat6={pokemon.stats[5].stat.name}
                bs1={pokemon.stats[0].base_stat}
                bs2={pokemon.stats[1].base_stat}
                bs3={pokemon.stats[2].base_stat}
                bs4={pokemon.stats[3].base_stat}
                bs5={pokemon.stats[4].base_stat}
                bs6={pokemon.stats[5].base_stat}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>
            More pokemons
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
