import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import IconI from 'react-native-vector-icons/Ionicons';

interface PropsNav extends StackScreenProps<any, any> { }

export const PokemonScreen = ({ navigation }: PropsNav) => {
  return (
    <View>
      <Text>PokemonScreen</Text>

      <TouchableOpacity
        onPress={ () => navigation.goBack() }
        style={{ flexDirection: 'row', width: 300, height: 50, backgroundColor: '#4545AB', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
        activeOpacity={ 0.65 }
      >
        <IconI name='home' size={30} color='white' />
        <Text style={{ fontSize: 25, color: 'white' }}>Regresar a Home</Text>
      </TouchableOpacity>
    </View>
  );
}
