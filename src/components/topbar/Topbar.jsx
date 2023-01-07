import React from 'react'
import { Link } from 'react-router-dom'
import "./Topbar.css"

function Topbar() {
  const user = true
  return (
    <div className='top'>
        <div className="topLeft"></div>
        <div className="topCenter">
          <ul className="topList">
             <li className="topListItem">
              <Link to="/">HOME</Link>
             </li>
             <li className="topListItem">
             <Link to="/">ABOUT</Link></li>
             <li className="topListItem">
             <Link to="/">CONTTACT</Link></li>
             <li className="topListItem">
             <Link to="/write">POST</Link></li>
             <li className="topListItem">
             { user && "LOGOUT" }
             </li>
          </ul>
        </div>
        <div className="topRight">
        {
          user ? (
            <img src="https://images.unsplash.com/photo-1672173038243-757b40f749df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Nature Img" className='topImg'/>

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


          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar