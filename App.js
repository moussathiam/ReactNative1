import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Search from './Components/Search';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Search/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: 30,
    width: '100%',
  },
});
