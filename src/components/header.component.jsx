import { Component } from 'react';
import { connect } from 'react-redux';

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
};

const mapStoreToProps = store => {
  return {

  };
};

export default connect(mapStoreToProps, null)(HeaderComponent);