import React, { useState } from "react"
import { Link } from 'react-router-dom'

function SignIn(props) {

  const [formData, setFormData] = useState({ username: "", password: "" })
  
  const { username, password } = props
  const { handleLogin } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className='sign-in-container'>
      <header className='header'>Harvest Acres</header>
      <h1 className='h1'>Sign In</h1>

      <form onSubmit={(e) => {
        e.preventDefault()
        handleLogin(formData)
      }}>

        <label>Username:</label>
        <input
          name='username'
          type='text'
          value={username}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
        />

        <button>Sign In</button>
        <div>Don't have an account?</div>
        <Link to='/sign-up'>Sign Up</Link>
      </form>
    </div>
  )
}

export default SignIn