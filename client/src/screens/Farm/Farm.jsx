import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import BarChartIcon from '@material-ui/icons/BarChart';
import "./Farm.css"

function Farm(props) {

  // const [crops, setCrops] = useState(0)

  const { currentUser } = props
  const { handleLogout } = props

  return (
    <div>
      <div className='farm-container'>
      <nav className='farm-nav'>
        <div className='farm-username'>{currentUser.username}'s Farm</div>
        {/* <div className='crop-counter'>{crops}</div> */}
        <Link to='/message-board' className='message-link'>
          <ChatIcon />
        </Link>
        <Link to='/leaderboard' className='leaderboard-link'>
          <BarChartIcon />
        </Link>
        <form onSubmit={handleLogout}>
          <button className='farm-logout'>Logout</button>
        </form>
      </nav>
        <div className='crop-container'>

        </div>
      </div>
    </div>
  )
}

export default Farm