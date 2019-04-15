import React from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './player.list.item.component';
import PlayerListItemTimer from './player.list.item.timer.component';

const PlayersComponent = (props) => {

  function showParticipants() {
    let participants = props.game.participants || [];
    const playerIndex = participants.findIndex(p => p.playerName === props.player.name);

    if(playerIndex !== -1) {
      // always show self at top of the list
      participants = [...participants.slice(playerIndex), ...participants.slice(0, playerIndex)];
    }


    participants = participants.map((participant, index) => {
      const {playerName, cardCount, playing, status, uno, cards=[]} = participant;
      const key = playerName + index;
      const showingCards = cards.length > 0
      
      return <PlayerListItem {...{playerName, cardCount, playing, status, uno, showingCards, key}}/>
    });

    return participants.length ? participants : '';
  }

  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title ">Players</h5>
        <h6 className="card-subtitle text-muted">Game: &nbsp;{props.game.gameId}</h6>
      </div>
      <ul className="list-group list-group-flush">
        <PlayerListItemTimer/>
        
        {showParticipants()}
      </ul>
    </div>
  );
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(PlayersComponent);