import React from 'react';

import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFFFFF'
        }
      }}
    >
      <Stack.Screen name='HomeScreen' component={ HomeScreen } />
      <Stack.Screen name='PokemonScreen' component={ PokemonScreen } />
    </Stack.Navigator>
  );
}
