import React from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

import { StyleSheet, Platform, StatusBar } from "react-native";

const HomeScreen = ({ navigation }) => {

  const goToPage = (page) => {
    navigation.navigate(page)
  }
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <Text>Home Screen</Text>
      <Button title='Go to Settings' onPress={() => goToPage('Setting')} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});

export default HomeScreen