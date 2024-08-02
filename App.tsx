import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content' />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({})

export default App;
