import React from 'react';
import About from './componets/About';
import Nav from './componets/Nav';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Nav></Nav>
        <About></About>
      </main>
    </div>
  );
}

export default App;
