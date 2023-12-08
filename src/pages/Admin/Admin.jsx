import React, { useEffect, useState } from 'react';
import "./admin.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {

  const [auth, setAuth] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  axios.defaults.withCredentials = true;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://188.213.25.184:8081')
    .then(res => {
      if(res.data.Status === "Success") {
        setAuth(true);
        axios.get("http://188.213.25.184:8081/api/userInfo")
        .then((res) => {
            if (res.data.id) {
                setUserInfo(res.data);
                if (res.data.role === "admin") {
                    setAdminAuth(true);
                } else {
                    setAdminAuth(false);
                    navigate('/earn');
                }
            } else {
                setAdminAuth(false);
                navigate('/earn');
                setMessage(res.data.Error);
            }
        })
      } else {
        setAuth(false);
        setAdminAuth(false);
        navigate('/earn');
      }
    })
    .then(err => console.log(err));
  }, [])
  
  return (
    <div>
        {
            adminAuth ?
            <div className='admin__page'>
                <h1>{userInfo ? userInfo.role : "Loading..."}</h1>
            </div>
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

export default Admin;