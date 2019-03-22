import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './player.list.item.component';
import PlayerListItemTimer from './player.list.item.timer.component';

class PlayersComponent extends Component {
  constructor(props) {
    super(props);

    this.showParticipants = this.showParticipants.bind(this);
  }

  showParticipants(participant, index) {
    const {playerName, cardCount, playing, status, uno} = participant;
    const key = playerName + index;
    
    return <PlayerListItem {...{playerName, cardCount, playing, status, uno, key}}/>
  }

  render() {
    return (
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title ">Players</h5>
          <h6 class="card-subtitle text-muted">Game: &nbsp;{this.props.game.gameId}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <PlayerListItemTimer/>
          
          {
            this.props.game.participants
            ? this.props.game.participants.map(this.showParticipants)
            : ''
          }
        </ul>
      </div>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, null)(PlayersComponent);