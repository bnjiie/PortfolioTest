import react from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Section from './components/Section';
import About from './components/About';
import Programs from './components/Programs'
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Programs' element={<Programs/>}/>
        </Routes>
      </Router>
         
    </div>
    
  );
}

export default App;


