import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.component';
import ColorChooserModal from './../modal/color.chooser.modal.component';
import findIndex from 'lodash.findindex';

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

    return <Card {...{color, symbol, key, skipAble}} playAble onWildCard={this.onWildCard}></Card>
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