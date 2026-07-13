import React from 'react'

function AuthContext(props) {
    // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },[] )
  return (
    <div>
      {props.children}
    </div>
  )
}

export default AuthContext
