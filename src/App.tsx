import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const handleOpenAlert = () => {
    alert('Hello react')
  }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <button className="App-btn" onClick={handleOpenAlert}>Open alert</button>
          <a
              className="App-link"
              href="https://github.com/vshishko/daft1"
              target="_blank"
              rel="noopener noreferrer"
          >
            Test-react-project
          </a>

        </header>
      </div>
  );
}
export default App;
