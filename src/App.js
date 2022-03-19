import './App.css';
import { useState } from 'react';
import Counter from './components/Counter'

function App() {

  const [state, setState] = useState(0)

  const handleIncrement = () => setState(prev => prev + 1)

  const handleDecrement = () => setState(prev => prev - 1)

  return (
    <div className="app-container">
      <Counter onDecrement={handleDecrement} counter={state} onIncrement={handleIncrement}  />
    </div>
  );
}

export default App;
