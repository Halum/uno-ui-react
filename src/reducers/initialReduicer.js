import {NEW_GAME, JOIN_GAME, PLAYER_READY} from '../actions/types';

const initialState = {
  game: {name: 'hello'}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case NEW_GAME:
      return {
        ...state,
        game: action.payload
      };
    case JOIN_GAME:
      return {
        ...state,
        game: action.payload
      };
    case PLAYER_READY:
      return {
        ...state,
        game: action.payload
      };
    default:
      return state;
  }
}