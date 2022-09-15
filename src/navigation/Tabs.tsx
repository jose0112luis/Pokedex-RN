import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SearchScreen } from '../screens/SearchScreen';
import { Navigation } from './Navigation';
import { Platform } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#FFFFFF',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: ( Platform.OS === 'ios' ? 0 : 10 )
        },
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#FFFFFFDE',
          borderWidth: 0,
          elevation: 0,
          height: ( Platform.OS === 'ios' ? 0 : 60 ),
        },
      }}
    >
      <Tab.Screen 
        name="Navigation" 
        component={ Navigation } 
        options={{
          tabBarLabel: 'Listado',
          // tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <IconI name='list' size={ 28 } color={ color } />
        }}
      />

      <Tab.Screen 
        name="SearchScreen" 
        component={ SearchScreen } 
        options={{
          tabBarLabel: 'Búsqueda',
          // tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <IconI name='search' size={ 28 } color={ color } />
        }}
      />
    </Tab.Navigator>
  );
}