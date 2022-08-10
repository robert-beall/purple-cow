import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CounterContainer from './components/CounterContainer.js';
import PageCarousel from "./components/PageCarousel.js";

function App() {
  return (
    <div>
      <PageCarousel />
      <CounterContainer updateButton={true}
               message="Purple Cows have joined the team!"
               prompt="You can add even more cows to the fray!"
               buttonText="Add Cows"/>
    </div>
  );
}

export default App;
