//sys
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
//usr

// //FIX THIS
// const yellowTextValues: any = {
//   left: [
//     { name: 'Pokemon', key: '1sdfgsdfbvsdrg' },
//     { name: 'Streamers', key: 'op8yugh2uoywsgebf' },
//     { name: 'Creatures', key: '0987tysdwsdr231a' }
//   ],
//   right: [
//     { name: 'Items', key: '098o7ikuytjt5y467' },
//     { name: 'Sub Badges', key: 'jk23e4rfghjm098iuyt' }
//   ]
// };
const yellowTextValues = [
  { name: 'Pokemon', key: '1sdfgsdfbvsdrg' },
  { name: 'Streamers', key: 'op8yugh2uoywsgebf' },
  { name: 'Creatures', key: '0987tysdwsdr231a' },
  { name: 'Items', key: '098o7ikuytjt5y467' },
  { name: 'Sub Badges', key: 'jk23e4rfghjm098iuyt' }
];

const YellowShortcuts = () => {
  const currentDeviceType = useSelector(
    (state: any) => state.currentDeviceType
  );

  const yellowClickies = yellowTextValues.map(
    (item: { name: string; key: string }) => {
      return (
        <TouchableOpacity
          onPress={() => console.log(`${item.name} pressed!`)}
          key={item.key.toString()}
          style={{ paddingHorizontal: 10 }}
        >
          <View>
            <Text
              style={[
                styles.yellowTitleTextStyle,
                { fontSize: currentDeviceType.yellowTitleTextSize }
              ]}
            >
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
  );

  if (
    currentDeviceType.device === 'smallPhone' ||
    currentDeviceType.device === 'mediumPhone' ||
    currentDeviceType.device === 'largePhone'
  ) {
    return (
      <View
        style={[
          styles.yellowTextContainerStyle,
          { flexDirection: 'row', alignItems: 'flex-start' }
        ]}
      >
        {yellowClickies}
      </View>
    );
  }
  return (
    <View
      style={[
        styles.yellowTextContainerStyle,
        { flexDirection: 'row', alignItems: 'center' }
      ]}
    >
      {yellowClickies}
    </View>
  );
};

export default YellowShortcuts;

const styles = StyleSheet.create({
  yellowTextContainerStyle: {
    justifyContent: 'center',
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
