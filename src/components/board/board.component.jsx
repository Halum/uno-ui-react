import React, { Component } from 'react';
import { connect } from 'react-redux';
import {prepareForSocket} from './../../actions/initialAction';
import PlayerCards from './player.cards.component';
import BoardCards from './board.cards.component';

class BoardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerId: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    if(props.player.playerId && !state.playerId) {
      const gameId = props.game.gameId;
      const playerId = props.player.playerId;

      console.log('sdaf', playerId);

      props.prepareForSocket({gameId, playerId});
      return {playerId};
    }
    return state;
  }

  render() {
    return (
      <div className="row h-100">
        <div className="col-12 h-50 pb-3">
          <BoardCards></BoardCards>
        </div>
        <div className="col-12 h-50 pb-3">
          <PlayerCards></PlayerCards>
        </div>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps, {prepareForSocket})(BoardComponent);