import React, { useState } from 'react';
import './App.css';
import Camera from './components/Camera';
import ProductInfo from './components/ProductInfo';
import FridgeContents from './components/FridgeContents';
import Recipes from './components/Recipes';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Fridge App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Dodaj nowe</Link>
              </li>
              <li>
                <Link to="/recipes">Pokaż przepisy</Link>
              </li>
              <li>
                <Link to="/fridge-contents">Co w lodówie wariacie</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/fridge-contents" element={<FridgeContents />} />
          <Route path="/" element={<><Camera /><ProductInfo /></>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
