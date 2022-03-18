import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen  from './src/screens/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <HomeScreen/>
=======
      <CoinItem name={'coin_one'}/>
      <CoinItem name={'coin_two'}/>
      <CoinItem name={'coin_tree'}/>
      <CoinItem name={'coin_four'}/>
      <CoinItem name={'coin_five'}/>
>>>>>>> origin/master
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});