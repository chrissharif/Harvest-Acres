import React, {useEffect, useState} from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Post from '../Post/Post'
import { Link } from 'react-router-dom'
import { getAllPosts, postPost, putPost, deletePost } from '../../services/posts'

function MessageBoard(props) {

  const [posts, setPosts] = useState([])
  const [isOpen, setIsOpen] = useState(false)

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
      </header>
    </div>
  )
}

export default MessageBoard
