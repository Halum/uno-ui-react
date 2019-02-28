import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card.component';

class BoardCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card color="any" symbol="cover"></Card>
        {
          this.props.game.desk 
          ? <Card color={this.props.game.desk.discard.color} symbol={this.props.game.desk.discard.symbol}></Card>
          : ''
        }
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