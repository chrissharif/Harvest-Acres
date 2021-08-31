// Popup made with help from https://www.cluemediator.com/create-simple-popup-in-reactjs

import React, { useEffect, useState } from 'react';
import './MessageBoard.css'
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Post from '../Post/Post'
import { Link, useHistory } from 'react-router-dom'
import { getAllPosts, postPost, putPost, deletePost } from '../../services/posts'
import EditPost from '../EditPost/EditPost'
import swal from 'sweetalert';

function MessageBoard(props) {

  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ description: "" })
  const history = useHistory()

  const { currentUser } = props
  const { description } = formData

  let fourPosts = []
  let edgeNum = 4

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      if (postList.length < 4) {
        edgeNum = postList.length
      }
      for (let i = 0; i < edgeNum; i++) {
        fourPosts.push(postList[i])
      }
      setPosts(fourPosts)
    }
    fetchPosts()
  }, [])

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

  const handleDelete = async (id) => {
    await deletePost(id)
    setPosts((prevState) => prevState.filter((post) => post.id !== id))
    swal('Message Deleted!', "", "success")
  }

  const handleUpdate = async (id, formData) => {
    const postData = await putPost(id, formData)
    setPosts((prevState) =>
      prevState.map((post) => {
      return post.id === Number(id) ? postData : post
      }))
    history.push('/message-board')
  }

  return (
    <div className='message-board'>
      <header className='message-board-header'>
        <Link className='message-board-home-link' to='/farm'>
          <HomeIcon />
        </Link>
        <div className ='logged-in'>Logged in as: {currentUser?.username} </div>
        <div className='message-board-title'>Message Board</div>
        <AddBoxIcon className='new-post-link' onClick={togglePopup} />
        </header>
        <div className='message-board-wood-board'>
          <div className='message-container'>

          {isOpen && <Post content={<>
            <form className='message-form' onSubmit={(e) => {
              e.preventDefault()
              handleCreate(formData)
              console.log(formData)
              togglePopup()
            }}>
              <textarea
                className='message-form-input'
                placeholder='new message...'
                cols='30'
                rows='10'
                type='text'
                maxLength='100'
                name='description'
                autoComplete='off'
                value={description}
                onChange={handleChange}
              />
            <button className='message-board-button'>Create New Message</button>
            </form>
          </>} handleClose={togglePopup} />}
          <div className='posts'>
            {posts.map((post, index) => (
              <div className='post-container' key={index}>
                <div className='message-board-username'>{post.user.username} says:</div>
                <div>{post.description}</div>
                {currentUser?.id === post.user_id && (
                  <>
                    <button onClick={() => handleDelete(post.id)} className='edit-and-delete-buttons'>Delete</button>
                    <button className='edit-and-delete-buttons' onClick={togglePopup}>Edit</button>
                    {isOpen && <EditPost content={<>
                      <form className='message-form' onSubmit={(e) => {
                        e.preventDefault()
                        handleUpdate(post.id, formData)
                        console.log(formData)
                        togglePopup()
                      }}>
                      <textarea
                        className='message-form-input'
                        placeholder='edit message...'
                        cols='30'
                        rows='10'
                        type='text'
                        name='description'
                        maxLength='100'
                        autoComplete='off'
                        value={description}
                        onChange={handleChange}
                      />
                      <button className='message-board-button'>Edit Message</button>
                    </form>
                    </>} handleClose={togglePopup} />}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBoard
