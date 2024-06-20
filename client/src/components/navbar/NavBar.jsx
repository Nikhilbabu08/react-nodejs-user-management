import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useNavigate} from 'react-router-dom'
import { userLogout } from '../../store/authSlice';

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.auth.user)

  const handleLogout = ()=> {
    dispatch(userLogout())
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/'}>Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/allusers'}>All Users</NavLink>
            </li>
            {user ?
             <>
              <li className="nav-item">
              <NavLink className="nav-link" onClick={handleLogout} to={'/login'}>Logout</NavLink>
            </li>
            </> : navigate('/login')}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
