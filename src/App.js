import react from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Section from './components/Section';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <Section />   
    </div>
    
  );
}

export default App;
