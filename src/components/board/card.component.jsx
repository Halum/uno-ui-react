import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sprite} from 'react-spritesheet';
import PropTypes from 'prop-types';
import spriteMap from '../../lib/card.sprite.map';
import largeSpriteSheet from './../../images/spritesheet_uno.png';
import socketService from './../../lib/socketService';
import Button from './../button.component';

class Card extends Component {
  constructor(props) {
    super(props);

    const spriteData = spriteMap[props.color + props.symbol];
    const {x, y, width, height} = spriteData;

    this.spriteData = {x, y, width, height};
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick() {
    // player can manipulate only while playing
    if(this.props.player.status !== 'playing' || !this.props.player.turn) return;
    
    const {playerId} = this.props.player;
    const {color, symbol} = this.props;
    
    if(this.props.playAble) {
      if(['wild', '4+'].includes(symbol)) {
        return this.props.onWildCard(symbol);
      }
      return socketService.playCard(playerId, {color, symbol});
    }
    else if(this.props.takeAble) return socketService.takeCard(playerId);
  }

  render() {
    return (
      <div className={'d-inline-block pl-2 ' + this.props.style} onClick={this.onCardClick}>
        <Sprite filename={largeSpriteSheet} {...this.spriteData}></Sprite>
        {this.props.skipAble ? <Button content="Skip" onClick={this.onJoinClick} className="btn-warning btn-sm col"></Button> : ''}
      </div>
    );
  }
}

Card.defaultProps = {
  takeAble: false,
  playAble: false,
  skipAble: false
}

Card.propTypes = {
  color: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  takeAble: PropTypes.bool,
  playAble: PropTypes.bool,
  onWildCard: PropTypes.func,
  style: PropTypes.string,
  skipAble: PropTypes.bool
};

const mapStoreToProps = store => {
  return {
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps)(Card);