import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API_BASE_URL from '../../baseUrl'

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${API_BASE_URL}auth/login`, {
      email, password
    })
      .then((res) => {
        setErrorMsg('')
        var user = {
          name: res.data.user.name,
          company: res.data.user.company,
          email: res.data.user.email,
          token: res.data.token,
          id: res.data.user.id
        }
        navigate('/')
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.errors) {
          setErrorMsg(error.response.data.errors.map((err, index) => <div key={index} className="error-message">{err}</div>));
        } else if (error.response && error.response.data && error.response.data.msg) {
          setErrorMsg([<div key="backendError" className="error-message">{error.response.data.msg}</div>]);
        } else {
          setErrorMsg([<div key="connectionError" className="error-message">Failed to connect to API</div>]);
        }
      });
  }
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        {/* Left Box */}
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#103cbe' }}>
          <div className="featured-image mb-3">
            <img src='https://img.freepik.com/free-vector/authentication-concept-illustration_114360-2168.jpg?t=st=1718775788~exp=1718779388~hmac=bfe030eafb52fa25acdbf2468eec01e02b87537120f8beb3e5f3f1fcd473de07&w=740' className="img-fluid" style={{ width: '250px' }} alt="Featured" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>Be Verified</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </small>
        </div>
        {/* Right Box */}
        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-2">
              <h2>Hello,Again</h2>
              <p>we are happy to have you back in login</p>
            </div>
            <form onSubmit={handleSubmit}>

              {errorMsg && errorMsg.map((error, index) => (
                <div key={index}>{error}</div>
              ))}

              <div className="input-group mb-3">
                <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-group mb-2">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-group mb-2 d-flex justify-content-between">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="formCheck" />
                  <label htmlFor="formCheck" className="form-check-label text-secondary"><small>Remember Me</small></label>
                </div>
                <div className="forgot">
                  <small><a href="#">Forgot Password?</a></small>
                </div>
              </div>
              <div className="input-group mb-2">
                <button className="btn btn-lg btn-primary w-100 fs-6" type='submit'>Login</button>
              </div>
            </form>
            <div className="row">
              <small>Don't have an account? <Link to={'/register'}>Register</Link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
