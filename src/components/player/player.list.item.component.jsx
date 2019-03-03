import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ArrowDownIcon, ArrowUpIcon} from 'react-octicons'

class PlayerListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={'list-group-item d-flex justify-content-between align-items-center ' 
          + (this.props.playing ? 'active' : '')}>
         <div>
           <span className={this.props.playing ? 'visible' : 'invisible'}>
            {this.props.game.direction > 0 ? <ArrowDownIcon/> : <ArrowUpIcon/>}
           </span>
           <span className="pl-3">{this.props.playerName}</span>
           </div>
        <span className="badge badge-dark badge-pill">{this.props.cardCount}</span>
      </li>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps)(PlayerListItem);