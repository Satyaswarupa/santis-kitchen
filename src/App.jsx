import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element= {<Home />} />
          <Route path="/menu" element={<Menu />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
