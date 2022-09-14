import React from 'react';

import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { }

export const PokemonScreen = ( { navigation, route }: Props ) => {

  const { simplePokemon, color } = route.params;

  return (
    <View>
      <Text style={{fontSize: 30, color}}>{ simplePokemon.name } - { color }</Text>
    </View>
  );
}
