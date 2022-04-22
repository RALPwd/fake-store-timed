import React from 'react';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
