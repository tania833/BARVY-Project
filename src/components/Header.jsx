import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css_modules/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.header_logo} to="/">
        Барви
      </Link>
      <nav className={styles.nav_main}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <Link to="/artists">Митці</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to="/techniques">Техніки</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to="/events">Події</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to="/about">Про нас</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.header_icons}>
        <a href="/">
          <img
            className={styles.header_icon}
            src="../icons/search.svg"
            alt="like_icon"
          />
        </a>
        <a href="/">
          <img
            className={styles.header_icon}
            src="../icons/heart.svg"
            alt="like_icon"
          />
        </a>
      </div>
      <a href="/">
        <img
          className={(styles.header_icon, styles.header_cart)}
          src="../icons/empty_cart.svg"
          alt="like_icon"
        />
      </a>
      <div className={styles.header_localization}>
        <a href="/">
          <p>Укр</p>
        </a>
        <a href="/">
          <p>Eng</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
