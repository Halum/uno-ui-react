import { combineReducers } from "redux";
import gameInitializeReducer from './initialReduicer';

export default combineReducers({
  initializer: gameInitializeReducer
});