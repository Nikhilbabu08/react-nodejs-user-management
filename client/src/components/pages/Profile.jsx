import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../navbar/NavBar'
import CheckAuth from '../auth/CheckAuth'

const Profile = () => {
  const user = useSelector(store => store.auth.user)

  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '90px' }}>
        <div className="card border rounded-5 pb-4 bg-white shadow box-area" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="card-body d-flex flex-column align-items-center">
            <img
              className='img-fluid mt-4 '
              src="https://cdn-icons-png.freepik.com/256/6543/6543018.png?ga=GA1.1.1459516267.1711715282&semt=ais_hybrid"
              alt="Profile"
              style={{ width: '150px', height: '150px' }}
            />
            <div className="mt-4 text-start">
              
              <h1><b>{user && user.name}</b></h1>
              <h5><b>ID: </b>{user && user.id}</h5>
              <h5><b>Company: </b>{user && user.company}</h5>
              <h5><b>Email: </b>{user && user.email}</h5>
             
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckAuth(Profile)
