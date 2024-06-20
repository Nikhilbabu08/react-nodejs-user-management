import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/NavBar'
import CheckAuth from '../auth/CheckAuth'
import axios from 'axios';
import API_BASE_URL from '../../baseUrl';
import { useSelector } from 'react-redux';

const AllUsers = () => {
    const user = useSelector(store => store.auth.user)
    const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.token) {
            axios.get(`${API_BASE_URL}getusers`, {
                headers: { 'Authorization': `Bearer ${user.token}` }
            }).then(res => { setUsers(res.data) })
                .catch(err => console.log(err))
        }
    }, [user?.token])

    return (
        <>
            <Navbar />

            <h2 className='text-center mt-3'><b>All Users</b></h2>

            <div className="container mt-3">
                {users.map(user => (
                    <div className="row justify-content-center" key={user.id}>
                        <div className="col-lg-8 col-md-10 col-sm-12">
                            <ul className="list-group">
                                <li className="list-group-item d-flex align-items-center">
                                    <img src="https://cdn-icons-png.freepik.com/256/6543/6543018.png?ga=GA1.1.1459516267.1711715282&semt=ais_hybrid" alt="profile" className="rounded-circle" style={{ width: '30px', height: '30px' }} />
                                    <span className="ms-3">{user.name} (Company: {user.company})</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}

export default CheckAuth(AllUsers)
