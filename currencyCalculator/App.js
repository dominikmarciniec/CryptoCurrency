import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import CoinItem from './src/components/CoinItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinItem name={'coin_one'}/>
      <CoinItem name={'coin_two'}/>
      <CoinItem name={'coin_tree'}/>
      <CoinItem name={'coin_four'}/>
      <CoinItem name={'coin_five'}/>
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