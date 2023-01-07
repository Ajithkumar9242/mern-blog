import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label>Email</label>
            <input type="email" className='loginInput' placeholder='Enter Ypur Email' />
            <label>Password</label>
            <input type="password" className='loginInput' placeholder='Enter Ypur Email' />
            <button type="submit" className='loginButton'>Login</button>
        </form>
        <button type="submit" className='loginRegisterButton'><Link to="/register">REGISTER</Link>
</button>
    </div>
  )
}

export default Login