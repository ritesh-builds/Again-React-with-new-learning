import React from 'react'
import styles from "./Header.module.css"

function Header() {
  return (
    <div className={styles.header}>
      <h1>Hi, I'm Header.</h1>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header
