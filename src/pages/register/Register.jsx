import axios from 'axios'
import { React, useState} from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("/api/auth/register" , {
        username,
        email,
        password
      })
      res.data && window.location.replace("/login")
    } catch (err) {
      setError(true)
    }

  }
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
            <input
             type="text"
              className='registerInput' 
              placeholder='Enter Your Username'
              onChange={e => setUsername(e.target.value)} />
            <label>Email</label>
            <input type="email"
             className='registerInput'
              placeholder='Enter Your Email'
              onChange={e => setEmail(e.target.value)}  />
            <label>Password</label>
            <input type="password"
             className='registerInput'
             onChange={e => setPassword(e.target.value)}  />
            <button type="submit" className='registerButton'>Register</button>
        </form>
        <button type="submit" className='registerLoginButton'>
        <Link to="/login">LOGIN</Link>
        </button>
{ error &&
        <h5 style={{ color:"red", marginTop: "5em"}}>User Already Exists</h5>
}
    </div>
  )
}

export default Register