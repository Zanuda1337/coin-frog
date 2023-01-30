import React from 'react';
import 'src/assets/styles/reset.css';
import 'src/assets/styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from 'src/features/Navigation/Navigation';
import Header from 'src/features/Header/Header';
import Intro from 'src/features/Intro/Intro';
import Coins from 'src/features/Coins/Coins';
import Footer from 'src/features/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Intro />
      <Navigation />
      <Routes>
        <Route path="/" element={<Coins />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
