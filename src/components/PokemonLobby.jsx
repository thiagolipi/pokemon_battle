import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import PokemonBattle from './PokemonBattleLog'
import './PokemonLobby.css'

export default function PokemonSelect () {
    const [pokemonAStats, setPokemonAStats] = useState([])
    const [pokemonBStats, setPokemonBStats] = useState([])
    
    const number1 = Math.floor(Math.random() * (1011 - 1) + 1)  
    const URL1 = `https://pokeapi.co/api/v2/pokemon/${number1}`
    const getPokemonOneData = async () => {
        const response = await fetch(URL1)
        const data = await response.json()
        setPokemonAStats(data)
    }
    
    const number2 = Math.floor(Math.random() * (1011 - 1) + 1)  
    const URL2 = `https://pokeapi.co/api/v2/pokemon/${number2}`
    const getPokemonTwoData = async () => {
        const response = await fetch(URL2)
        const data = await response.json()
        setPokemonBStats(data)        
    }

    useEffect(() => {
        getPokemonOneData(), getPokemonTwoData()
    }, [])
        

    return(
        <div>
            <section className="pokemon">
                <PokemonCard pokemonData={pokemonAStats}/>
                <button onClick={getPokemonOneData}>Find a new Pokémon!</button>
            </section>
            <section className="battle">
                <PokemonBattle pokemonAData={pokemonAStats} pokemonBData={pokemonBStats}/>
            </section>
            <section className="pokemon">
                <PokemonCard pokemonData={pokemonBStats}/>
                <button onClick={getPokemonTwoData}>Find a new Pokémon!</button>
            </section>
        </div>

    )
}