import { useState } from 'react';
import './App.css';

function App() {
  const [count, setcount] = useState(0);
  const [disabled, setdisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button 
        testid="minus-button" 
        disabled={disabled} 
        onClick={() => setcount((count)=> count-1)}
        >
          -
          </button>

        <button 
        testid="plus-button" 
        disabled={disabled} 
        onClick={() => setcount((count)=> count+1)}
        >
          +
          </button>
          
        <div>
          <button style={{backgroundcolor: "blue"}} data-testid="on/off-button" 
          onClick={() => setdisabled((prev)=> !prev)}>on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
