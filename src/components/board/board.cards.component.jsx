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
      </div>
    );
  }
}


const mapStoreToProps = store => {
  return {
  };
};

export default connect(mapStoreToProps, null)(BoardCards);