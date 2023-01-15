import { React, useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import "./Topbar.css"

function Topbar() {
const { user, dispatch } = useContext(Context)
const handleLogout = () =>{
  dispatch({type:"LOGOUT"})
}
  return (
    <div className='top'>
        <div className="topLeft"></div>
        <div className="topCenter">
          <ul className="topList">
             <li className="topListItem">
              <Link to="/">HOME</Link>
             </li>
             <li className="topListItem">
             <Link to="/contact">CONTACT</Link></li>
             <li className="topListItem">
             <Link to="/write">POST</Link></li>
             <li className="topListItem" onClick={handleLogout}>
             { user && "LOGOUT" }</li>
             
          </ul>
        </div>
        <div className="topRight">
        
        {
          user ? (
            <span className='topImg'>{user.username}</span>

          ) : (
            <ul className='topList'>
              <li className='topListItem'>
              <Link to="/login">LOGIN</Link>
              </li>

              <li className='topListItem'>
            <Link to="/register">REGISTER</Link>
            </li>
            </ul>
          )
        }


          <i className="fas-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar