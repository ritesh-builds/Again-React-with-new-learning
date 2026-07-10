import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

function Button() {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        if(theme === 'light'){
            setTheme('dark')
        } else{
            setTheme('light')
        }        
    }

  return (
    <div>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Button
