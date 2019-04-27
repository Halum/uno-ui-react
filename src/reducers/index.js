import { combineReducers } from "redux";
import notifyReducer from 'react-redux-notify';

import gameInitializeReducer from './initialReduicer';
import ui from './uiReducer';

export default combineReducers({
  initializer: gameInitializeReducer,
  notifications: notifyReducer,
  ui
});