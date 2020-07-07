import React from 'react';
import './App.css';
import data from './codesData/data.js'
import Codes from './components/Codes.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Codes branches={data} />
        </div>
      </header>
    </div>
  );
}

export default App;
