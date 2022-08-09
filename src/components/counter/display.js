import React from 'react';
import axios from 'axios';

export default class Display extends React.Component {

  state = {
   count: []
  }

  componentDidMount() {
    axios.get(`https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`)
      .then(res => {
        const count = res.data;
        this.setState({ count });
      });
  }

  handleClick = () => {
    axios.get(`https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`)
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
        <div><button onClick={this.handleClick} type="button">Update Counter</button></div>
      </div>
    );
  }
}
