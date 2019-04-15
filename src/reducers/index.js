import { combineReducers } from "redux";
import gameInitializeReducer from './initialReduicer';
import ui from './uiReducer';

export default combineReducers({
  initializer: gameInitializeReducer,
  ui
});