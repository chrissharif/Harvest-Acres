import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-name'>Christopher Sharif &copy; 2021</div>
      <a href='https://github.com/chrissharif'>
        <GitHubIcon />
      </a>
    </div>
  )
}
