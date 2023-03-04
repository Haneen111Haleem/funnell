import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Header from './components/Header';
import './components/Header.css';
import Hero from './components/Hero';
import './components/Hero.css';
import Insight from './components/Insight';
import './components/Insight.css';
import Understand from './components/Understand';
import './components/Understand.css';
import Data from './components/Data';
import './components/Data.css';
import Unlock from './components/Unlock';
import './components/Unlock.css';
import Track from './components/Track';
import './components/Track.css';
import Budgets from './components/Budgets';
import './components/Budgets.css';
import Footer from './components/Footer';
import './components/Footer.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Header/>
    <Hero/>
    <Insight/>
    <Understand/>
    <Data/>
    <Unlock/>
    <Track/>
    <Budgets/>
    <Footer/>
  </React.StrictMode>
);