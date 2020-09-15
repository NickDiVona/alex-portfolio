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
  grayContainerWidth: '80%',
  titleTextSize: 24,
  yellowTitleTextSize: 14,
  descriptionTextSize: 12
};

const currentDeviceTypeReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    // 360 or narrower
    case types.CHANGE_DEVICE_TO_SMALL_PHONE:
      return {
        device: 'smallPhone',
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    // 375 or narrower
    case types.CHANGE_DEVICE_TO_MEDIUM_PHONE:
      return {
        device: 'mediumPhone',
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    // 414 or narrower
    case types.CHANGE_DEVICE_TO_LARGE_PHONE:
      return {
        device: 'largePhone',
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    // 768 or narrower
    case types.CHANGE_DEVICE_TO_TABLET:
      return {
        device: 'tablet',
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    case types.CHANGE_DEVICE_TO_DESKTOP:
      return {
        device: 'tablet',
        grayContainerWidth: '80%',
        titleTextSize: 24,
        yellowTitleTextSize: 14,
        descriptionTextSize: 12
      };

    default:
      return state;
  }
};

export default currentDeviceTypeReducer;
