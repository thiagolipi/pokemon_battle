export default function PokemonBattle( { pokemonAData, pokemonBData }) {  

    function AttackRound () {        

        var HP_pokemon_A = pokemonAData.stats?.[0].base_stat
        var HP_pokemon_B = pokemonBData.stats?.[0].base_stat
        var ROUND = 1

        while (HP_pokemon_A && HP_pokemon_B >= 0) {

            console.log('==================')
            console.log(`Round ${ROUND} starts!`)
            console.log('==================')
            ROUND = ROUND + 1

            if (pokemonAData.stats?.[1].base_stat < pokemonBData.stats?.[2].base_stat) {
                console.log(`${pokemonAData.name} attack is ineffective.`) 
                console.log('------------------------------')                            
            }   else {
                HP_pokemon_B = HP_pokemon_B - (pokemonAData.stats?.[1].base_stat-pokemonBData.stats?.[2].base_stat) 
                        if (HP_pokemon_B <= 0) {
                            console.log(`The Pokémon ${pokemonAData.name} attacked and it was decisive.`)                            
                            console.log(`${pokemonBData.name} fainted.`)
                            console.log('------------------------------')
                            console.log(`${pokemonAData.name} wins the battle!`)
                            break;
                        } else {
                                console.log(`The Pokémon ${pokemonAData.name} attacked.`)
                                console.log('The attack was effective.')
                                console.log(`Now, ${pokemonBData.name} has ${HP_pokemon_B} hitpoints.`)
                                console.log('------------------------------')                                              
                            }
                        
                }  

            if (pokemonBData.stats?.[1].base_stat < pokemonAData.stats?.[2].base_stat) {
                console.log(`${pokemonBData.name} attack is ineffective.`)
                console.log('------------------------------')
                }   else {
                    HP_pokemon_A = HP_pokemon_A - (pokemonBData.stats?.[1].base_stat-pokemonAData.stats?.[2].base_stat)
                            if (HP_pokemon_A <= 0) {
                                console.log(`The Pokémon ${pokemonBData.name} attacked and it was decisive.`)                                
                                console.log(`${pokemonAData.name} fainted.`)
                                console.log('------------------------------')
                                console.log(`${pokemonBData.name} wins the battle!`)
                                break;
                            } else {
                                    console.log(`The Pokémon ${pokemonBData.name} attacked.`)
                                    console.log('The attack was effective.')
                                    console.log(`Now, ${pokemonAData.name} has ${HP_pokemon_A} hitpoints.`)
                                    console.log('------------------------------')
                                }
                    
                    }  

            if (pokemonAData.stats?.[1].base_stat <= pokemonBData.stats?.[2].base_stat && pokemonBData.stats?.[1].base_stat <= pokemonAData.stats?.[2].base_stat) {
                console.log('The battle is a draw!')
                console.log('------------------------------')
                break;                 
            }      
        }      

    }

    return (   

        <section>            
        <button onClick={AttackRound}>BATTLE!</button>          
        </section>

    )

}