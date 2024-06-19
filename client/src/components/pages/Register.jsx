import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import API_BASE_URL from '../../baseUrl.js'

const Register = () => {

  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState('')

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const validatePassword = (password) => {
    const minLength = 6
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    return password.length >= minLength && hasUpperCase && hasNumber && hasSpecialChar
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Client-side validation

    let errors = []

    if (!name) {
      errors.push("Name is required")
    }
    if (!company) {
      errors.push("Company name is required")
    }
    if (!email) {
      errors.push("Email is required")
    } else if (!validateEmail(email)) {
      errors.push("Invalid email format")
    }
    if (!password) {
      errors.push("Password is required")
    } else if (!validatePassword(password)) {
      errors.push("Password must be at least 6 characters long and include an uppercase letter, a number, and a special character")
    }

    if (errors.length > 0) {
      setErrorMsg(errors.map((err, index) => <div key={index} className="error-message">{err}</div>))
      return
    }

    axios.post(`${API_BASE_URL}auth/register`, {
      name, company, email, password
    })
      .then((res) => {
        console.log(res)
        setErrorMsg('')
        navigate('/login')
      }).then((res) => {
        setErrorMsg('');
        navigate('/login');
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
          <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>Welcome Aboard!</p>
          <small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: "'Courier New', Courier, monospace" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </small>
        </div>

        {/* Right Box */}

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text">
              <h2>Create your account</h2>
              <p>start your journey with us!</p>
            </div>

            <form onSubmit={handleSubmit}>

              {errorMsg && errorMsg.map((error, index) => (
                <div key={index}>{error}</div>
              ))}

              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Company name" value={company} onChange={(e) => setCompany(e.target.value)} />
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="input-group mb-3">
                <button className="btn btn-lg btn-primary w-100 fs-6" type='submit'>Register</button>
              </div>

            </form>

            <div className="row">
              <small>Don't have an account? <Link to={'/login'}>Login</Link></small>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Register
