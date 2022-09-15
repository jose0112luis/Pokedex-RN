import React from 'react';

import { View, Text, StyleSheet, TextInput, Platform } from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.txtBackground }>
        <TextInput
          placeholder='Buscar pokemón'
          style={{ ...styles.txtInput, top: ( Platform.OS === 'ios' ? 0 : 2 ), }}
          autoCapitalize='none'
          autoCorrect={ false }
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
  }
});