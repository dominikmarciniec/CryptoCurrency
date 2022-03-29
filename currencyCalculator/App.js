import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen  from './src/screens/HomeScreen';
import CoinDetails from './src/screens/CoinDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetails/>
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