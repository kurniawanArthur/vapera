import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './components/LandingPage';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <LandingPage/>
  </React.StrictMode>
);