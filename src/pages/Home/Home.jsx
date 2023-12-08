import React from 'react';
import './home.css';
import { Header, Reco, Navbar, Footer } from '../../components';


const Home = () => {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Reco />
      <Footer />
    </div>
  )
}

export default Home