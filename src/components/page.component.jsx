import React from 'react';
import Board from './board.component';
import Players from './players.component';

const Page = props => (
  <div className="container">
    <div className="row">
      <div className="col-10">
        <Board></Board>
      </div>
      <div className="col">
        <Players></Players>
      </div>
    </div>
  </div>
);

export default Page;