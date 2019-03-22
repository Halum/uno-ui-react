import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.component';
import has from 'lodash.has';

class BoardCards extends Component {
  constructor(props) {
    super(props);
    this.coverColor = 'any';
    this.coverSymbol = 'cover';
    this.coverKey = this.coverColor + this.coverSymbol;

    this.showCard = this.showCard.bind(this);
  }

  showCard() {
    let {color, symbol} = this.props.game.desk.discard;
    const key = color + symbol;
    
    return <Card color={color} symbol={symbol} key={key}/>
  }

  render() {
    return (
      <div>
        {has(this.props.game, 'desk.discard')
          ? this.showCard()
          : ''
        }
        <Card color={this.coverColor} symbol={this.coverSymbol} key={this.coverKey} takeAble />
      </div>
    );
  }
}


const mapStoreToProps = store => {
  return {
    game: store.initializer.game
  };
};

export default connect(mapStoreToProps, null)(BoardCards);