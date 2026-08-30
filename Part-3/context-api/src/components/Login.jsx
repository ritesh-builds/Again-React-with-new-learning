import React from 'react'

import UserContext from '../context/UserContext'
import { useState, useContext } from 'react'


const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const {setUser} = useContext(UserContext)

  const handleSubmit = (evt) => {
		evt.preventDefault()
		setUser({email, password})
	}

  return (
    <div>
      <h2>Login</h2>

      <input 
			value={email} onChange={(evt) => {
				setEmail(evt.target.value)
			}} 
			type="email" 
			placeholder='email' />

      <input 
			value={password} 
			onChange={(evt) => {
				setPassword(evt.target.value)
			}} type="password" placeholder='*******' />
      
			<button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
