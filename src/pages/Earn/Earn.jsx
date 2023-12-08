import React, { useEffect, useState } from 'react';
import "./earn.css";
import axios from 'axios';
import { Offers, Offerwalls, Surveys, Videos, Navbar, Footer } from '../../components'

const Earn = () => {

  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      if(res.data.Status === "Success") {
        setAuth(true);
      } else {
        setAuth(false);
        setMessage(res.data.Error);
      }
    })
    .then(err => console.log(err));
  }, [])
  

  return (
    <div>
      <Navbar />
        {
            auth ?
            <div className='Earn'>
                < Offers />
                < Offerwalls />
                < Surveys />
                < Videos />
            </div>
            :
            <div className='noauth'>
                <h3>{message}</h3>
                <h3>Login Now</h3>
                <button>Login</button>
            </div>
        }
      <Footer />
    </div>
  );
};

export default Earn;