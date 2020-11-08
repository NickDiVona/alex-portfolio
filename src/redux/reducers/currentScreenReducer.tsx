//sys
import * as types from '../actionTypes';
//usr
import { pokemonList } from '../../../assets/pokemonList';
import { streamersList } from '../../../assets/streamersList';
import { creaturesList } from '../../../assets/creaturesList';
import { subBadgeList } from '../../../assets/subbadgesList';

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
const INITIAL_STATE = { screen: 'pokemon', list: pokemonList };

const currentScreenReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case types.CHANGE_SCREEN:
      switch (action.payload) {
        case 'pokemon':
          return { screen: 'pokemon', list: pokemonList };

        case 'streamers':
          return { screen: 'streamers', list: streamersList };

        case 'creatures':
          return { screen: 'creatures', list: creaturesList };

        case 'subBadges':
          return { screen: 'subBadges', list: subBadgeList };

        default:
          return { screen: 'pokemon', list: pokemonList };
      }

    default:
      return state;
  }
};

export default currentScreenReducer;
