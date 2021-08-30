import React, { useState } from "react"
import { Link } from 'react-router-dom'
import './SignUp.css'
import Footer from '../Footer/Footer'

function SignUp(props) {

  const [formData, setFormData] = useState({ username: "", email: "", password: "" })
  
  const { username, email, password } = props
  const { handleRegister } = props

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
      <div className='sign-up'>
        <header className='header'>Harvest Acres</header>
      
        <div className='wood-board'>
          <h1 className='h1'>Sign Up</h1>
          <div className='sign-up-container'>

            <form onSubmit={(e) => {
              e.preventDefault()
              handleRegister(formData)
              console.log(formData)
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

            <div className='input sign-up-email'>
              <label className='label'>Email:</label>
              <input
                className='form-input'
                name='email'
                type='text'
                value={email}
                onChange={handleChange}
              />     
            </div>

            <div className='input sign-up-password'>
              <label className='label'>Password:</label>
              <input
                className='form-input'
                name='password'
                type='password'
                value={password}
                onChange={handleChange}
              />     
            </div>

            <button className='sign-up-button'>Sign Up</button>
            <div className='sign-up-link-div'>Have an account already?
              <Link to='/sign-in' className='form-link'>Sign In</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp