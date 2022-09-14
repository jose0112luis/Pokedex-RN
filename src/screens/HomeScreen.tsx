import React from 'react';

import { ActivityIndicator, FlatList, Image, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { PokemonCard } from '../components/PokemonCard';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { styles } from '../theme/appTheme';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  
  return (
    <>
      <Image 
        source={ require('../assets/pokebola.png') }
        style={{
          ...styles.pokebolaBG
        }}
      />
      
      <FlatList 
        data={ simplePokemonList }
        keyExtractor={ ( pokemon ) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }

        // Header
        ListHeaderComponent={(
          <Text 
            style={{ 
              ...styles.title,
              ...styles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              color: '#000' 
            }}
          >
            Pokedex
          </Text>
        )}
        
        renderItem={ ({ item }) => <PokemonCard pokemon={ item } /> }

        //infinite scroll
        onEndReached={ loadPokemons }
        onEndReachedThreshold={ 0.4 }

        // activity indicator
        ListFooterComponent={(
          <ActivityIndicator 
            style={{
              height: 100, 
            }} 
            size={ 20 }
            color='grey'
          /> 
        )}
      />

    </>
  );
}
