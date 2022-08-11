import React from 'react';

import './styles/App.scss';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Footer from './components/UI/footer/Footer';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
} 

export default App;