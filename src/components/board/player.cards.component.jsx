import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.component';
import ColorChooser from './../modal/color.chooser.modal.component';

class PlayerCards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColorChooser: false,
      modalCardSymbol: null
    };

    this.showCard = this.showCard.bind(this);
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

  showCard(card, index) {
    const {color, symbol} = card;
    const key = color + symbol + index;

    return <Card {...{color, symbol, key}} playAble onWildCard={this.onWildCard}></Card>
  }

  render() {
    return (
      <div>
        { 
          this.props.player.cards
          ? this.props.player.cards.map(this.showCard)
          : ''
        }
        <ColorChooser show={this.state.showColorChooser} onClose={this.onModalCloseClick} symbol={this.state.modalCardSymbol}/>
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