import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.component';

class PlayerCards extends Component {
  constructor(props) {
    super(props);
  }

  showCard(card, index) {
    const {color, symbol} = card;
    return (
      <Card color={color} symbol={symbol} key={index}></Card>
    );
  }

  render() {
    return (
      <div>
        {
          this.props.player.cards
          ? this.props.player.cards.map(this.showCard)
          : ''
        }
      </div>
    );
  }
}


const mapStoreToProps = store => {
  return {
    player: store.initializer.player
  };
};

export default connect(mapStoreToProps, null)(PlayerCards);