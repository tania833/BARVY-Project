import React from 'react';
import { Link } from 'react-router-dom';
import DrawerToggleButton from './DrawerToggleButton';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.scss';

const Toolbar = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav_main}>
        <div className={styles.toggle_button}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <Link className={styles.header_logo} to="/">
          Барви
        </Link>
        <div className={styles.navigation_items}>
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
        </div>
      </nav>
      <div className={styles.header_icons}>
        <div className={styles.header_icons_items}>
          <a href="/">
            <img
              className={styles.header_icon_left}
              src="../icons/search.svg"
              alt="like_icon"
            />
          </a>
          <a href="/">
            <img
              className={styles.header_icon_left}
              src="../icons/heart.svg"
              alt="like_icon"
            />
          </a>
        </div>
        <a href="/">
          <img
            className={styles.header_cart}
            src="../icons/empty_cart.svg"
            alt="like_icon"
          />
        </a>
        <div className={styles.header_localization}>
          <a href="/">
            <p className={styles.header_icon_right}>Укр</p>
          </a>
          <a href="/">
            <p className={styles.header_icon_right}>Eng</p>
          </a>
        </div>
      </div>
    </header>
  );
};

Toolbar.propTypes = {
  drawerClickHandler: PropTypes.object,
};

export default Toolbar;
