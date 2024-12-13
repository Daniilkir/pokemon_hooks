import { useState } from "react";
const  PokemonForm = ({getName})=>{
    const [pokemonName, setPokemonName]= useState("")
    const handleChange = (event)=>{
        setPokemonName(event.target.value)
        console.log(pokemonName);
        
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        getName(pokemonName);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} placeholder="Pokemon name" />
            <button type="submit" >Find your pokemon</button>
        </form>
    )
}
export default PokemonForm;