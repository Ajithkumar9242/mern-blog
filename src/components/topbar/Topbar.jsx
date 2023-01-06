import React from 'react'
import "./Topbar.css"

function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft"></div>
        <div className="topCenter">
          <ul className="topList">
             <li className="topListItem">HOME</li>
             <li className="topListItem">ABOUT</li>
             <li className="topListItem">CONTTACT</li>
             <li className="topListItem">POST</li>
             <li className="topListItem">LOGOUT</li>
          </ul>
        </div>
        <div className="topRight">
          <img src="https://images.unsplash.com/photo-1672173038243-757b40f749df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Nature Img" className='topImg'/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Topbar