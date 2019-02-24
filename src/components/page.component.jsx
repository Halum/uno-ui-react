import React from 'react';
import Board from './board.component';
import Players from './players.component';

const Page = props => (
  <div class="container">
    <div class="row">
      <div class="col-10">
        <Board></Board>
      </div>
      <div class="col">
        <Players></Players>
      </div>
    </div>
  </div>
);

export default Page;