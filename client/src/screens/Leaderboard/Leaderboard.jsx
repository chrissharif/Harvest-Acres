import React from 'react'
import './Leaderboard.css'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Leaderboard() {
  return (
    <div className='leaderboard'>
      <Link to='/farm' className='leaderboard-home-link'>
        <HomeIcon />
      </Link>
      <div className='leaderboard-container'>Coming Soon!</div>
      <Footer />
    </div>
  )
}
