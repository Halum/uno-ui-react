import React from 'react';
import { connect } from 'react-redux';

import Board from './board/board.component';
import Players from './player/players.component';
import PlayersRanking from './player/players.ranking.component';
import UnoCaller from './uno.caller.component';
import Header from './header.component';

import get from 'lodash.get';

const PageComponent = props => (
  <div className="container-fluid d-flex h-100 flex-column px-0">
    <Header />
    <div className="row flex-fill mx-0">
      <div className="col-9 bg-secondary pb-3">
        {
          get(props.game, 'status') === 'running'
            ? <UnoCaller/>
            : ''
        }
        <Board/>
      </div>
      <div className="col-3">
        <div className="row h-100">
          <div className="col-12 pb-3">
            <Players/>
          </div>
          <div className="col-12 h-30 pb-3">
            {props.game.ranking && props.game.ranking.length > 0
              ? <PlayersRanking/>
              : ''
            }
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps)(PageComponent);