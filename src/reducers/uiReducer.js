import {TOGGLE_GAME_CREATED_MODAL, TOGGLE_JOIN_GAME_MODAL} from '../actions/types';

const initialState = {
  showGameCreatedModal: false,
  showJoinGameModal: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_GAME_CREATED_MODAL:
      return {
        ...state,
        ...{showGameCreatedModal: !state.showGameCreatedModal}
      };
    case TOGGLE_JOIN_GAME_MODAL:
      return {
        ...state,
        ...{showJoinGameModal: !state.showJoinGameModal}
      };
    default:
      return state;
  }
}