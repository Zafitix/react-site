import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import './App.css';
import Earn from './pages/Earn/Earn';
import Home from './pages/Home/Home';
import Cashout from './pages/Cashout/Cashout';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/Notfound/Notfound';
import Admin from './pages/Admin/Admin';
import Owner from './pages/Owner/Owner';
import Users from './pages/Owner/Users/Users';
import AddUser from './pages/Owner/AddUser/AddUser';
import UpdateUser from './pages/Owner/UpdateUser/UpdateUser';
//import LoadingPage from './pages/LoadingPage/LoadingPage';

const App = () => {
  //const [loading, setLoading] = useState(true);

  //useEffect(() => {
    //setTimeout(() => {
      //setLoading(false);
    //}, 2000)
  //}, []);

  //if (loading) {
    //return <LoadingPage />;
  //}

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/owner' element={<Owner />} />
        <Route path='/owner/users' element={<Users />} />
        <Route path='/owner/adduser' element={<AddUser />} />
        <Route path='/owner/updateuser/:id' element={<UpdateUser />} />
        <Route path='/earn' element={<Earn />} />
        <Route path='/cashout' element={<Cashout />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
