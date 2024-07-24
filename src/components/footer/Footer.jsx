import React from 'react'
import styles from './Footer.module.scss'

const footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_logo}>
            <img src='https://www.outspring.co.kr/wp-content/uploads/2022/10/logo_light-1.png' alt='logo' />
          </div>
          <div className={styles.footer_info}>
            <p>2024.07.24</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer