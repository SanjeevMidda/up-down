import './index.css';
import Circle from './components/Circle';
import { useState } from 'react';

function App() {

  const [state, setState] = useState(true);

  return (
    <div className="App">
      <div className="actions">
        <h3 onClick={() => setState(true)}>UP</h3>
        <h3 onClick={() => setState(false)}>DOWN</h3>
      </div>
      <div className="container">
        <Circle state = {state}/>
        <Circle state = {!state}/>
        <Circle state = {state}/>
        <Circle state = {!state}/>
      </div>
    </div>
  );
}

export default App;
