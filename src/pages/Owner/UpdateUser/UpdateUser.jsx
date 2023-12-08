import React, { useEffect, useState } from 'react';
import "./updateuser.css";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { SideNavbar } from '../../../components';

const UpdateUser = () => {

    const [data, setData] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        axios.get('http://localhost:8081/api/crudInfo')
        .then(res => setData(res.data[id-1]))
        .catch(err => console.log(err));
    }, [])

    const updatedUserData = {
        name: data.name,
        email: data.email,
        balance: data.balance,
        balance_pending: data.balance_pending,
        xp: data.xp,
        role: data.role,
        banned: data.banned,
        register_ip: data.register_ip,
        level: data.level,
        lifetime_earnings: data.lifetime_earnings,
        lifetime_withdrawn: data.lifetime_withdrawn,
        completed_offers: data.completed_offers,
        users_refered: data.users_refered,
    };

    function handleSubmit(event) {
        event.preventDefault();

        axios.put('http://localhost:8081/api/updateuser/'+id, updatedUserData)
        .then(res => {
            console.log(res);
            navigate('/owner/users');
        }).catch(err => console.log(err));
    }

    return (
        <div className='main__adduser'>
            <div className="main__adduser-content">
                <form onSubmit={handleSubmit}>
                    <h1>Update User</h1>
                    <div className="main__adduser-content__input">
                        <label>ID</label>
                        <input type="text" disabled placeholder='Enter Name' value={data.id}/>
                    </div>
                    <div className="main__adduser-content__input">
                        <label>Name</label>
                        <input type="text" placeholder='Enter Name' value={data?.name} onChange={e => setData({...data, name: e.target.value})}/>
                    </div>

                    <div className="main__adduser-content__input">
                        <label>Email</label>
                        <input type="email" placeholder='Enter Email' value={data?.email} onChange={e => setData({...data, email: e.target.value})}/>
                    </div>


                    <button className='adduser-btn'>Update</button>
                </form>
            </div>
        </div>
    );
};


export default UpdateUser;