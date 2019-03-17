import {TOGGLE_JOIN_GAME_MODAL} from '../actions/types';

const initialState = {
  showJoinGameModal: false
};

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_JOIN_GAME_MODAL:
      return {
        ...state,
        ...{showJoinGameModal: !state.showJoinGameModal}
      };
    default:
      return state;
  }
}