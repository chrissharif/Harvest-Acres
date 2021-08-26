// Popup made with help from https://www.cluemediator.com/create-simple-popup-in-reactjs

import React from 'react'

function Post(props) {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  )
}

export default Post
