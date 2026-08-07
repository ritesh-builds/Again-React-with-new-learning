import React, { useState } from 'react'
import { Mail, Lock } from 'lucide-react'


function Login({handleLogin}) {
  // console.log(handleLogin);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {      
    e.preventDefault()
    handleLogin(email, password)
    console.log("form submitted..");
    // console.log(`email is ${email}`);
    // console.log(`password is ${password}`);
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-600 rounded-xl'>
      <h1 className='p-5 text-2xl'>Login</h1>
        <form 
        className='flex flex-col'
        onSubmit={(evt) => {
          submitHandler(evt)
        }}
        >

            <div className="flex flex-col my-5 mx-3">

              <div className="relative m-2">
                <Mail
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500"
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="w-full border-2 border-red-500 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div className="relative m-2">
                <Lock
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-red-500"
                />

                <input
                  required
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(evt) => setPassword(evt.target.value)}
                  className="w-full border-2 border-red-500 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

            </div>
            
            <div className='flex gap-20 p-3'>

              <div className='flex flex-center gap-2'>
                <input type="checkbox"/>
                <p>Remember me</p>
              </div>
              
              <p className='text-red-600'>forget Passowrd?</p>

            </div>
            
            <button className='bg-red-600 text-center text-xl rounded py-2 my-8 mx-6'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
