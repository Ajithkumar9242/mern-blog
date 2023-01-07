import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src="https://images.unsplash.com/photo-1672054280269-e8809178fd94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Forest Pic"  />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse itaque rem, modi asperiores adipisci animi! Commodi, quas quibusdam esse veniam eum, corrupti simili.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">MUSIC</li>
          <li className="sidebarListItem">MUSIC</li>
        </ul>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
        <i className="fa-brands fa-github"></i> 
        </div>
        </div>
    </div>
  )
}

export default Sidebar