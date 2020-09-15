import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Dimensions
} from 'react-native';
import { useSelector } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
//usr
import YellowShortcuts from './yellowSelectionTextComponent';
import {
  changeToSmallPhone,
  changeToMediumPhone,
  changeToLargePhone,
  changeToTablet,
  changeToDesktop
} from '../redux/actionCreators';

// widths
// samsung s9/s9+  === 360px
// iPhone 6/7/8 === 375px
// iPhone 6/7/8 plus === 414px
// iPad === 768px

interface WindowProps {
  [window: string]: {
    fontScale: number;
    height: number;
    scale: number;
    width: number;
  };
}

const fetchFonts = () => {
  return Font.loadAsync({
    'Chewy-Regular': require('../../assets/fonts/Chewy-Regular.ttf')
  });
};

const Main = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    fontScale: 0,
    height: 0,
    scale: 0,
    width: 0
  });

  const onChange = ({ window }: WindowProps) => {
    //dimension object
    //window & screen objects
    //fontScale, height, scale, width objects
    //numerical values

    console.log(`WINDOW WIDTH => ${window.width}`);

    // console.log(`SCREEN => ${screen}`);
    setWindowDimensions(window);
  };

  useEffect(() => {
    console.log(windowDimensions.width);
  }, []);

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

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
          {/* {yellowShortcuts()} */}
          <YellowShortcuts />
        </View>
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  mainContainerStyle: {
    flex: 1,
    width: '100%',
    // width: '50%',
    alignItems: 'center',
    zIndex: 2,
    marginTop: 50
  },
  grayContainerStyle: {
    backgroundColor: '#303030',
    flex: 1,
    width: '50%',
    // width: '100%',
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
    fontFamily: 'Chewy-Regular',
    flexWrap: 'wrap'
  },
  descriptionContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexShrink: 1,
    width: '90%'
  },
  descriptionTextStyle: {
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    width: '100%'
  }
});
