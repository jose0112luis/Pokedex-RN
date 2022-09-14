import React, { useEffect, useRef, useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ( { pokemon }:Props ) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);  //si el componente está montado

  useEffect(() => {

    ImageColors.getColors( pokemon.picture, { fallback: 'grey' } ) .then( colors => {
      
      if ( !isMounted.current ) return;
      
      switch ( colors.platform ) {
        case 'android':
          setBgColor( colors.muted || 'grey' );
          break;
        case 'ios':
          setBgColor( colors.background || 'grey' );
        default:
          throw new Error('Errror: Unexpected platform..')
      }
    });

    return () => {
      isMounted.current = false;
    }

  }, []);

  return (
    <TouchableOpacity activeOpacity={ 0.9 }>
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgColor,
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
    backgroundColor: 'grey',
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