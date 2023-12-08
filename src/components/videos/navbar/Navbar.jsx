import React, { useState, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import './navbar.css';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';
import currency from '../../assets/currency.png';
import { History } from '../../components'

import { IoMdMail, IoMdLock, IoIosClose, IoIosPerson } from 'react-icons/io';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = ({ onCloseSignupForm }) => {
  

  //Register API call
  const [registerValues, setRegisterValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  axios.defaults.withCredentials = true;
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', registerValues)
    .then(res => {
      if(res.data.Status === "Success") {
        alert("Successful registered !")
        
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }


  //Login API call
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', loginValues)
    .then(res => {
      if(res.data.Status === "Success") {
        navigate('/earn');
        onCloseSignupForm();
        window.location.reload();
      } else {
        alert(res.data.Error);
      }
    })
    .then(err => console.log(err));
  }

  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
      <div className='form-box'>
        <h2>{isLogin ? 'Sign in' : 'Sign up'}</h2>
        <form>
          {isLogin ? (
            <>
              <div className='input-box'>
                <span className='icon'><IoMdMail /></span>
                <input type="email" required onChange={e => setLoginValues({...loginValues, email: e.target.value})}/>
                <label>Email</label>
              </div>

              <div className='input-box'>
                <span className='icon'><IoMdLock /></span>
                <input type="password" required onChange={e => setLoginValues({...loginValues, password: e.target.value})}/>
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a>Forgot Password</a>
              </div>

              <button type='submit' className='btn' onClick={handleLoginSubmit}>Sign in</button>

              <div className="login-register">
                <p>Don't have an account? <a onClick={toggleForm} className='register-link'>Sign up</a></p>
              </div>

              <div className='conditions'>
                <p>By registering, you agree to our Terms of Service and Privacy Policy.
General Prohibited Uses Use multiple accounts Complete offers on another user's account Use any type of VPN, VPS or emulator software.</p>
              </div>
            </>
          ) : (
            <>
              <div className='input-box'>
                <span className='icon'><IoIosPerson /></span>
                <input type="text" required onChange={e => setRegisterValues({...registerValues, name: e.target.value})} />
                <label>Username</label>
              </div>

              <div className='input-box'>
                <span className='icon'><IoMdMail /></span>
                <input type="email" required onChange={e => setRegisterValues({...registerValues, email: e.target.value})} />
                <label>Email</label>
              </div>

              <div className='input-box'>
                <span className='icon'><IoMdLock /></span>
                <input type="password" required onChange={e => setRegisterValues({...registerValues, password: e.target.value})} />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" />I agree to the terms & conditions</label>
              </div>

              <button type='submit' className='btn' onClick={handleRegisterSubmit}>Sign up</button>

              <div className="login-register">
                <p>Already have an account? <a onClick={toggleForm} className='login-link'>Sign in</a></p>
              </div>
            </>
          )}
        </form>
      </div>
  );
};

const Signin = ({ onCloseSigninForm }) => {
  

  //Register API call
  const [registerValues, setRegisterValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  axios.defaults.withCredentials = true;
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/register', registerValues)
    .then(res => {
      if(res.data.Status === "Success") {
        alert("Successful registered !")
      } else {
        alert("Error");
      }
    })
    .then(err => console.log(err));
  }


  //Login API call
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', loginValues)
    .then(res => {
      if(res.data.Status === "Success") {
        navigate('/earn');
        onCloseSigninForm();
        window.location.reload();
      } else {
        alert(res.data.Error);
      }
    })
    .then(err => console.log(err));
  }

  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
      <div className='form-box'>
        <h2>{isLogin ? 'Sign in' : 'Sign up'}</h2>
        <form>
          {isLogin ? (
            <>
              <div className='input-box'>
                <span className='icon'><IoMdMail /></span>
                <input type="email" required onChange={e => setLoginValues({...loginValues, email: e.target.value})}/>
                <label>Email</label>
              </div>

              <div className='input-box'>
                <span className='icon'><IoMdLock /></span>
                <input type="password" required onChange={e => setLoginValues({...loginValues, password: e.target.value})}/>
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a>Forgot Password</a>
              </div>

              <button type='submit' className='btn' onClick={handleLoginSubmit}>Sign in</button>

              <div className="login-register">
                <p>Don't have an account? <a onClick={toggleForm} className='register-link'>Sign up</a></p>
              </div>

              <div className='conditions'>
                <p>By registering, you agree to our Terms of Service and Privacy Policy.
General Prohibited Uses Use multiple accounts Complete offers on another user's account Use any type of VPN, VPS or emulator software.</p>
              </div>
            </>
          ) : (
            <>
              <div className='input-box'>
                <span className='icon'><IoIosPerson /></span>
                <input type="text" required onChange={e => setRegisterValues({...registerValues, name: e.target.value})} />
                <label>Username</label>
              </div>

              <div className='input-box'>
                <span className='icon'><IoMdMail /></span>
                <input type="email" required onChange={e => setRegisterValues({...registerValues, email: e.target.value})} />
                <label>Email</label>
              </div>

              <div className='input-box'>
                <span className='icon'><IoMdLock /></span>
                <input type="password" required onChange={e => setRegisterValues({...registerValues, password: e.target.value})} />
                <label>Password</label>
              </div>

              <div className="remember-forgot">
                <label><input type="checkbox" />I agree to the terms & conditions</label>
              </div>

              <button type='submit' className='btn' onClick={handleRegisterSubmit}>Sign up</button>

              <div className="login-register">
                <p>Already have an account? <a onClick={toggleForm} className='login-link'>Sign in</a></p>
              </div>
            </>
          )}
        </form>
      </div>
  );
};

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [signinFormOpen, setSigninFormOpen] = useState(false);
  const [signupFormOpen, setSignupFormOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleCloseSignupForm = () => {
    setSignupFormOpen(false); // Mettre à jour l'état de signupFormOpen pour le fermer
  };

  const handleCloseSigninForm = () => {
    setSigninFormOpen(false); // Mettre à jour l'état de signupFormOpen pour le fermer
  };

  const handleDelete = () => {
    axios.get('http://localhost:8081/logout')
    .then(res => {
      window.location.reload();
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    axios
      .get("http://localhost:8081/api/userInfo")
      .then((res) => {
        if (res.data.id) {
          // Vérification si les données de l'utilisateur sont présentes
          setIsLoggedIn(true);
          setUserInfo(res.data); // Stockage des informations utilisateur
        } else {
          setIsLoggedIn(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='navbar__flex'>
      <div className='main__navbar'>
        <div className='main__navbar-links'>
          <div className='main__navbar-links_logo'>
            <img src={logo} alt='logo' onClick={() => navigate('/')}/>
          </div>
          <div className='main__navbar-links_container'>
            <p className='link'><a onClick={() => navigate('/earn')}>Earn</a></p>
            <p className='link' onClick={() => navigate('/cashout')}><a>Cashout</a></p>
            <p className='link'><a>Leaderboard</a></p>
          </div>
        </div>
        <div className='main__navbar-sign'>
          {isLoggedIn ? (
            <div className="user-container">
              <div className='user-bal' onClick={() => navigate('/cashout')}>
                <img src={currency} alt='currency' className='currency' />
                <p className='username'>{userInfo ? userInfo.balance : "Loading..."}</p>
              </div>
              <div className='user-profile' onClick={toggleProfileMenu}>
                <div className='user-info'>
                  <img src={profile} alt='Profile' className='profile-image' />
                  <p className='username'>{userInfo ? userInfo.name : "Loading..."}</p>
                  <IoIosArrowDown className='arrow' color='#fff' size={18} />
                </div>
              </div>
            </div>
          ) : (
            <>
              <p className='signin' onClick={() => setSigninFormOpen(!signinFormOpen)}>Sign in</p>
              <button type='button' onClick={() => setSignupFormOpen(!signupFormOpen)}>Sign up</button>
            </>
          )}
        </div>
        <div className='main__navbar-menu'>
          {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='main__navbar-menu_container scale-up-center'>
              <div className='main__navbar-menu_container-links'>
                <p className='link'><a onClick={() => navigate('/earn')}>Earn</a></p>
                <p className='link'><a onClick={() => navigate('/cashout')}>Cashout</a></p>
                <p className='link'><a>Leaderboard</a></p>
                <div className='main__navbar-menu_container-links-sign'>
                  <p className='signin'>Sign in</p>
                  <button type='button'>Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {signinFormOpen && (
          <>
            <div className="main__navbar-overlay" /*</>onClick={() => setFormOpen(!formOpen)}*/>
              <div className="wrapper scale-up-center">
                <span className='icon-close' onClick={() => setSigninFormOpen(!signinFormOpen)}><IoIosClose /></span>
                <Signin onCloseSigninForm={handleCloseSigninForm}/>
              </div>
            </div>
          </>
        )}

        {signupFormOpen && (
          <>
            <div className="main__navbar-overlay" /*</>onClick={() => setFormOpen(!formOpen)}*/>
              <div className="wrapper scale-up-center">
                <span className='icon-close' onClick={() => setSignupFormOpen(!signupFormOpen)}><IoIosClose /></span>
                <Signup onCloseSignupForm={handleCloseSignupForm}/>
              </div>
            </div>
          </>
        )}

        {showProfileMenu && (
          <div className='dropdown-menu'>
            <p onClick={() => navigate('/profile')}>Profile</p>
            <p>Parrainage</p>
            <p>Paiement</p>
            <button className='logout' onClick={handleDelete}>Logout</button>
          </div>
        )}
      </div>
      <div className='history'>
        < History />
      </div>
    </div>
  )
}

export default Navbar;






