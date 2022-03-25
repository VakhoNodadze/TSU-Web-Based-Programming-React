import './App.css';
import { useState } from 'react';
import Counter from './components/Counter'

function App() {


  // დავალება:
  // handleAddCounter ისე აამუშავეთ რომ დიფოლტ ველიუ დინამიურად გაუწეროთ.
  // ანუ, დაამატეთ inputის, სადაც რიცხვს შეიყვანთ და მერე ღილაკზე დაჭერისას იმ რიცხვით შეიქმნება ახალი ქაუნთერი
  const [state, setState] = useState([{counter: 0}, {counter: 15}])


  const handleAddCounter = () => {
    const newState = [...state]
    newState.push({counter: 8})
    setState(newState)
    // setState(prevState => [...prevState, { counter: 8 } ] )
  }


  const handleIncrement = (index) => {
    const newState = [...state]
    newState[index].counter += 1
    setState(newState)
  }

  const handleDecrement = (index) => {
    const newState = [...state]
    newState[index].counter -= 1
    setState(newState)
  }

  return (
    <div className="app-container">
      <button onClick={handleAddCounter}>Add Counter</button>
      {state.map((item, index) =>  <Counter 
          key={index}
          id={index}
          counter={item.counter} 
          onIncrement={handleIncrement}  
          onDecrement={handleDecrement} 
        />
      )}
    </div>
  );
}

export default App;
