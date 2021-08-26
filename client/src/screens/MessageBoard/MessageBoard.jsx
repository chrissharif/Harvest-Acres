// Popup made with help from https://www.cluemediator.com/create-simple-popup-in-reactjs

import React, { useEffect, useState } from 'react';
import './MessageBoard.css'
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Post from '../Post/Post'
import { Link, useHistory } from 'react-router-dom'
import { getAllPosts, postPost, putPost, deletePost } from '../../services/posts'

function MessageBoard(props) {

  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState({ description: "" })
  const history = useHistory()

  const { currentUser } = props

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push('/message-board')
  }

  return (
    <div>
      <header className='message-board-header'>
        <Link to='/farm'>
          <HomeIcon />
        </Link>
        <div className='message-board-title'>Message Board</div>
          {/* <button onClick={togglePopup}> */}
          <AddBoxIcon onClick={togglePopup} />
        {/* </button> */}
        {isOpen && <Post content={<>
          <form onSubmit={handleSubmit, togglePopup}>
            <input
              placeholder='new message...'
              id='description'
              value={input.description}
              onChange={handleChange}
            />
            <button>Create New Message</button>
          </form>
        </>} handleClose={togglePopup} />}
        <div>Logged in as: {currentUser.username} </div>
      </header>
      <div className='posts'>
        {posts.map((post, index) => (
          <div className='post-container' key={index}>
            <div>{post.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessageBoard
