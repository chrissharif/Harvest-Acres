import './App.css';
import { useState, useEffect } from 'react';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth'
import { Route } from 'react-router-dom'

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
  }

  return (
    <div>

      <header className='header'>Harvest Acres</header>

      <Route path='/farm'>
        <Farm currentUser={currentUser} handleLogout={handleLogout} />
      </Route>

      <Route>
        <SignIn handleLogin={handleLogin} />
      </Route>

      <Route>
        <SignUp handleRegister={handleRegister} />
      </Route>

      <Route>
        <MessageBoard currentUser={currentUser} />
      </Route>
    </div>
  );
}

export default App;
