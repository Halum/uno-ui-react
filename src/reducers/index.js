import { combineReducers } from "redux";
import gameReducer from './gameReducer';
import gameInitializeReducer from './initialReduicer';

export default combineReducers({
  initializer: gameInitializeReducer,
  game: gameReducer
});