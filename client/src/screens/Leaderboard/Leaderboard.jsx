import React from 'react'
import './Leaderboard.css'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'

export default function Leaderboard() {
  return (
    <div className='leaderboard'>
      <Link to='/farm' className='leaderboard-home-link'>
        <HomeIcon />
      </Link>
      Coming Soon!
    </div>
  )
}
