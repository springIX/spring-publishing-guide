import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const NavItem = ({ link, text, subLinks }) => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      className={styles.nav_item} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.nav_link}>
        <Link to={link}>{text}</Link>
      </div>
      {subLinks && (
        <ul className={`${styles.nav_sub_list} ${isHovered ? styles.show : ''}`}>
          {subLinks.map((subLink, index) => (
            <li key={index} className={styles.nav_sub_item}>
              <div className={styles.nav_sub_link}>
                <Link to={subLink.link}>{subLink.text}</Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <NavItem 
          link="/basic/guide" 
          text="프로젝트 준비하기" 
          subLinks={[
            { link: '/basic/guide', text: '개발 환경 기본 가이드' }
          ]}
        />
        <NavItem 
          link="/convention/rule-standard" 
          text="프로젝트 규칙가이드" 
          subLinks={[
            { link: '/convention/rule-standard', text: '표준규칙 가이드' },
            { link: '/convention/rule-code', text: '퍼블리싱 코드규칙' },
            { link: '/convention/rule-name', text: '퍼블리싱 네임규칙' }
          ]}
        />
        <NavItem 
          link="/accessibility/overview" 
          text="웹접근성" 
          subLinks={[
            { link: '/accessibility/overview', text: '웹접근성 개요' },
            { link: '/accessibility/wai-aria', text: 'WAI-ARIA' },
            { link: '/accessibility/checklist', text: '접근성 교육' }
          ]}
        />
        <NavItem 
          link="/library" 
          text="라이브러리"
        />
      </ul>
    </nav>
  );
};

export default Nav;
