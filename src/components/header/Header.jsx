import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React and Node</span>
            <span className="headerTitleLm">Blog</span>
        </div>

    <img src="https://images.unsplash.com/photo-1672067965734-3808de90c930?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="Nature Pic" srcset="" className='headerImg' />

    </div>
  )
}

export default Header