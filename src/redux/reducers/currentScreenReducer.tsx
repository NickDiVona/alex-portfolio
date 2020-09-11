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
const INITIAL_STATE = 'pokemon';

const currentScreenReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.CHANGE_SCREEN:
      return action.payload;

    default:
      return state;
  }
};

export default currentScreenReducer;
