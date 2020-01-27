import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
    <Welcome />
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;
