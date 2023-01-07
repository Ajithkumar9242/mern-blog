import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
        <label>Username</label>
            <input type="text" className='registerInput' placeholder='Enter Your Username' />
            <label>Email</label>
            <input type="email" className='registerInput' placeholder='Enter Your Email' />
            <label>Password</label>
            <input type="password" className='registerInput' />
            <button type="submit" className='registerButton'>Register</button>
        </form>
        <button type="submit" className='registerLoginButton'>
        <Link to="/login">LOGIN</Link>
          
        </button>
    </div>
  )
}

export default Register