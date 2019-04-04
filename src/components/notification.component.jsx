import React from 'react';
import { connect } from 'react-redux';
import {AlertList} from "react-bs-notifier";
import {resetError} from './../actions/initialAction';

class NotificationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    }

    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidUpdate() {
    if(this.props.error !== null) {
      this.setState(state => {
        return {alerts: [...state.alerts,
          {id: (new Date()).getTime(), type:'danger', message: this.props.error}
        ]};
      });
      this.props.resetError();
    }
  }

  onDismiss(alert) {
    this.setState({
      alerts: this.state.alerts.filter(item => item.id !== alert.id)
    })
  }

  render() {
    return (
      <AlertList alerts={this.state.alerts} position="bottom-left" timeout={5000} onDismiss={this.onDismiss}/>
    );
  }
};

const mapStoreToProps = store => {
  return {
    game: store.initializer.game,
    player: store.initializer.player,
    error: store.initializer.error
  };
};

export default connect(mapStoreToProps, {resetError})(NotificationComponent);