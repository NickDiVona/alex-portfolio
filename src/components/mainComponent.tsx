import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

const Main = () => {
  return (
    <View style={{ flex: 1, width: '60%', alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/alexChibi.png')}
        style={{ height: 150, width: 150 }}
      />
      <View
        style={{
          backgroundColor: '#424242',
          flex: 1,
          width: '60%',
          opacity: 1,
          borderRadius: 20,
          shadowColor: 'black',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.4
        }}
      >
        <Text>Main Component</Text>
      </View>
    </View>
  );
};

export default Main;
