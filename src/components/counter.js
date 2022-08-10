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
    let update = null;

    if(this.props.updateButton) {
      update =
        <div>
          {this.props.prompt} <EventButton eventHandler={this.handleClick} text={this.props.buttonText}/>
        </div>
    }

    return (
      <div>
        <p>{this.state.count.value} {this.props.message}</p>
        {update}
      </div>
    );
  }
}
