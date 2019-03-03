import React, { Component } from 'react';
import {ChevronUpIcon, ChevronDownIcon} from 'react-octicons'

class PlayerListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={'list-group-item d-flex justify-content-between' 
          + (this.props.playing ? 'active' : '')}>
        <div>
          <span>{this.props.direction > 0 ? <ChevronDownIcon/> : <ChevronUpIcon/>}</span>
          <span className="pl-3">{this.props.playerName}</span>
          </div>
        <span className="badge badge-dark badge-pill">{this.props.cardCount}</span>
      </li>
    );
  }
};

export default PlayerListItem;