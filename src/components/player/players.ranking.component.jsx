import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlayerListItem from './player.list.item.component';

class PlayersRankingComponent extends Component {
  constructor(props) {
    super(props);

    this.showRanking = this.showRanking.bind(this);
  }

  showRanking(player, index) {
    const {playerName} = player;
    const key = playerName + index;
    
    // here index is the ranking, so passing index as cardCount to show the rank
    return <PlayerListItem playerName={playerName} cardCount={index+1} key={key}></PlayerListItem>
  }

  render() {
    return (
      <div className="card bg-light">
        <div className="card-body">
          <h6 className="card-title text-muted">Ranking</h6>
        </div>
        <ul className="list-group list-group-flush">
          {
            this.props.game.ranking
            ? this.props.game.ranking.map(this.showRanking)
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

export default connect(mapStoreToProps, null)(PlayersRankingComponent);