import { useEffect, useRef, useState } from 'react';

import { pokemonApi } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>( nextPageUrl.current );
    nextPageUrl.current = resp.data.next;
    mapPokemonList( resp.data.results  );
  }
  
  // mapear la lista de pokemones a pokemon simple - Map PokemonList To Simple Pokemon
  const mapPokemonList = ( pokemonList: Result[] ) => {
    pokemonList.map( poke => console.log( poke.url ) );
  }

  useEffect(() => {
    loadPokemons(); 
  }, [])
  
  return {
    simplePokemonList
  }
  
}
