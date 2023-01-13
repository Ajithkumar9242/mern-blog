import axios from 'axios'
import { useContext } from 'react'
import { React , useRef} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './Login.css'

function Login() {

  const userRef = useRef()
  const passwordRef = useRef()

  const { dispatch, isFetching} = useContext(Context)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    dispatch({type: "LOGIN_START"})
    try {
      const res = await axios.post("/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value

      })
    dispatch({type: "LOGIN_SUCESS" , payload: res.data})
    } catch (error) {
      dispatch({type: "LOGIN_FAILURE"})
    }
  }
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input
            type="text" 
            className='loginInput' 
            placeholder='Enter Your Username'
            ref={userRef} 
            />
            <label>Password</label>
            <input 
            type="password"
            className='loginInput' 
            ref={passwordRef} 
            />
            <button type="submit" className='loginButton' disabled={isFetching}>Login</button>
        </form>
        <button type="submit" className='loginRegisterButton'><Link to="/register">REGISTER</Link>
</button>
    </div>
  )
}

export default Login