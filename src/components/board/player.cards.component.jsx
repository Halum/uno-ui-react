import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.component';
import ColorChooserModal from './../modal/color.chooser.modal.component';
import findIndex from 'lodash.findindex';
import has from 'lodash.has';
import utils from './../../lib/utils';

class PlayerCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColorChooser: false,
      modalCardSymbol: null
    };

    this.prepareCard = this.prepareCard.bind(this);
    this.showCards = this.showCards.bind(this);
    this.onWildCard = this.onWildCard.bind(this);
    this.onModalCloseClick = this.onModalCloseClick.bind(this);
  }

  onWildCard(symbol) {
    const state = {
      showColorChooser: true,
      modalCardSymbol: symbol
    }
    this.setState({...state});
  }

  onModalCloseClick() {
    this.setState({showColorChooser: false});
  }

  prepareCard(card, index) {
    const {color, symbol} = card;
    const {cards, takenCard} = this.props.player;
    const key = color + symbol + index;
    // lodash findIndex return 0 for null value
    const skipAble = takenCard 
      ? findIndex(cards, takenCard) === index 
      : false;
    
    // is this card palyable && player is not playing the taken card && its his turn
    // so highlight this card if it can be played on desk card
    const highlight = has(this.props.game, 'desk.discard') && !skipAble && this.props.player.turn
      ? utils.canPlay(this.props.game.desk.discard, card)
      : false;

    return <Card {...{color, symbol, key, skipAble, highlight}} playAble onWildCard={this.onWildCard}></Card>
  }

  showCards() {
    const {participants} = this.props.game;
    let cards = this.props.player.cards || [];
    
    // this player has no card, so lets find if he is spectating someone
    if(cards.length === 0 && participants) {
      const participantWithCards = participants.find(data => data.cards && data.cards.length > 0);
      if(participantWithCards) {
        cards = participantWithCards.cards;
      }
    }

    if(cards.length > 0) {
      return cards.map(this.prepareCard);
    }

    return '';
  }

  render() {
    return (
      <div>
        {this.showCards()}
        <ColorChooserModal show={this.state.showColorChooser} onClose={this.onModalCloseClick} symbol={this.state.modalCardSymbol}/>
      </div>
    );
  }
}


const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps, null)(PlayerCards);