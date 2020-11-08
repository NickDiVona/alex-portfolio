import * as types from './actionTypes';

//list changes

export const changeScreen = (screen: string) => {
  return {
    type: types.CHANGE_SCREEN,
    payload: screen
  };
};

//device changes

export const changeToSmallPhone = () => {
  return {
    type: types.CHANGE_DEVICE_TO_SMALL_PHONE
  };
};

export const changeToMediumPhone = () => {
  return {
    type: types.CHANGE_DEVICE_TO_MEDIUM_PHONE
  };
};

export const changeToLargePhone = () => {
  return {
    type: types.CHANGE_DEVICE_TO_LARGE_PHONE
  };
};

export const changeToTablet = () => {
  return {
    type: types.CHANGE_DEVICE_TO_TABLET
  };
};

export const changeToDesktop = () => {
  return {
    type: types.CHANGE_DEVICE_TO_DESKTOP
  };
};
