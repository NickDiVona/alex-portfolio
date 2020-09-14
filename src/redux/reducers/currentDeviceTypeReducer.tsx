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
  descriptionTextSize: 12,
  minimumScreenSize: 769
};

const currentDeviceTypeReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default currentDeviceTypeReducer;
