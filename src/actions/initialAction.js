import {NEW_GAME, JOIN_GAME, PLAYER_READY} from './types';
import { post } from './../lib/request';

const url = 'http://localhost:3500/uno';

export const createNewGame = () => dispatch => {
  const reqUrl = `${url}/new`;

  post(reqUrl)
  .then(data => 
    dispatch({
      type: NEW_GAME,
      payload: data
    })
  );
};

export const joinGame = payload => dispatch => {
  const reqUrl = `${url}/join`;

  post(reqUrl, payload)
  .then(data => 
    dispatch({
      type: JOIN_GAME,
      payload: data
    })
  );
};

export const playerReady = payload => dispatch => {
  const reqUrl = `${url}/player/ready`;

  post(reqUrl, payload)
  .then(data => 
    dispatch({
      type: PLAYER_READY,
      payload: data
    })
  );
};