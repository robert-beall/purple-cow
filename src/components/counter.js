import React from 'react';
import axios from 'axios';
import EventButton from './eventbutton.js';

export default class Display extends React.Component {

  state = {
   count: []
 }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_COUNTER_ENDPOINT}/get/${process.env.REACT_APP_COUNTER_KEY}`)
      .then(res => {
        const count = res.data;
        this.setState({ count: count });
      });
  }

  handleClick = () => {
    axios.get(`${process.env.REACT_APP_COUNTER_ENDPOINT}/hit/${process.env.REACT_APP_COUNTER_KEY}`)
      .then(res => {
        const count = res.data;
        this.setState({ count });
        console.log(this.state.count.value);
      });
  }

  render() {
    return (
      <div>
        <div>Current Count {this.state.count.value}</div>
        <EventButton show={this.props.updateButton} eventHandler={this.handleClick} text="Update Counter"/>
      </div>
    );
  }
}
