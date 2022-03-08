import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen, SettingScreen } from '../screens';

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Setting' component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
