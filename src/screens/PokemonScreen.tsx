import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import IconI from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { RootStackParams } from '../navigation/Tab1';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetail } from '../components/PokemonDetail';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ({ navigation, route }: Props) => {

  const { simplePokemon, color } = route.params;
  const { id, name, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();

  const { isLoading, fullPokemon } = usePokemon( id );
  

  return (
    <View style={{ flex: 1 }}>
      {/* Header Container */}
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}
      >
        {/* Botón Atrás */}
        <TouchableOpacity
          onPress={ () => navigation.goBack() }
          activeOpacity={ 0.7 }
          style={{ ...styles.btnBack, top: top + 10 }}
        >
          <View 
            style={ styles.bgBtnBack }
          >
            <IconI name='arrow-back' size={ 30 } color='#FFF' />
          </View>
        </TouchableOpacity>

        {/* Nombre del Pokemón */}
        <Text style={{ ...styles.pokemonName }}>
          { name }
        </Text>
        <Text style={{ ...styles.pokemonNumber, top: top + 10 }}>
          #{ id }
        </Text>

        {/* Pokebola Blanca */}
        <Image 
          source={ require('../assets/pokebola-blanca.png') }
          style={ styles.pokebola }
        />

        {/* Imagen del Pokemón */}
        <FadeInImage
          uri={ picture }
          style={ styles.imgPokemon }
        />

      </View>
      
      {/* Detalles y Loading */}
      {
        isLoading 
          ? (
            <View style={ styles.loadingIndicator }>
              <ActivityIndicator 
                color={ color }
                size={ 50 }
              />
            </View>
          )
          : <PokemonDetail pokemon={ fullPokemon } color={ color } />
      }

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 300,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 500,
    borderBottomLeftRadius: 500,
  },
  btnBack: {
    position: 'absolute',
    left: 20,
    // top: 10
  },
  bgBtnBack: {
    backgroundColor: '#23232365', 
    borderRadius: 50, 
    width: 40, 
    height: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemonName: {
    color: '#FFFFFC',
    fontSize: 40,
    fontWeight: '600',
    alignSelf: 'center',
  }, 
  pokemonNumber: {
    color: '#FFFFFC',
    fontSize: 40,
    fontWeight: '400',
    alignSelf: 'flex-start', 
    left: 20,
  }, 
  pokebola: {
    width: 220,
    height: 220,
    bottom: 25,
    opacity: 0.7,
  },
  imgPokemon: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});