
import React from 'react';
import {
  NEW_GAME, JOIN_GAME, PLAYER_READY, 
  GAME_UPDATE, PLAYER_UPDATE, GAME_ERROR, 
  RESET_ERROR, LEFT_GAME} from './types';
import { postReq, deleteReq } from '../lib/request';
import socketService from '../lib/socketService';
import {createNotification, NOTIFICATION_TYPE_INFO, NOTIFICATION_TYPE_ERROR} from 'react-redux-notify';

const url = `/uno`;

export const createNewGame = payload => dispatch => {
  const reqUrl = `${url}/new`;

  return postReq(reqUrl, payload)
    .then(data => 
      dispatch({
        type: NEW_GAME,
        payload: data
      })
    );
};

export const joinGame = payload => dispatch => {
  const reqUrl = `${url}/player`;

  postReq(reqUrl, payload)
  .then(data => 
    dispatch({
      type: JOIN_GAME,
      payload: data
    })
  ).catch(data => {
    dispatch(createNotification({
        message: data.error || 'Bad Luck',
        type: NOTIFICATION_TYPE_ERROR,
        duration: 5000,
        canDismiss: true,
        icon: <i className="fa fa-info-circle" />
      })
    )
  });
};

export const leaveGame = (gameId, playerId) => dispatch => {
  const reqUrl = `${url}/${gameId}/player/${playerId}/leave`;

  return deleteReq(reqUrl)
  .then(data => 
    dispatch({
      type: LEFT_GAME
    })
  ).catch(data =>
    dispatch(createNotification({
        message: data.error || 'Bad Luck',
        type: NOTIFICATION_TYPE_ERROR,
        duration: 5000,
        canDismiss: true,
        icon: <i className="fa fa-info-circle" />
      })
    )
  );
}

export const playerReady = payload => dispatch => {
  const reqUrl = `${url}/player/ready`;

  postReq(reqUrl, payload)
  .then(data => 
    dispatch({
      type: PLAYER_READY,
      payload: data
    })
  );
};

export const resetError = () => dispatch => {
  dispatch({
    type: RESET_ERROR
  })
}

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

  socketService.onNotification(data => 
    dispatch(createNotification({
        message: data,
        type: NOTIFICATION_TYPE_INFO,
        duration: 5000,
        canDismiss: true,
        icon: <i className="fa fa-info" />
      })
    )
  );
}