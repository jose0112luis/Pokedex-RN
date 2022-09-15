import React from 'react';

import { View, Platform, ActivityIndicator, StyleSheet, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { styles as globalStyles } from '../theme/appTheme';

export const SearchScreen = () => {

  const top = useSafeAreaInsets().top;
  const { isFetching, pokemonList } = usePokemonSearch();

  if ( isFetching ) {
    return (
      <View 
        style={ styles.activityContainer }
      >
        <ActivityIndicator
          size={ 50 }
          color='#5856D6'
          />
          <Text>Cargando...</Text>
      </View>
    );
  } else {
    
  }

  return (
    <View 
      style={{ 
        flex: 1, 
        marginTop: ( Platform.OS === 'ios' ? top : top + 10 ),
        marginHorizontal: 20,
      }}
    >
      <SearchInput />

      <FlatList 
        data={ pokemonList }
        keyExtractor={ ( pokemon ) => pokemon.id }
        showsVerticalScrollIndicator={ false }
        numColumns={ 2 }

        // Header
        ListHeaderComponent={(
          <Text 
            style={{ 
              ...globalStyles.title,
              ...globalStyles.globalMargin,
              top: top + 20,
              marginBottom: top + 20,
              paddingBottom: 10,
              color: '#000' 
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
const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});