//System
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux';
//User
import Main from './src/components/mainComponent';
import store from './src/redux/configureStore';
import { siteImages } from './assets/siteImages';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={siteImages.windmills}
          style={styles.backgroundImageStyle}
        />
        <Main />
      </View>
    </Provider>
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
