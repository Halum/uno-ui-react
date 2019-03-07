import React from 'react';
import Board from './board/board.component';
import Players from './player/players.component';
import PlayersRanking from './player/players.ranking.component';

const Page = props => (
  <div className="container-fluid d-flex h-100 flex-column">
    <div className="row flex-fill">
      <div className="col-9 bg-secondary card pb-3">
        <Board/>
      </div>
      <div className="col-3">
        <div className="row h-100">
          <div className="col-12 h-50 pb-3">
            <Players/>
          </div>
          <div className="col-12 h-50 pb-3">
            <PlayersRanking/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page;