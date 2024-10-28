import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { NavBarData } from './Models/NavBarData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import Products from './Components/Products/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navItems={NavBarData} />
        {/* I need to send the data that goes INTO the props in navbar.tsx
      in this case its an array I created */}
        <Routes>
          <Route path='Home' element={<Home />} />
          <Route path='Products' element={<Products />} />
          <Route path='Signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
