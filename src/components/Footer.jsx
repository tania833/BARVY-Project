import React from "react";
import { Link } from "react-router-dom";
import styles from "./css_modules/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer__logo_block}>
        <a href="/">
          <p className={styles.footer__logo}>Барви</p>
        </a>
        <p className={styles.footer__subtitle}>Сайт про митців</p>
        <p className={styles.footer__year}>2020</p>
      </div>
      <nav className={styles.footer__menu}>
        <ul className={styles.footer__menu_column}>
          <li className={styles.footer__menu_item} href="/about">
            <Link to="/about">Про нас</Link>
          </li>
          <li className={styles.footer__menu_item} href="/about">
            <Link to="/about">Як це працює</Link>
          </li>
          <li className={styles.footer__menu_item} href="/about">
            <Link to="/about">Зв'язатися з нами</Link>
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
        <a href="/about">
          <img
            className={styles.footer__socials_item}
            src="../icons/messenger.svg"
            alt="messenger"
          />
        </a>
        <a href="/about">
          <img
            className={styles.footer__socials_item}
            src="../icons/telegram.svg"
            alt="messenger"
          />
        </a>
        <a href="/about">
          <img
            className={styles.footer__socials_item}
            src="../icons/facebook.svg"
            alt="messenger"
          />
        </a>
        <a href="/about">
          <img
            className={styles.footer__socials_item}
            src="../icons/instagram.svg"
            alt="messenger"
          />
        </a>
        <a href="/about">
          <img
            className={styles.footer__socials_item}
            src="../icons/pinterest.svg"
            alt="messenger"
          />
        </a>
        <a href="/about">
          <img
            className={styles.footer__socials_item}
            src="../icons/twitter.svg"
            alt="messenger"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
