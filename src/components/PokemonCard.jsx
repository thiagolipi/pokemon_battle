import './PokemonCard.css'

export default function GeneratePokemonCard({ pokemonData }) {
    if (!pokemonData) {      
      return (        
          <h2>Loading...</h2>        
      );
    } else {      
        return (  
          <div className={'card'}>
            <div className={'card-image'}>
              <img src={pokemonData.sprites?.front_default} alt="pokemon image"/>
            </div>
            <h2>{pokemonData.name}</h2>
            <p>Attack: {pokemonData.stats?.[1].base_stat}</p>
            <p>Defense: {pokemonData.stats?.[2].base_stat}</p>
            <p>Hp: {pokemonData.stats?.[0].base_stat}</p>
          </div>
        )        
    }
}
    