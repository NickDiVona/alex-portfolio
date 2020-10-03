//sys
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { useSelector, useDispatch } from 'react-redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
//usr
import YellowShortcuts from './yellowSelectionTextComponent';
import ContentDetails from './contentDetailComponent';
import {
  changeToSmallPhone,
  changeToMediumPhone,
  changeToLargePhone,
  changeToTablet,
  changeToDesktop
} from '../redux/actionCreators';

// interface WindowProps {
//   [window: string]: {
//     fontScale: number;
//     height: number;
//     scale: number;
//     width: number;
//   };
// }

interface CurrentDeviceTypeProps {
  [state: string]: {
    device: string;
    iconDimensions: number;
    iconUpperMargin: number;
    grayContainerWidth: string;
    titleTextSize: number;
    yellowTitleTextSize: number;
    descriptionTextSize: number;
  };
}

const fetchFonts = () => {
  return Font.loadAsync({
    'Chewy-Regular': require('../../assets/fonts/Chewy-Regular.ttf')
  });
};

const Main = () => {
  const dispatch = useDispatch();
  const currentDeviceType = useSelector(
    (state: CurrentDeviceTypeProps) => state.currentDeviceType
  );
  const [fontLoaded, setFontLoaded] = useState(false);
  const windowWidth = useDimensions().window.width;

  // const [windowDimensions, setWindowDimensions] = useState({
  //   fontScale: 0,
  //   height: 0,
  //   scale: 0,
  //   width: 0
  // });

  // widths
  // samsung s9/s9+  === 360px
  // iPhone 6/7/8 === 375px
  // iPhone 6/7/8 plus === 414px
  // iPad === 768px

  useEffect(() => {
    if (windowWidth <= 360) {
      dispatch(changeToSmallPhone());
    } else if (windowWidth <= 375) {
      dispatch(changeToMediumPhone());
    } else if (windowWidth <= 414) {
      dispatch(changeToLargePhone());
    } else if (windowWidth <= 768) {
      dispatch(changeToTablet());
    } else {
      dispatch(changeToDesktop());
    }
  }, []);

  useEffect(() => {
    if (windowWidth <= 360) {
      dispatch(changeToSmallPhone());
    } else if (windowWidth <= 375) {
      dispatch(changeToMediumPhone());
    } else if (windowWidth <= 414) {
      dispatch(changeToLargePhone());
    } else if (windowWidth <= 768) {
      dispatch(changeToTablet());
    } else {
      dispatch(changeToDesktop());
    }

    let msg = `
    --------------
    width = ${windowWidth}
    device = ${currentDeviceType.device}
    ---------------
    `;

    console.log(msg);
  }, [windowWidth]);

  // //setup event listeners for window resizing
  // useEffect(() => {
  //   Dimensions.addEventListener('change', onChange);
  //   return () => {
  //     Dimensions.removeEventListener('change', onChange);
  //   };
  // });

  // useEffect(() => {}, []);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <View
      style={[
        styles.mainContainerStyle,
        { marginTop: currentDeviceType.iconUpperMargin }
      ]}
    >
      <Image
        source={require('../../assets/images/alexChibi.png')}
        style={{
          height: currentDeviceType.iconDimensions,
          width: currentDeviceType.iconDimensions
        }}
      />
      <View
        style={[
          styles.grayContainerStyle,
          { width: currentDeviceType.grayContainerWidth }
        ]}
      >
        <Text
          style={[
            styles.titleTextStyle,
            { fontSize: currentDeviceType.titleTextSize }
          ]}
        >
          Royal's Portfolio
        </Text>
        <View style={styles.descriptionContainerStyle}>
          <Text
            style={[
              styles.descriptionTextStyle,
              { fontSize: currentDeviceType.descriptionTextSize }
            ]}
          >
            Below you'll find a collection of emotes I've worked on for the past
            few years.
          </Text>
          <Text
            style={[
              styles.descriptionTextStyle,
              { fontSize: currentDeviceType.descriptionTextSize }
            ]}
          >
            Note: If you feel like any of these emotes are mislabelled, please
            let me know! Thank you {'<3'}
          </Text>
          <YellowShortcuts />
          <ContentDetails />
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
    alignItems: 'center',
    zIndex: 2
  },
  grayContainerStyle: {
    backgroundColor: '#303030',
    flex: 1,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.4,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  titleTextStyle: {
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
    fontFamily: 'Chewy-Regular',
    flexWrap: 'wrap'
  },
  descriptionContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 1,
    width: '90%'
  },
  descriptionTextStyle: {
    color: 'white',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center'
  }
});
