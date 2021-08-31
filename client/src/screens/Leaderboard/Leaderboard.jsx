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
      <div className='leaderboard-container'>
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
      <Footer />
    </div>
  )
}
