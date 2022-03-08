import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, SettingScreen } from '../screens';

const Tab = createBottomTabNavigator();

const NavigationTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Settings' component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default NavigationTab;