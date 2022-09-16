import React from 'react';

import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cell } from 'react-native-table-component';

import { FullPokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';

interface Props {
  pokemon: FullPokemon;
  color?: string;
}

export const PokemonDetail = ({ pokemon, color }: Props) => {
  return (
    <ScrollView 
      style={{ ...StyleSheet.absoluteFillObject }}  //toma todo el contenido de la pantalla no solo lo de su padre
      showsVerticalScrollIndicator={ false }
    >
      {/* Tipo del pokemón */}
      <View style={{ ...styles.container, marginTop: 300 }}>
        {/* Types */}
        <Text style={ styles.title }>Tipo</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map( ({ type }) => (
              <Text 
                style={{ ...styles.regularText, marginRight: 10 }}
                key={ type.name }
              >
                { type.name }
              </Text>
            ))
          }
        </View>

        {/* Peso y Altura */}
        <View style={{ ...styles.containerWH, backgroundColor: color }} >
          {/* Altura */}
          <View>
            <Text style={{ ...styles.title, marginTop: 0, color: '#FFF' }}>Altura</Text>
            <Text style={{ ...styles.regularText, color: '#FFF' }}>{ pokemon.height / 10 } m</Text>
          </View>

          {/* Peso */}
          <View>
            <Text style={{ ...styles.title, marginTop: 0, color: '#FFF' }}>Peso</Text>
            <Text style={{ ...styles.regularText, color: '#FFF' }}>{ pokemon.weight / 10 } kg</Text>
          </View>
        </View>
      </View>

      {/* Sprites */}
      <View style={ styles.container }>
        <Text style={ styles.title }>Sprites</Text>
      </View>   
      <ScrollView
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
                style={{ ...styles.regularText, marginRight: 15 }}
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
                style={{ ...styles.regularText, marginRight: 15 }}
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
        <Table style={ styles.table }>
          {
            pokemon.stats.map(({ stat, base_stat }) => (
              <TableWrapper style={ styles.tblWrap } key={ stat.name+1.5 } >
                <Row 
                  data={[ stat.name ]} 
                  style={{ ...styles.tblDato, backgroundColor: color+'75' }} 
                  textStyle={{ color: '#000', fontSize: 18, fontWeight: '500', }} 
                  key={ stat.name }
                  />
                <Row 
                  data={[ base_stat ]} 
                  style={ styles.tblValor } 
                  textStyle={{ color: '#000', fontSize: 18, alignSelf: 'center' }} 
                  key={ stat.name+1 }
                />
              </TableWrapper>
            ))
          }
        </Table>

        {/* <View >
          {
            pokemon.stats.map(({ stat, base_stat }) => (
              <View key={ stat.name } style={{ flexDirection: 'row' }} >
                <Text style={{ ...styles.regularText, marginRight: 15, width: 160, }} key={ stat.name } >
                  { stat.name }
                </Text>
                <Text style={{ ...styles.regularText, fontWeight: '500', color: '#000' }} >
                  { base_stat }
                </Text>
              </View>
            ))
          }
        </View> */}

        {/* Sprite Final */}
        <View style={{ marginBottom: 75, alignItems: 'center' }} >
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
    color: '#7C7C7C',
  },
  basicSprite: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  containerWH: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 15,
    height: 80,
    borderRadius: 20,
  },
  table: {
    flex: 1, 
    padding: 20, 
  },
  tblWrap: {
    flexDirection: 'row', 
    justifyContent:'center', 
    width: 302,
  },
  tblDato: {
    height: 35, 
    width: 200, 
    paddingHorizontal: 10, 
    borderWidth: 1, 
    color: '#FFF',
  },
  tblValor: {
    height: 35, 
    width: 100, 
    borderWidth: 1, 
    backgroundColor: '#EFEFEF',
  },
  txtTableTitle:{
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  txtTableValue: {
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
  }
});