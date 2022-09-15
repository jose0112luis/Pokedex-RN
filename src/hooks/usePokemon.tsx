import { useEffect, useState } from 'react';

import { pokemonApi } from '../api/pokemonAPI';
import { FullPokemon } from '../interfaces/pokemonInterfaces';


export const usePokemon = ( id: string ) => {

  const [isLoading, setIsLoading] = useState( true );
  const [fullPokemon, setFullPokemon] = useState<FullPokemon>( {} as FullPokemon );

  const loadPokemon = async () => {
    const resp = await pokemonApi.get<FullPokemon>(`https://pokeapi.co/api/v2/pokemon/${ id }`);
    setFullPokemon( resp.data );
    setIsLoading( false );
  }

  useEffect(() => {
    loadPokemon();
  }, [])

  return {
    isLoading,
    fullPokemon,
  }
}