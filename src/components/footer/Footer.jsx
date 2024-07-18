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
            <p>서울특별시 서초구 서초대로 396, 3층</p>
            <p>대표전화: 02-0000-0000</p>
            <p>이메일:abc1234@abcd.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default footer