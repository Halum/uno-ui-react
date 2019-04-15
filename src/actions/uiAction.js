import {TOGGLE_JOIN_GAME_MODAL} from './types';

export const toggleJoinGameModal = () => dispatch => {
  dispatch({
    type: TOGGLE_JOIN_GAME_MODAL
  })
};