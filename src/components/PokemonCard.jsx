import './PokemonCard.css'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>

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
            <p>Hitpoints: {pokemonData.stats?.[0].base_stat}</p>
          </div>
        )
        
        
        
      }
    }
    