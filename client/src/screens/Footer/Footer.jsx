import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-name'>Christopher Sharif &copy; 2021</div>
        <a href='https://github.com/chrissharif' target='_blank' rel='noreferrer'>
          <GitHubIcon />
        </a>
        <a href='https://www.linkedin.com/in/christopher-sharif-754598211/' target='_blank' className='linked-in' rel='noreferrer'>
          <LinkedInIcon />
        </a>
      </div>
    </div>
  )
}
