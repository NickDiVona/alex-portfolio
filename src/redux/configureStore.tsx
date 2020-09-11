import { createStore, combineReducers } from 'redux';
import currentScreenReducer from './reducers/currentScreenReducer';

const rootReducer = combineReducers({
  currentScreen: currentScreenReducer
});

export type RootState = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);
export default store;
