import React from 'react';
import { View, Text } from 'react-native';

const Saludar = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}</Text>
    </View>
  );
};

export default Saludar;
