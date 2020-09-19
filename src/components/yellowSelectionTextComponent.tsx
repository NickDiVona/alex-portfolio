//sys
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
//usr

interface CurrentDeviceTypeProps {
  [state: string]: {
    device: string;
    grayContainerWidth: string;
    titleTextSize: number;
    yellowTitleTextSize: number;
    descriptionTextSize: number;
  };
}

const YellowShortcuts = () => {
  const currentDeviceType = useSelector(
    (state: any) => state.currentDeviceType
  );

  return (
    <View style={styles.yellowTextContainerStyle}>
      <TouchableOpacity onPress={() => console.log('some yellow shit pressed')}>
        <View>
          <Text
            style={[
              styles.yellowTitleTextStyle,
              { fontSize: currentDeviceType.yellowTitleTextStyle }
            ]}
          >
            Pokemon
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
      <TouchableOpacity onPress={() => console.log('some yellow shit pressed')}>
        <View>
          <Text
            style={[
              styles.yellowTitleTextStyle,
              { fontSize: currentDeviceType.yellowTitleTextStyle }
            ]}
          >
            Streamers
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
      <TouchableOpacity onPress={() => console.log('some yellow shit pressed')}>
        <View>
          <Text
            style={[
              styles.yellowTitleTextStyle,
              { fontSize: currentDeviceType.yellowTitleTextStyle }
            ]}
          >
            Creatures
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
      <TouchableOpacity onPress={() => console.log('some yellow shit pressed')}>
        <View>
          <Text
            style={[
              styles.yellowTitleTextStyle,
              { fontSize: currentDeviceType.yellowTitleTextStyle }
            ]}
          >
            Items
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
      <TouchableOpacity onPress={() => console.log('some yellow shit pressed')}>
        <View>
          <Text
            style={[
              styles.yellowTitleTextStyle,
              { fontSize: currentDeviceType.yellowTitleTextStyle }
            ]}
          >
            Sub Badges
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default YellowShortcuts;

const styles = StyleSheet.create({
  yellowTextContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  yellowTitleTextStyle: {
    color: '#FFC400',
    fontStyle: 'italic',
    fontFamily: 'Chewy-Regular',
    fontWeight: 'bold',
    width: '100%'
  },
  yellowTextWhiteSeparatorStyle: {
    color: 'white',
    marginHorizontal: 5
  }
});
