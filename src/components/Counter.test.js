import renderer from 'react-test-renderer';
import Counter from './Counter.js';

it('render counter without button', async () => {
  let testFunction = () => console.log("test");

  const component = renderer.create(
    <Counter updateButton={false}
             message="Purple Cows have joined the team!"/>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
