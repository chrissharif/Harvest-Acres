import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './SignIn.css'

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
    <div className='sign-in'>
      <header className='header'>Harvest Acres</header>
      <div className='wood-board'>

        <h1 className='h1'>Sign In</h1>
    <div className='sign-in-container'>

        <form onSubmit={(e) => {
          e.preventDefault()
          handleLogin(formData)
        }}>
          <div className='input'>
            <label className='label'>Username:</label>
            <input
              className='form-input'
              name='username'
              type='text'
              value={username}
              onChange={handleChange}
            />   
          </div>

          <div className='input password-input'>
            <label className='label'>Password:</label>
            <input
              className='form-input'
              name='password'
              type='password'
              value={password}
              onChange={handleChange}
            />  
          </div>

          <button className='form-button'>Sign In</button>
          <div className='form-link-div'>Don't have an account?
            <Link to='/sign-up' className='form-link'>Sign Up</Link>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default SignIn