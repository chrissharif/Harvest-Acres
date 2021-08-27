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
  const [formData, setFormData] = useState({ description: "" })
  const history = useHistory()

  const { currentUser } = props
  const { description } = formData

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const postList = await getAllPosts()
  //     setPosts(postList)
  //   }
  //   fetchPosts()
  // }, [])

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  const handleCreate = async (formData) => {
    const postData = await postPost(formData)
    setPosts((prevState) => [...prevState, postData])
    history.push('/message-board')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div>
      <header className='message-board-header'>
        <Link to='/farm'>
          <HomeIcon />
        </Link>
        <div className='message-board-title'>Message Board</div>
          <AddBoxIcon onClick={togglePopup} />
        {isOpen && <Post content={<>
          <form onSubmit={togglePopup, (e) => {
            e.preventDefault()
            handleCreate(formData)
            console.log(formData)
          }}>
            <input
              placeholder='new message...'
              type='text'
              name='description'
              value={description}
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
