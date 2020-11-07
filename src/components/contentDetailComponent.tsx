//sys
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { useSelector, useDispatch } from 'react-redux';
//usr
import { pokemonList } from '../../assets/pokemon';

interface CurrentDeviceTypeProps {
  [state: string]: {
    device: string;
    mainIconDimensions: number;
    iconUpperMargin: number;
    grayContainerWidth: string;
    titleTextSize: number;
    yellowTitleTextSize: number;
    descriptionTextSize: number;
    iconImageDimensions: number;
  };
}

// I guess any on this works... for now.
interface ItemProps {
  item: {
    name: string;
    image: any;
  };
}

const ContentDetails = () => {
  const currentScreen = useSelector((state: any) => state.currentScreen);
  const currentDeviceType = useSelector(
    (state: CurrentDeviceTypeProps) => state.currentDeviceType
  );
  const renderPokmonItem = (props: ItemProps) => {
    const { item } = props;

    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '20%'
        }}
      >
        <Image
          source={item.image}
          style={{
            width: currentDeviceType.iconImageDimensions,
            height: currentDeviceType.iconImageDimensions
          }}
        />
        {/* <Text style={{ color: 'white' }}>{item.name}</Text> */}
      </View>
    );
  };

  if (currentScreen === 'pokemon') {
    return (
      <FlatList
        data={pokemonList}
        renderItem={renderPokmonItem}
        keyExtractor={(item) => item.name.toString()}
        style={{ width: '100%' }}
        numColumns={5}
        ItemSeparatorComponent={() => (
          <View style={{ height: currentDeviceType.iconImageDimensions / 2 }} />
        )}
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
