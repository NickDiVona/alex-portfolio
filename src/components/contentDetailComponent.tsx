//sys
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { useSelector, useDispatch } from 'react-redux';
//usr
import { pokemonList } from '../../assets/pokemon';

// interface CurrentDeviceTypeProps {
//   [state: string]: {
//     device: string;
//     iconDimensions: number;
//     iconUpperMargin: number;
//     grayContainerWidth: string;
//     titleTextSize: number;
//     yellowTitleTextSize: number;
//     descriptionTextSize: number;
//   };
// }

const ContentDetails = () => {
  const currentScreen = useSelector((state: any) => state.currentScreen);
  const renderPokmonItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  if (currentScreen === 'pokemon') {
    return (
      <FlatList
        data={pokemonList}
        renderItem={renderPokmonItem}
        keyExtractor={(item) => item.name.toString()}
      />
    );
  }

  return (
    <View>
      <Text style={{ color: 'white', marginTop: 20 }}>Content</Text>
    </View>
  );
};

export default ContentDetails;
