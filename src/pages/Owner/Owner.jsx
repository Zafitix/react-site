import React, { useEffect, useState } from 'react';
import "./owner.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SideNavbar } from '../../components';

const Owner = () => {

  const [auth, setAuth] = useState(false);
  const [ownerAuth, setOwnerAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      if(res.data.Status === "Success") {
        setAuth(true);
        axios.get("http://localhost:8081/api/userInfo")
        .then((res) => {
            if (res.data.id) {
                setUserInfo(res.data);
                if (res.data.role === "owner") {
                    setOwnerAuth(true);
                } else {
                    setOwnerAuth(false);
                    navigate('/earn');
                }
            } else {
                setOwnerAuth(false);
                navigate('/earn');
                setMessage(res.data.Error);
            }
        })
      } else {
        setAuth(false);
        setOwnerAuth(false);
        navigate('/earn');
      }
    })
    .then(err => console.log(err));
  }, [])


  
  return (
    <div>
        {
            ownerAuth ?
            <SideNavbar />
            :
            <div className='noauth'>
                <h3>{message}</h3>
                <h3>Login Now</h3>
                <button>Login</button>
            </div>
        }
    </div>
  );
};


export default Owner;