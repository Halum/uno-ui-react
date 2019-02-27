import React, { Component } from 'react';
import { connect } from 'react-redux';
import {prepareForSocket} from './../actions/initialAction';

export class boardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.player.id && !state.playerId) {
      const gameId = props.game.gameId;
      const playerId = props.player.playerId;

      props.prepareForSocket({gameId, playerId});
      return {playerId};
    }
    return state;
  }

  render() {
    return (
      <div>This is board {JSON.stringify(this.state)}</div>
    );
  }
};

const mapStoreToProps = store => {
  console.log('here', store);
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps, {prepareForSocket})(boardComponent);