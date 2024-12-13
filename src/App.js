import './App.css';
import PokemonList from './components/PokemonList';
import PokemonForm from "./components/Form";
import { useState } from 'react';

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const getPokemonName = (name) =>{
    setPokemonName(name)
    console.log(pokemonName)
  }
  return (
    <div className="App">
      <PokemonForm getName={getPokemonName}/>
      <PokemonList name={pokemonName}/>
    </div>
  );
}

export default App;
