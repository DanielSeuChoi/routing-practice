import './App.css';
import Home from './components/Home';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Hello from './components/Hello';
import HelloColor from './components/HelloColor';
import 'bootstrap/dist/css/bootstrap.min.css';
import Number4 from './components/Number4,';
function App() {

  return (
    <div className="App">
      <nav className='p-4 navbar navbar-expand-lg navbar-light bg-light'>
        <h2>Click a route</h2>
        <div className='p-2'>
          <Link to={"/hello"}> Go to Hello</Link>
        </div>
        <div className='p-2'>
          <Link to={"/4"}>Number 4</Link>
        </div>
        <div className='p-2'>
          <Link to={"/hello/blue/red"}>Hello blue/red</Link>
        </div>
        <div className='p-2'>
          <Link to={"/home"} >Home</Link>
        </div>
      </nav>

      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/4" element={<Number4 />} />
          <Route path="/hello/blue/red" element={<HelloColor />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
