import React from 'react';

import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconI from 'react-native-vector-icons/Ionicons';

import { Tab1 } from './Tab1';
import { Tab2Screen } from './Tab2';

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
        name="HomeScreen" 
        component={ Tab1 } 
        options={{
          // tabBarLabel: 'Listado',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <IconI name='list' size={ 28 } color={ color } />
        }}
      />

      <Tab.Screen 
        name="SearchScreen" 
        component={ Tab2Screen } 
        options={{
          // tabBarLabel: 'Búsqueda',
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <IconI name='search' size={ 28 } color={ color } />
        }}
      />
    </Tab.Navigator>
  );
}