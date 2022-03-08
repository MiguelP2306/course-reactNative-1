import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

const SettingScreen = ({ navigation }) => {

  const goToPage = (page) => {
    navigation.navigate(page)
  }

  return (
    <SafeAreaView>
      <Text>Setting</Text>
      <Button title='Go to Home' onPress={() => goToPage('Home')} />
    </SafeAreaView>
  );
};

export default SettingScreen;
