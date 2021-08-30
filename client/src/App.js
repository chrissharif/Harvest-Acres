import './App.css';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import { Route, Link, useHistory } from 'react-router-dom'
import SignIn from './screens/SignIn/SignIn'
import SignUp from './screens/SignUp/SignUp'
import Farm from './screens/Farm/Farm'
import MessageBoard from './screens/MessageBoard/MessageBoard'
import Post from './screens/Post/Post'
import EditPost from './screens/EditPost/EditPost'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const currentUser = await verifyUser()
      setCurrentUser(currentUser)
    }
    handleVerify()
  }, [])

  const handleLogin = async (formData) => {
    const currentUser = await loginUser(formData)
    setCurrentUser(currentUser)
    history.push('/farm')
  }

  const handleRegister = async (formData) => {
    const currentUser = await registerUser(formData)
    setCurrentUser(currentUser)
    history.push('/farm')
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    removeToken()
    setCurrentUser(null)
    history.push('/')
  }

  return (
    <div>

      <Route exact path='/'>
        <div className='landing-screen'>
          <header className='header'>Harvest Acres</header>
          <Link to='/sign-in'>
            <button className='start-button'>click here to play</button>
          </Link>
        </div>
      </Route>

      <Route path='/farm'>
        <Farm currentUser={currentUser} handleLogout={handleLogout} />
      </Route>

      <Route path='/sign-in'>
        <SignIn handleLogin={handleLogin} />
      </Route>

      <Route path='/sign-up'>
        <SignUp handleRegister={handleRegister} />
      </Route>

      <Route path='/message-board'>
        <MessageBoard currentUser={currentUser} />
      </Route>

      <Route path='/post'>
        <Post />
      </Route>

      <Route exact path='/post/:id/edit'>
        <EditPost />
      </Route>
        
    </div>
  );
}

export default App;
