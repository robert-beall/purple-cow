import renderer from 'react-test-renderer';
import CounterContainer from './CounterContainer.js';

it('render counter without button', async () => {
  let testFunction = () => console.log("test");

  const component = renderer.create(
    <CounterContainer updateButton={false}
             message="Purple Cows have joined the team!"/>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
