import './App.css';
import Home from './components/Home.js';
import About from './components/About';
import Programs from './components/Programs'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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


