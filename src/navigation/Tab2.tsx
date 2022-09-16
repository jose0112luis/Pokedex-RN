import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { PokemonScreen } from '../screens/PokemonScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { RootStackParams } from './Tab1';

//solucionando el problema cuando esta en SearchScreen elige un pokemon y regresa con la flecha o atras se va HomeScreen en ves de SearchScreen
const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFFFFF'
        }
      }}
    >
      <Tab2.Screen name='HomeScreen' component={ SearchScreen } />
      <Tab2.Screen name='PokemonScreen' component={ PokemonScreen } />
    </Tab2.Navigator>
  );
}
