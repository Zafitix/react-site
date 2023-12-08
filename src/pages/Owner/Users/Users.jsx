import React, { useEffect, useState } from 'react';
import "./users.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SideNavbar } from '../../../components';

const Owner = () => {

    const [student, setStudent] = useState([]);
    const [searchBy, setSearchBy] = useState('name'); // Valeur par défaut pour la recherche
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get('http://localhost:8081/api/crudInfo')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8081/api/deleteuser/'+id)
            console.log('http://localhost:8081/api/deleteuser/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
    }

    const filteredStudents = student.filter(student => {
        if (searchBy === 'name') {
            return student.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchBy === 'email') {
            return student.email.toLowerCase().includes(searchTerm.toLowerCase());
        }

        return true; // Si aucune option sélectionnée, affiche tous les étudiants
    });

    return (
        <div className='main__users'>
            <SideNavbar />
            <div className="main__users-content">
                <h1>MAIN USERS</h1>
                <div className="tab__container">
                    <div className="search__container">
                        <select value={searchBy} onChange={(e) => setSearchBy(e.target.value)}>
                            <option value="name">Name</option>
                            <option value="email">Email</option>
                        </select>
                        <input
                            type="text"
                            placeholder={`Search by ${searchBy}`}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button onClick={() => navigate('/owner/adduser')}>Add +</button>
                    <table className='tab'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th>Pending</th>
                                <th>XP</th>
                                <th>Level</th>
                                <th>Role</th>
                                <th>Banned</th>
                                <th>IP</th>
                                <th>Join</th>
                                <th>Earnings</th>
                                <th>Withdrawn</th>
                                <th>Offers</th>
                                <th>Referals</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                 filteredStudents.map((data, i) => (
                                    <tr key={i}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.balance}</td>
                                        <td>{data.balance_pending}</td>
                                        <td>{data.xp}</td>
                                        <td>{data.level}</td>
                                        <td>{data.role}</td>
                                        <td>{data.banned}</td>
                                        <td>{data.register_ip}</td>
                                        <td>{data.join_date.split("T")[0]}</td>
                                        <td>{data.lifetime_earnings}</td>
                                        <td>{data.lifetime_withdrawn}</td>
                                        <td>{data.completed_offers}</td>
                                        <td>{data.users_refered}</td>
                                        <td>
                                            <button onClick={() => navigate(`/owner/updateuser/${data.id}`)}>Update</button>
                                            <button onClick={e => handleDelete(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export default Owner;