import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs';
// import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Navigation /> */}
    </NavigationContainer>
  );
}

export default App;