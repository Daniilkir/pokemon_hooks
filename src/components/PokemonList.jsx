import { useEffect, useState } from "react";
const PokemonList = ({ name }) => {
    const [pokemons, setPokemons] = useState([])
    useEffect(() => {
        const pokemonName = name.toLowerCase();
        if (pokemonName.length > 0) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
                .then((res) => {
                    return res.json()
                })
                .then((pokemon) => {
                    console.log(pokemon);
                    
                    setPokemons((prevList)=>{return [...prevList, pokemon]})

                })
        }
    }, [name])

    const deletePokemon = (event) => {
        // console.log(event.target.closest(".pokemonItem").dataset.id);
        const elementId = Number.parseInt(event.target.closest(".pokemonItem").dataset.id)

        const clearPokemons = pokemons.filter(pokemon =>  pokemon.id !== elementId)
        setPokemons(clearPokemons)
        
    }

    return (
        <ul>
            {pokemons.map((pokemon)=>{
                return(
                <li className="pokemonItem" key={pokemon.id} data-id={pokemon.id}>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                    <button onClick={deletePokemon}>Delete</button>
                </li>
            )})}
            
        </ul>
    
    )
}
export default PokemonList;