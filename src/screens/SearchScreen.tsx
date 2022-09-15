import React from 'react';

import { View, Platform, Text, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { styles } from '../theme/appTheme';
import { Loading } from '../components/Loading';

const windowWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const top = useSafeAreaInsets().top;
  const { isFetching, pokemonList } = usePokemonSearch();

  if ( isFetching ) {
    return <Loading /> 
  }

  return (
    <View 
      style={{ 
        flex: 1, 
        marginHorizontal: 20,
      }}
    >
      {/* Barra de búsqueda */}
      <SearchInput 
        style={{
          position: 'absolute',
          zIndex: 999,
          width: windowWidth - 40,
          top: ( Platform.OS === 'ios' ? top : top + 25 ),
        }}
      />

      <FlatList 
        data={ pokemonList }
        keyExtractor={ ( pokemon ) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }

        // Header
        ListHeaderComponent={(
          <Text 
            style={{ 
              ...styles.title,
              ...styles.globalMargin,
              paddingBottom: 10,
              marginTop: ( Platform.OS === 'ios' ? top + 60 : top + 80 ),
              color: '#000',
            }}
          >
            Pokedex
          </Text>
        )}
        
        // componente a renderizar
        renderItem={ ({ item }) => <PokemonCard pokemon={ item } /> }
      />
      
    </View>
  );
}
