import React from 'react';
import axios from 'axios';

export default class EventButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.eventHandler} type="button">{this.props.text}</button>
    );
  }
}
