import React, { useEffect, useState } from 'react';

import { View, Text, StyleSheet, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput = ( { style, onDebounce }: Props ) => {

  const [txtValue, setTxtValue] = useState('');

  const { debouncedValue } = useDebouncedValue( txtValue );

  useEffect(() => {
    onDebounce( debouncedValue );
  }, [ debouncedValue ])

  return (
    <View 
      style={{
        ...styles.container,
        ...style as any  //se pone any por q puede ser null/undefined y eso daria un error
      }}
    >
      <View style={ styles.txtBackground }>
        <TextInput
          placeholder='Buscar pokemón'
          placeholderTextColor='#9C9C9C'
          style={{ ...styles.txtInput, top: ( Platform.OS === 'ios' ? 0 : 2 ) }}
          autoCapitalize='none'
          autoCorrect={ false }
          value={ txtValue }
          onChangeText={ setTxtValue }
        />
        <IconI name='search' size={ 25 } color='#9C9C9C' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  txtBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //sombra
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  txtInput: {
    flex: 1,
    fontSize: 18,
    color: '#3B3B3B',
  }
});