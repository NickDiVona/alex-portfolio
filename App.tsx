//System
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//User
import Main from './src/components/mainComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('./assets/images/windmills.jpg')}
        style={styles.backgroundImageStyle}
      />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 4,
    height: '100%',
    width: '100%'
  },
  backgroundImageStyle: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.5
  }
});
