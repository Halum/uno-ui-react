import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './player.list.item.component';

class PlayersComponent extends Component {
  constructor(props) {
    super(props);

    this.showParticipants = this.showParticipants.bind(this);
  }

  showParticipants(participant, index) {
    const {playerName, cardCount, playing, status} = participant;
    const key = playerName + index;
    
    return <PlayerListItem {...{playerName, cardCount, playing, status, key}}/>
  }

  render() {
    return (
      <div className="card bg-light">
        <div className="card-body">
          <h5 className="card-title">Players</h5>
        </div>
        <ul className="list-group list-group-flush">
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