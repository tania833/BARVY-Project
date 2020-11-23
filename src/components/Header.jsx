import React from "react";
import styles from "./css_modules/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.header_logo}>
        Барви
      </a>
      <nav className={styles.nav_main}>
        <ul className={styles.menu_list}>
          <li className={styles.menu_item}>
            <a href="/artists">Митці</a>
          </li>
          <li className={styles.menu_item}>
            <a href="/techniques">Техніки</a>
          </li>
          <li className={styles.menu_item}>
            <a href="/events">Події</a>
          </li>
          <li className={styles.menu_item}>
            <a href="/about">Про нас</a>
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
