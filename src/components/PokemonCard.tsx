import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ( { pokemon }:Props ) => {
  return (
    <TouchableOpacity activeOpacity={ 0.9 }>
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
      }}>
        {/* Nombre del pokemon y su ID */}
        <View>
          <Text style={ styles.name }>{ pokemon.name }{ '\n#' + pokemon.id} </Text>
        </View>

        <View style={ styles.pokebolaContainer }>
          <Image 
            source={ require('../assets/pokebola-blanca.png') } 
            style={ styles.pokebola }
          />
        </View>

        <FadeInImage
          uri={ pokemon.picture }
          style={ styles.pokemonImg }
        />

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '500',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -20,
  },
  pokemonImg: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -7,
    bottom: -8,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5,
  }
});