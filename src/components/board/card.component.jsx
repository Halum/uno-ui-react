import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import spriteMap from '../../lib/card.sprite.map';
import utils from './../../lib/utils';

import largeSpriteSheet from './../../images/spritesheet_uno.png';
import socketService from './../../lib/socketService';
import {Wobble} from 'react-motions';
import Button from './../button.component';
import BackgroundImage from './../background.image.component';

class Card extends Component {
  constructor(props) {
    super(props);

    const spriteData = spriteMap[props.color + props.symbol];

    this.spriteData = this.resizeCardOnScreenSize(spriteData);

    this.onCardClick = this.onCardClick.bind(this);
    this.onSkipClick = this.onSkipClick.bind(this);
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

  onSkipClick(e) {
    e.stopPropagation();
    
    const {playerId} = this.props.player;
    socketService.skipCard(playerId);
  }

  resizeCardOnScreenSize(spriteData) {
    let {x, y, width, height} = spriteData;
    const multiplier = utils.screenMultiplier();
    
    console.log(multiplier);

    x *= multiplier;
    y *= multiplier;
    width *= multiplier;
    height *= multiplier;
    const size = {
      width: 1871 * multiplier,
      height: 1024 * multiplier
    }

    return {x, y, width, height, size};
  }

  render() {
    const {skipAble} = this.props;

    return (
      <div className={'d-inline-block pl-2 ' + this.props.style} onClick={this.onCardClick}>
        <Wobble duration={skipAble ? 10 : 0} infinite={skipAble ? true : false}>
          <BackgroundImage filename={largeSpriteSheet} {...this.spriteData} />

          {skipAble ? <Button content="Skip" onClick={this.onSkipClick} className="btn-warning btn-sm col"></Button> : ''}
        </Wobble>
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