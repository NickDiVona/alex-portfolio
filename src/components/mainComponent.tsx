import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'Chewy-Regular': require('../../assets/fonts/Chewy-Regular.ttf')
  });
};

const Main = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const yellowShortcuts = () => {
    return (
      <View style={styles.yellowTextContainerStyle}>
        <TouchableOpacity
          onPress={() => console.log('some yellow shit pressed')}
        >
          <View>
            <Text style={styles.yellowTitleTextStyle}>Streamers</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
        <TouchableOpacity
          onPress={() => console.log('some yellow shit pressed')}
        >
          <View>
            <Text style={styles.yellowTitleTextStyle}>Games</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
        <TouchableOpacity
          onPress={() => console.log('some yellow shit pressed')}
        >
          <View>
            <Text style={styles.yellowTitleTextStyle}>Pokemon</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
        <TouchableOpacity
          onPress={() => console.log('some yellow shit pressed')}
        >
          <View>
            <Text style={styles.yellowTitleTextStyle}>Anime</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
        <TouchableOpacity
          onPress={() => console.log('some yellow shit pressed')}
        >
          <View>
            <Text style={styles.yellowTitleTextStyle}>Mascots</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.yellowTextWhiteSeparatorStyle}> | </Text>
        <TouchableOpacity
          onPress={() => console.log('some yellow shit pressed')}
        >
          <View>
            <Text style={styles.yellowTitleTextStyle}>Misc</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <View style={styles.mainContainerStyle}>
      <Image
        source={require('../../assets/images/alexChibi.png')}
        style={{ height: 150, width: 150 }}
      />
      <View style={styles.grayContainerStyle}>
        <Text style={styles.titleTextStyle}>Royal's Portfolio</Text>
        <View style={styles.descriptionContainerStyle}>
          <Text style={styles.descriptionTextStyle}>
            Below you'll find a collection of emotes I've worked on for the past
            few years.
          </Text>
          <Text style={styles.descriptionTextStyle}>
            Note: If you feel like any of these emotes are mislabelled, please
            let me know! Thank you {'<3'}
          </Text>
          {yellowShortcuts()}
        </View>
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
    alignItems: 'center',
    paddingHorizontal: 40
  },
  titleTextStyle: {
    color: 'white',
    fontSize: 40,
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Chewy-Regular'
  },
  descriptionTextStyle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10
  },
  descriptionContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  yellowTextContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  yellowTitleTextStyle: {
    fontSize: 20,
    color: '#FFC400',
    fontStyle: 'italic',
    fontFamily: 'Chewy-Regular',
    fontWeight: 'bold'
  },
  yellowTextWhiteSeparatorStyle: {
    color: 'white',
    marginHorizontal: 5
  }
});
