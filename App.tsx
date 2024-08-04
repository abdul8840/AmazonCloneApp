import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='#9ee4d4' barStyle='dark-content' />
      <Router />
    </>
  );
}

const styles = StyleSheet.create({})

export default App;
