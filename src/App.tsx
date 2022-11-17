import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Offer from './pages/Offer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import MainLayout from './layouts/MainLayout';

const App: React.FC = () => {
  
  return (
    <main className="App">      
      <Routes>
        <Route path="novelty_express" element={<MainLayout/>}>
          <Route path="" element={<Home />}></Route>
          <Route path="about-us" element={<About />}></Route>
          <Route path="our-offer" element={<Offer />}></Route>
          <Route path="stock" element={''}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </main>
  );
};

export default App;
