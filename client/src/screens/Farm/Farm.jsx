import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import "./Farm.css"
import { BottomNavigationAction } from '@material-ui/core';

function Farm(props) {

  // const [crops, setCrops] = useState(0)

  const { currentUser } = props
  const { handleLogout } = props

  return (
    <div>
      <nav className='farm-nav'>
        <div className='farm-header-username'>{currentUser.username}'s Farm</div>
        {/* <div className='crop-counter'>{crops}</div> */}
        <Link to='/message-board'>
          <ChatIcon />
        </Link>
        <form onSubmit={handleLogout}>
          <button>Logout</button>
        </form>
      </nav>
      <div className='farm-container'>
        <div className='crop-container'>

        </div>
      </div>
    </div>
  )
}

export default Farm