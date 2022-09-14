import { useEffect, useRef, useState } from 'react';

import { pokemonApi } from '../api/pokemonAPI';
import { PokemonPaginatedResponse, Result, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    setIsLoading( true );
    const resp = await pokemonApi.get<PokemonPaginatedResponse>( nextPageUrl.current );
    nextPageUrl.current = resp.data.next;
    mapPokemonList( resp.data.results  );
  }
  
  // mapear la lista de pokemones a pokemon simple - Map PokemonList To Simple Pokemon
  const mapPokemonList = ( pokemonList: Result[] ) => {

    const newPokemonList: SimplePokemon[] = pokemonList.map(({ name, url }) => {
      const urlParts = url.split('/');
      const id = urlParts[ urlParts.length - 2 ];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`;

      return { id, picture, name };
    });

    setSimplePokemonList([ ...simplePokemonList, ...newPokemonList ]);  //desestructuración o acumulación de los pokemons anteriores mas los nuevos
    setIsLoading( false );
  }

  useEffect(() => {
    loadPokemons(); 
  }, [])
  
  return {
    isLoading,
    simplePokemonList
  }
  
}
