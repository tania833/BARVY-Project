import React from 'react'
import styles from '../components/css_modules/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer__logo_block}>
        <a href="/"><p className={styles.footer__logo}>Барви</p></a>
        <p className={styles.footer__subtitle}>Сайт про митців</p>
        <p className={styles.footer__year}>2020</p>
      </div>
      <nav className={styles.footer__menu}>
        <div className={styles.footer__menu_column}>
          <a href="/about">
            <p className={styles.footer__menu_item}>Про нас</p>
          </a>
          <a href="/about">
            <p className={styles.footer__menu_item}>Як це працює</p>
          </a>
          <a href="/about">
            <p className={styles.footer__menu_item}>Зв'язатися з нами</p>
          </a>
          <a href="/about">
            <p className={styles.footer__menu_item}>Контакти</p>
          </a>
        </div>
        <div className={styles.footer__menu_column}>
          <a href="/about">
            <p className={styles.footer__menu_item}>Співпраця</p>
          </a>
          <a href="/about">
            <p className={styles.footer__menu_item}>Умови використання</p>
          </a>
          <a href="/about">
            <p className={styles.footer__menu_item}>Конфіденційність</p>
          </a>
          <a href="/about">
            <p className={styles.footer__menu_item}>Партнерство</p>
          </a>
        </div>
      </nav>
      <div className={styles.footer__socials}>
      <a href="#">
        <img className={styles.footer__socials_item} src="../icons/messenger.svg" alt="messenger"/>
      </a>
      <a href="#">
        <img className={styles.footer__socials_item} src="../icons/telegram.svg" alt="messenger"/>
      </a>
      <a href="#">
        <img className={styles.footer__socials_item} src="../icons/facebook.svg" alt="messenger"/>
      </a>
      <a href="#">
        <img className={styles.footer__socials_item} src="../icons/instagram.svg" alt="messenger"/>
      </a>
      <a href="#">
        <img className={styles.footer__socials_item} src="../icons/pinterest.svg" alt="messenger"/>
      </a>
      <a href="#">
        <img className={styles.footer__socials_item} src="../icons/twitter.svg" alt="messenger"/>
      </a>
      </div>
    </footer>
  )
}

export default Footer