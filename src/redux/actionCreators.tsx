import * as types from './actionTypes';

export const changeScreen = (screen: string) => {
  return {
    type: types.CHANGE_SCREEN,
    payload: screen
  };
};
