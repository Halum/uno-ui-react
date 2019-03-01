import React, { Component } from 'react';

class PlayerListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={'list-group-item d-flex justify-content-between align-items-center ' 
          + (this.props.playing ? 'active' : '')}>
        {this.props.playerName}
        <span className="badge badge-dark badge-pill">{this.props.cardCount}</span>
      </li>
    );
  }
};

export default PlayerListItem;