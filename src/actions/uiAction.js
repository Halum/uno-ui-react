import {TOGGLE_GAME_CREATED_MODAL, TOGGLE_JOIN_GAME_MODAL} from './types';

export const toggleGameCreatedModal = () => dispatch => {
  dispatch({
    type: TOGGLE_GAME_CREATED_MODAL
  })
};

export const toggleJoinGameModal = () => dispatch => {
  dispatch({
    type: TOGGLE_JOIN_GAME_MODAL
  })
};