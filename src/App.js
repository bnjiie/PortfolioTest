import react from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Section from './components/Section';
import About from './components/About';
import Programs from './components/Programs'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function App(){
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/'/>
          <Route path='/About'/>
          <Route path='/Programs'/>
          <Route path='/Contact'/>
        </Routes>
      </Router>


          
      <Home />
      <Section />   
    </div>
    
  );
}

export default App;


