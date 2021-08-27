// Popup made with help from https://www.cluemediator.com/create-simple-popup-in-reactjs

import React, { useEffect, useState } from 'react';
import './MessageBoard.css'
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Post from '../Post/Post'
import { Link, useHistory, useParams } from 'react-router-dom'
import { getAllPosts, postPost, putPost, deletePost } from '../../services/posts'
import EditPost from '../EditPost/EditPost'

function MessageBoard(props) {

  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ description: "" })
  // const [editFormData, setEditFormData] = useState({ description: "" })
  const history = useHistory()
  const {id} = useParams()

  const { currentUser } = props
  const { description } = formData

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts()
      setPosts(postList)
    }
    fetchPosts()
  }, [])

  // useEffect(() => {
  //   const prefillFormData = () => {
  //     const postDesc = posts.find((post) => post.id === Number(id))
  //     setFormData({ description: postDesc.description })
  //   }
  //   if (posts.length) {
  //     prefillFormData()
  //   }
  // }, [posts, id])

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
  }

  // const handleUpdate = async (id, formData) => {
  //   const postData = await putPost(id, formData)
  //   setPosts((prevState) =>
  //     prevState.map((post) => {
  //     return post.id === Number(id) ? postData : post
  //     }))
  //   history.push('/message-board')
  // }

  return (
    <div>
      <header className='message-board-header'>
        <Link to='/farm'>
          <HomeIcon />
        </Link>
        <div className='message-board-title'>Message Board</div>
          <AddBoxIcon onClick={togglePopup} />
        {isOpen && <Post content={<>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleCreate(formData)
            console.log(formData)
            togglePopup()
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
            <div>{post.user_id}</div>
            <div>{post.description}</div>
            {currentUser?.id === post.user_id && (
              <>
                <button>Edit</button>
                {/* {isOpen && <EditPost content={<>
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    handleUpdate(formData)
                    // console.log(editFormData)
                    togglePopup()
                  }}>
                    <input
                      placeholder='edit message...'
                      type='text'
                      name='description'
                      value={description}
                      onChange={(e) => {
                        const { name, value } = e.target
                        setFormData((prevState) => ({
                          ...prevState,
                          [name]: value,
                        }))
                      }}
                    />
                    <button>Create New Message</button>
                  </form>
                </>} handleClose={togglePopup} />} */}
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MessageBoard
