import logo from './logo.svg';
import './App.css';
import Counter from './components/counter.js';

function App() {
  return (
    <div>
      <Counter updateButton={true}><span>Hello World</span></Counter>
    </div>
  );
}

export default App;
