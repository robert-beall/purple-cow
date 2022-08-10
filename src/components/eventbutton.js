import React from 'react';
import axios from 'axios';

export default class EventButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <button onClick={this.props.eventHandler} type="button">{this.props.text}</button>
    );
  }
}
