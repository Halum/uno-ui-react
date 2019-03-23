import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ArrowDownIcon, ArrowUpIcon, StopIcon} from 'react-octicons';
import {Shake} from 'react-motions';
import Button from './../button.component';
import get from 'lodash.get';
import { playerReady } from './../../actions/initialAction';
import unoMp3 from './../../sounds/uno.mp3';

class PlayerListItem extends Component {
  constructor(props) {
    super(props);

    this.unoPlayed = false;
    this.unoSound = new Audio(unoMp3);
    this.onReadyClick = this.onReadyClick.bind(this);
    this.playUnoIfRequired = this.playUnoIfRequired.bind(this);
  }

  getPlayerIcon() {
    // show player not ready icon
    if(this.props.status === 'waiting') return <StopIcon/>;
    // show direction icon only for the current player
    return this.props.game.direction > 0 ? <ArrowDownIcon/> : <ArrowUpIcon/>
  }

  onReadyClick() {
    const gameId = this.props.game.gameId;
    const playerId = this.props.player.playerId;

    this.props.playerReady({gameId, playerId});
  }

  playUnoIfRequired() {
    if(this.props.uno && !this.unoPlayed) {
      this.unoSound.play();
      this.unoPlayed = true;
    } else if(!this.props.uno) {
      this.unoPlayed = false;
    }
  }

  render() {
    const isMeCurrentPlayer = this.props.playing && this.props.player.turn;
    this.playUnoIfRequired();

    return (
      <Shake duration={isMeCurrentPlayer ? 4 : 0} infinite={isMeCurrentPlayer ? true : false}>
        <li className={'list-group-item d-flex justify-content-between align-items-center ' + (isMeCurrentPlayer ? 'active' : '')}>
          <div>
            <span className={this.props.playing || this.props.status === 'waiting' ? 'visible' : 'invisible'}>
              {this.getPlayerIcon()}
            </span>
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
            {
              this.props.uno
                ? <span className="badge badge-warning mr-3">UNO</span>
                : ''
            }
            <span className="badge badge-dark badge-pill">{this.props.cardCount}</span>
          </div>
        </li>
      </Shake>
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