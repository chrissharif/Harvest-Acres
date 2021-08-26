import React, { useState } from "react"

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
    <div className='sign-up-container'>
      <header className='header'>Harvest Acres</header>
      <h1 className='h1'>Sign Up</h1>

      <form onSubmit={(e) => {
        e.preventDefault()
        handleRegister(formData)
      }}>

        <label>Username:</label>
        <input
          name='username'
          type='text'
          value={username}
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          name='email'
          type='text'
          value={email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
        />

        <button>Sign Up</button>
        <div>Have an account already?</div>
        <Link to='/sign-in'>Sign In</Link>
      </form>
    </div>
  )
}

export default SignUp