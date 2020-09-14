import { createStore, combineReducers } from 'redux';
import currentScreenReducer from './reducers/currentScreenReducer';
import currentDeviceTypeReducer from './reducers/currentDeviceTypeReducer';

const rootReducer = combineReducers({
  currentScreen: currentScreenReducer,
  currentDeviceType: currentDeviceTypeReducer
});

export type RootState = ReturnType<typeof rootReducer>;

let store = createStore(rootReducer);
export default store;
