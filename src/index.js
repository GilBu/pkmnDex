import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import { render } from 'react-dom';


const client = new ApolloClient({
  uri: 'https://beta.pokeapi.co/graphql/v1beta',
  cache: new InMemoryCache()
});

// const client = ...

client
  .query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemonsprites_by_pk(id: 500) {
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
  })
  .then(result => console.log(result));

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
