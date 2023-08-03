import GeneratePokemonCard from './components/PokemonCard'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const number = Math.floor(Math.random() * (1011 - 1) + 1)  
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)

  const URL = `https://pokeapi.co/api/v2/pokemon/${number}`
  const fetchPokemonData = async () => {
    setLoading(true)
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setLoading(false)
      setPokemon(data)      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

useEffect(() => {
  fetchPokemonData()
}, [])


if (loading) {
  return (
    <main>
      <h2>Loading...</h2>
    </main>
  ) 
} else {
    return (
      <section>    
        <GeneratePokemonCard pokemonData={pokemon}></GeneratePokemonCard>
        <button onClick={fetchPokemonData}>Find a new Pokémon!</button>
      </section>  
    )
  }
}

export default App
