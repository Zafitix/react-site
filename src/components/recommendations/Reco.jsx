import React from 'react';
import { binance, hangmyads, lootably, offertoro, paypal } from './imports';
import './reco.css';

const Reco = () => (
  <div className="main__brand section__padding">
    <h2>Recommended by</h2>
    <div className='main__brand--image'>
      <div>
        <img src={binance} alt='google'/>
      </div>
      <div>
        <img src={hangmyads} alt='slack'/>
      </div>
      <div>
        <img src={lootably} alt='atlassian'/>
      </div>
      <div>
        <img src={offertoro} alt='dropbox'/>
      </div>
      <div>
        <img src={paypal} alt='shopify'/>
      </div>
    </div>
  </div>
);

export default Reco;