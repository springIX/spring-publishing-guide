import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import Nav from './nav/Nav'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className='container'>
        <div className={styles.header_wrapper}>
          <div className={styles.header_logo}>
            <Link to='/'>
                <img src='https://www.outspring.co.kr/wp-content/uploads/2022/10/logo-1.png' alt='logo' />
            </Link>
          </div>
          <Nav />
        </div>
      </nav>
    </header>
  )
}

export default Header