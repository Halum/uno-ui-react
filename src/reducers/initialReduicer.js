import {NEW_GAME, JOIN_GAME, PLAYER_READY, PLAYER_UPDATE, GAME_UPDATE, GAME_ERROR, RESET_ERROR} from '../actions/types';

const initialState = {
  game: {},
  player: {},
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case NEW_GAME:
      return {
        ...state,
        game: action.payload
      };
    case GAME_UPDATE:
      return {
        ...state,
        game: {...state.game, ...action.payload.game}
      }
    case JOIN_GAME:
      return {
        ...state,
        game: {...state.game, ...action.payload.game},
        player: {...state.player, ...action.payload.player}
      };
    case PLAYER_READY:
      return {
        ...state,
        player: action.payload
      };
    case PLAYER_UPDATE:
      return {
        ...state,
        game: {...state.game, ...action.payload.game},
        player: {...state.player, ...action.payload.player}
      }
    case GAME_ERROR:
      return {...state, error: action.payload}
    case RESET_ERROR:
      return {...state, error: null}
    default:
      return state;
  }
}