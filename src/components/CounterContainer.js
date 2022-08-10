import React from 'react';
import axios from 'axios';
import PurpleCowButton from './PurpleCowButton.js';
import PurpleCowProgressBar from './PurpleCowProgressBar';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import toast, { Toaster } from 'react-hot-toast';

export default class CounterContainer extends React.Component {

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
        toast.success('Congratulations! You successfully added a purple cow!');
      })
      .catch(error => {
        console.log(error.toJSON());
      });;
  }

  render() {
    return (
      <Container className="mt-5 text-center">
        <Stack>
          <h1>{this.state.count.value}</h1>
          <PurpleCowProgressBar now={this.state.count.value} max={100000}/>
        </Stack>
        <Stack className="my-4 text-start">
          <p>
            <strong>{this.state.count.value}</strong> purple cows have been added to the system. Our long-term goal
            is to add over <strong>100,000</strong> of the little guys by the end of the year. Because of the dedicated
            clickers on project purple, we get closer to our goal each and every day!
          </p>
          <p>
            Adding purple cows to an imaginary ledger is silly fun, but that doesn't mean there isn't a lesson
            to it. Progress doesn't happen on its own. People bring about a better tomorrow. Every worthy cause needs
            support from the masses. Luckily, modern web applications make it easier than ever to engage with a base and build
            support for a cause.
          </p>
          <p>
            We are now <strong>{Math.round((this.state.count.value/100000) * 100)}%</strong> of the way to our end goal. Every little
            click counts. If you want to contribute and add a purple cow, click the button below.
          </p>
        </Stack>
        <PurpleCowButton onClick={this.handleClick}>Click to add a Purple Cow!</PurpleCowButton>
        <Toaster />
      </Container>
    );
  }
}
