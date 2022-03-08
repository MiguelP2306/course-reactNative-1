import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationStack, NavigationTab, NavigationDrawer } from './src/navigation'

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
  },
});
