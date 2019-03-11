import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ArrowDownIcon, ArrowUpIcon, StopIcon} from 'react-octicons';
import {Bounce} from 'react-motions';
import Button from './../button.component';
import get from 'lodash.get';
import { playerReady } from './../../actions/initialAction';

class PlayerListItem extends Component {
  constructor(props) {
    super(props);

    this.onReadyClick = this.onReadyClick.bind(this);
  }

  onReadyClick() {
    const gameId = this.props.game.gameId;
    const playerId = this.props.player.playerId;

    this.props.playerReady({gameId, playerId});
  }

  render() {
    const isMeCurrentPlayer = this.props.playing && this.props.player.turn;
    
    console.log('status', this.props.status)
    return (

      <Bounce duration={isMeCurrentPlayer ? 3 : 0} infinite={isMeCurrentPlayer ? true : false}>
        <li className={'list-group-item d-flex justify-content-between align-items-center ' + (isMeCurrentPlayer ? 'active' : '')}>
          <div>
            {/* show direction icon only for the current player */}
            <span className={this.props.playing ? 'visible' : 'invisible'}>
              {this.props.game.direction > 0 ? <ArrowDownIcon/> : <ArrowUpIcon/>}
            </span>
            {/* show player not ready icon */}
            <span>{this.props.status === 'waiting' ? <StopIcon/> : ''}</span>
            <span className="pl-3">{this.props.playerName}</span>
          </div>
          <div>
            { // show the ready button only when player status is 'waiting' and
              // participant name is same as player name
              get(this.props.player, 'status') === 'waiting' && get(this.props.player, 'name') === this.props.playerName
              ? <Button content="Ready"
                  className="btn-outline-success mr-5" wrapperClassName="pl-3"
                  onClick={this.onReadyClick}>
                </Button>
              : ''
            }
            <span className="badge badge-dark badge-pill">{this.props.cardCount}</span>
          </div>
        </li>
      </Bounce>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps, {playerReady})(PlayerListItem);