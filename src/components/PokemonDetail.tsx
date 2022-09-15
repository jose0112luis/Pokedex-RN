import React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { FullPokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: FullPokemon;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <ScrollView 
      style={{
        ...StyleSheet.absoluteFillObject,  //toma todo el contenido de la pantalla no solo lo de su padre
      }}
      showsVerticalScrollIndicator={ false }
    >
      {/* Tipos y Peso del pokemón */}
      <View style={{ ...styles.container, marginTop: 300 }}>
        {/* Types */}
        <Text style={ styles.title }>Tipos</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map( ({ type }) => (
              <Text 
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                }}
                key={ type.name }
              >
                { type.name }
              </Text>
            ))
          }
        </View>

        {/* Peso */}
        <Text style={ styles.title }>Peso</Text>
        <Text style={ styles.regularText }>{ pokemon.weight } kg</Text>
      </View>

      {/* Sprites */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Sprites</Text>
      </View>   
      <ScrollView
        // style={{ backgroundColor: 'red' }}
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
      >
        <FadeInImage uri={ pokemon.sprites.front_default } style={ styles.basicSprite } />
        <FadeInImage uri={ pokemon.sprites.back_default } style={ styles.basicSprite } />
        <FadeInImage uri={ pokemon.sprites.front_shiny } style={ styles.basicSprite } />
        <FadeInImage uri={ pokemon.sprites.back_shiny } style={ styles.basicSprite } />
      </ScrollView>

      {/* Habilidades */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Habilidades Base</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.abilities.map(({ ability }) => (
              <Text 
                style={{ 
                  ...styles.regularText,
                  marginRight: 15,
                }}
                key={ ability.name }
              >
                { ability.name }
              </Text>
            ))
          }
        </View>
      </View>   

      {/* Movimientos */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Movimientos</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {
            pokemon.moves.map(({ move }) => (
              <Text
                style={{
                  ...styles.regularText ,
                  marginRight: 15,
                }}
                key={ move.name }
              >
                { move.name }
              </Text>
            ))
          }
        </View>
      </View>

      {/* Stats */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Puntos Base</Text>
        <View >
          {
            pokemon.stats.map(({ stat, base_stat }) => (
              <View 
                key={ stat.name }
                style={{ flexDirection: 'row' }}
              >
                <Text
                  style={{
                    ...styles.regularText,
                    marginRight: 15,
                    width: 160,
                  }}
                  key={ stat.name }
                >
                  { stat.name }
                </Text>

                <Text
                  style={{
                    ...styles.regularText,
                    fontWeight: '500',
                    color: '#000'
                  }}
                >
                  { base_stat }
                </Text>
              </View>
            ))
          }
        </View>

        {/* Sprite Final */}
        <View 
          style={{
            marginBottom: 25,
            alignItems: 'center',
          }}
        >
          <FadeInImage uri={ pokemon.sprites.front_default } style={ styles.basicSprite } />
        </View>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: '#222',
    marginTop: 20,
  },
  regularText: {
    fontSize: 18,
  },
  basicSprite: {
    width: 100,
    height: 70,
    marginTop: 5,
  }
});