import React from 'react';
import axios from 'axios';

export default class Display extends React.Component {

  state = {
   count: []
 }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_COUNTER_ENDPOINT}/get/${process.env.REACT_APP_COUNTER_KEY}`)
      .then(res => {
        const count = res.data;
        this.setState({ count: count });
      })
      .catch(error => {
        console.log(error.toJSON());
        this.setState({count: {value: 0}});
      });
  }

  handleClick = () => {
    axios.get(`${process.env.REACT_APP_COUNTER_ENDPOINT}/hit/${process.env.REACT_APP_COUNTER_KEY}`)
      .then(res => {
        const count = res.data;
        this.setState({ count });
        console.log(this.state.count.value);
      })
      .catch(error => {
        console.log(error.toJSON());
      });;
  }

  render() {
    let update = null;

    if(this.props.updateButton) {
      update =
        <div>
          {this.props.prompt} <button onClick={this.handleClick}>{this.props.buttonText}</button>
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
