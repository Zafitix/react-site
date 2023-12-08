import React, { useEffect, useState } from 'react';
import "./adduser.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SideNavbar } from '../../../components';

const AddUser = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [balance, setBalance] = useState('');
    const [pending, setPending] = useState('');
    const [xp, setXp] = useState('');
    const [level, setLevel] = useState('');
    const [role, setRole] = useState('');
    const [banned, setBanned] = useState('');
    const [ip, setIp] = useState('');
    const [join, setJoin] = useState('');
    const [earnings, setEarnings] = useState('');
    const [withdrawn, setWithdrawn] = useState('');
    const [offers, setOffers] = useState('');
    const [referals, setReferals] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        if (!name || !email) { // Ajoutez d'autres champs obligatoires si nécessaire
            console.log("Please fill in all required fields");
            return;
        }
        
        axios.post('http://localhost:8081/api/adduser', {name, email, password, balance, pending, xp, level, role, banned, ip, join, earnings, withdrawn, offers, referals})
        .then(res => {
            console.log(res);
            navigate('/owner/users');
        }).catch(err => console.log(err));
    }

    return (
        <div className='main__adduser'>
            <div className="main__adduser-content">
                <form onSubmit={handleSubmit}>
                    <h1>Add User</h1>
                    <div className="main__adduser-content__input">
                        <label>Name</label>
                        <input type="text" onChange={e => setName(e.target.value)} placeholder='Enter Name'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Email</label>
                        <input type="email" onChange={e => setEmail(e.target.value)} placeholder='Enter Email'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} placeholder='Enter Password'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Balance</label>
                        <input type="text" onChange={e => setBalance(e.target.value)} placeholder='Enter Balance'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Pending</label>
                        <input type="text" onChange={e => setPending(e.target.value)} placeholder='Enter Pending'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>XP</label>
                        <input type="text" onChange={e => setXp(e.target.value)} placeholder='Enter XP'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Level</label>
                        <input type="text" onChange={e => setLevel(e.target.value)} placeholder='Enter Level'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Role</label>
                        <input type="text" onChange={e => setRole(e.target.value)} placeholder='Enter Role'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Banned</label>
                        <input type="text" onChange={e => setBanned(e.target.value)} placeholder='Banned ? (0 if no, 1 if yes)'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>IP</label>
                        <input type="text" onChange={e => setIp(e.target.value)} placeholder='Enter IP'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Join</label>
                        <input type="text" onChange={e => setJoin(e.target.value)} placeholder='Enter Join Date (y-m-d h:m:s)'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Earnings</label>
                        <input type="text" onChange={e => setEarnings(e.target.value)} placeholder='Enter Earnings'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Withdrawn</label>
                        <input type="text" onChange={e => setWithdrawn(e.target.value)} placeholder='Enter Withdrawn'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Offers</label>
                        <input type="text" onChange={e => setOffers(e.target.value)} placeholder='Enter Offers'/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Referals</label>
                        <input type="text" onChange={e => setReferals(e.target.value)} placeholder='Enter Referals'/>
                    </div>

                    <button className='adduser-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
};


export default AddUser;