import React from 'react';
import axios from 'axios';

export default class Update extends React.Component {

  handleClick() {
    axios.get(`https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e`)
      .then(res => {
        const count = res.data;
        console.log(res.data.value);
      });
  }

  render() {
    return (
      <button onClick={this.handleClick} type="button">Update Counter</button>
    );
  }
}
