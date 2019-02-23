import {NEW_GAME, JOIN_GAME, PLAYER_READY} from './types';

const url = 'http://localhost:3500/uno';

export const createNewGame = () => dispatch => {
  fetch(`${url}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(game => 
    dispatch({
      type: NEW_GAME,
      payload: game
    })
  );
};

export const joinGame = payload => dispatch => {
  fetch(`${url}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(game => 
    dispatch({
      type: JOIN_GAME,
      payload: game
    })
  );
};

export const playerReady = payload => dispatch => {
  fetch(`${url}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(game => 
    dispatch({
      type: PLAYER_READY,
      payload: game
    })
  );
};