import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';

function Farm(props) {

  const [crops, setCrops] = useState(0)

  const { currentUser } = props
  const { handleLogout } = props

  return (
    <div>
      <header className='farm-header'>
        <div className='farm-header-username'>{currentUser.username}'s Farm</div>
        {/* <div className='crop-counter'>{crops}</div> */}
        <Link to='/message-board'>
          <ChatIcon />
        </Link>
        <form onSubmit={handleLogout}>
          <button>Logout</button>
        </form>
      </header>
    </div>
  )
}

export default Farm