import React from 'react';
import { TextInput, Button, View } from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <TextInput placeholder='email' />
      <TextInput placeholder='password' />
      <Button title='Enviar' onPress={() => console.log('enviar')} />
    </View>
  );
};

export default LoginForm;
