// LoadingPage.js

import React from 'react';
import logo from '../../assets/logo.png';
import './loadingpage.css'; // Fichier CSS pour styliser la page d'attente

const LoadingPage = () => {
  
 
return (
    
    <div className="loading-page">
      <img src={logo} alt="Logo" className="loading-logo" />
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingPage;