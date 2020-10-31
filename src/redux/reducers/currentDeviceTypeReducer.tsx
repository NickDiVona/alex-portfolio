import * as types from '../actionTypes';

//typescript stuff
interface ActionLayout {
  type: string;
  payload: string;
}

type Action = ActionLayout;

/*
  for multiple types of actions, clone the ActionLayout set up, but change the name

  type Action = ActionLayout | AnotherActionLayout | YetAnotherActionLayout
*/

//reducer
const INITIAL_STATE = {
  device: 'desktop',
  mainIconDimensions: 150,
  mainIconUpperMargin: 50,
  grayContainerWidth: '80%',
  titleTextSize: 36,
  yellowTitleTextSize: 18,
  descriptionTextSize: 14,
  iconImageDimensions: 50
};

const currentDeviceTypeReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    // 360 or narrower
    case types.CHANGE_DEVICE_TO_SMALL_PHONE:
      return {
        device: 'smallPhone',
        mainIconDimensions: 80,
        mainIconUpperMargin: 20,
        grayContainerWidth: '80%',
        titleTextSize: 18,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12,
        iconImageDimensions: 25
      };

    // 375 or narrower
    case types.CHANGE_DEVICE_TO_MEDIUM_PHONE:
      return {
        device: 'mediumPhone',
        mainIconDimensions: 80,
        mainIconUpperMargin: 20,
        grayContainerWidth: '80%',
        titleTextSize: 18,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12,
        iconImageDimensions: 30
      };

    // 414 or narrower
    case types.CHANGE_DEVICE_TO_LARGE_PHONE:
      return {
        device: 'largePhone',
        mainIconDimensions: 100,
        mainIconUpperMargin: 20,
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12,
        iconImageDimensions: 40
      };

    // 768 or narrower
    case types.CHANGE_DEVICE_TO_TABLET:
      return {
        device: 'tablet',
        mainIconDimensions: 120,
        mainIconUpperMargin: 40,
        grayContainerWidth: '80%',
        titleTextSize: 36,
        yellowTitleTextSize: 14,
        descriptionTextSize: 14,
        iconImageDimensions: 50
      };

    case types.CHANGE_DEVICE_TO_DESKTOP:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default currentDeviceTypeReducer;
