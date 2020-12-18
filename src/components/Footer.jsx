import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css_modules/Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer__wrapper}>
        <div className={styles.footer__line}></div>
        <div className={styles.footer__position}>
          <div className={styles.footer__logo_block}>
            <Link to="/" className={styles.footer__logo}>
              Барви
            </Link>
            <p className={styles.footer__subtitle}>Сайт про митців</p>
            <p className={styles.footer__year}>2020</p>
          </div>
          <nav className={styles.footer__menu}>
            <ul className={styles.footer__menu_column_left}>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Про нас</Link>
              </li>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Як це працює</Link>
              </li>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Зв&apos;язатися з нами</Link>
              </li>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Контакти</Link>
              </li>
            </ul>
            <ul className={styles.footer__menu_column}>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Співпраця</Link>
              </li>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Умови використання</Link>
              </li>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Конфіденційність</Link>
              </li>
              <li className={styles.footer__menu_item} href="/about">
                <Link to="/about">Партнерство</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.footer__socials}>
            <a href="/about" className={styles.footer__socials_item_messenger}>
              <img
                className={styles.footer__socials_item}
                src="../icons/messenger.svg"
                alt="messenger"
              />
            </a>
            <a href="/about" className={styles.footer__socials_item_telegram}>
              <img
                className={styles.footer__socials_item}
                src="../icons/telegram.svg"
                alt="telegram"
              />
            </a>
            <a href="/about" className={styles.footer__socials_item_facebook}>
              <img
                className={styles.footer__socials_item}
                src="../icons/facebook.svg"
                alt="facebook"
              />
            </a>
            <a href="/about" className={styles.footer__socials_item_instagram}>
              <img
                className={styles.footer__socials_item}
                src="../icons/instagram.svg"
                alt="instagram"
              />
            </a>
            <a href="/about" className={styles.footer__socials_item_pinterest}>
              <img
                className={styles.footer__socials_item}
                src="../icons/pinterest.svg"
                alt="pinterest"
              />
            </a>
            <a href="/about" className={styles.footer__socials_item_twitter}>
              <img
                className={styles.footer__socials_item}
                src="../icons/twitter.svg"
                alt="twitter"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
