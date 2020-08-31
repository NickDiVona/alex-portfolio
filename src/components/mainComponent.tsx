import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const Main = () => {
  return (
    <View style={styles.mainContainerStyle}>
      <Image
        source={require('../../assets/images/alexChibi.png')}
        style={{ height: 150, width: 150 }}
      />
      <View style={styles.grayContainerStyle}>
        <Text style={styles.titleTextStyle}>Royal's Portfolio</Text>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    width: '50%',
    alignItems: 'center',
    zIndex: 2,
    marginTop: 50
  },
  grayContainerStyle: {
    backgroundColor: '#303030',
    flex: 1,
    width: '100%',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    alignItems: 'center'
  },
  titleTextStyle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'sans-serif',
    fontWeight: '100',
    marginTop: 20
  }
});
