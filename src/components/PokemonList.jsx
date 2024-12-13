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
                    setPokemons((prevList)=>{return [...prevList, pokemon]})

                })
        }
    }, [name])

    return (
        <ul>
            {pokemons.map((pokemon)=>(
                <li>
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.back_default} alt={pokemon.name} />
                </li>
            ))}
        </ul>
    )
}
export default PokemonList;