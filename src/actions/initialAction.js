import {NEW_GAME, JOIN_GAME, PLAYER_READY, GAME_UPDATE, PLAYER_UPDATE} from './types';
import { post } from './../lib/request';
import socketService from './../lib/socketService';

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
  const reqUrl = `${url}/player`;

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

export const prepareForSocket = ({gameId, playerId}) => dispatch => {
  socketService.connect(gameId);
  socketService.onGameUpdate(gameId, data => dispatch({
    type: GAME_UPDATE,
    payload: data
  }));
  socketService.onPlayerUpdate(playerId, data => dispatch({
    type: PLAYER_UPDATE,
    payload: data
  }));
}