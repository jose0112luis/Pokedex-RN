import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ( { pokemon }:Props ) => {
  return (
    <TouchableOpacity activeOpacity={ 0.8 }>
      <View style={{
        ...styles.cardContainer,
      }}>
        {/* Nombre del pokemon y su ID */}
        <View>
          <Text style={ styles.name }>{ pokemon.name }</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    width: windowWidth * 0.45,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    top: 20,
    left: 10,
  }
});