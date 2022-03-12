import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

function Card(face, id, onCardClick){

  const GET_POKEMON = gql`
    query samplePokeAPIquery {
        pokemon_v2_pokemonsprites_by_pk(id: ${id}) {
          pokemon_v2_pokemon {
            name
            base_experience
            height
            weight
          }
          sprites
        }
      }
  `
  const { data, loading, error } = useQuery(GET_POKEMON);

  const { pokemon_v2_pokemon, sprites} = data.pokemon_v2_pokemonsprites_by_pk
  const { name,
            base_experience,
            height,
    weight } = pokemon_v2_pokemon
  if(face){
    return(
      <button onClick={onCardClick(name, base_experience, height, weight, sprites)}>
        <h1>{name}</h1>
        <img src={sprites.other['official-artwork']}>
      </img>
        <div>Experience</div><div>{base_experience}</div>
        <div>Height</div><div>{height}</div>
        <div>Weight</div><div>{weight}</div>
      </button> 
    )
  } else {
    return(<div>Blank</div>)
    
  }
  
}

export default Card;