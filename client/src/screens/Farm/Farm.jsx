import React from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import BarChartIcon from '@material-ui/icons/BarChart';
import "./Farm.css"

function Farm(props) {

  const { currentUser } = props
  const { handleLogout } = props

  return (
    <div>
      <div className='farm-container'>
      <nav className='farm-nav'>
        <div className='farm-username'>{currentUser?.username}'s Farm</div>
        <div className='crop-counter'>
          <div>Crops:</div>
          <div>0</div>
        </div>
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
          <div className='coming-soon'>
            <div className='c'>C</div>
            <div className='first-o'>o</div>
            <div className='m'>m</div>
            <div className='i'>i</div>
            <div className='first-n'>n</div>
            <div className='g'>g</div>
            <div className='s'>S</div>
            <div className='second-o'>o</div>
            <div className='third-o'>o</div>
            <div className='second-n'>n</div>
            <div className='exclamation'>!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Farm