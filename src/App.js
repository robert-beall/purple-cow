import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter.js';

function App() {
  return (
    <div>
      <Counter updateButton={true}
               message="Purple Cows have joined the team!"
               prompt="You can add even more cows to the fray!"
               buttonText="Add Cows"/>
    </div>
  );
}

export default App;
