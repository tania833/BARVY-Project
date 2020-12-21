import React from 'react';
import styles from './page404.module.scss';
import { Link } from 'react-router-dom';

const page404 = () => {
  return (
    <div className={styles.page404}>
      <div className={styles.page404Container}>
        <div className={styles.page404__logo}></div>
        <h1 className={styles.page404__header}>Ой-йой!</h1>
        <p className={styles.page404__text}>Сторінка не знайдена</p>
        <Link className={styles.page404__link} to="/">
          повернутися на Головну
        </Link>
        <picture className={styles.page404__picture}>
          <img
            className={styles.page404__picture_img}
            src="https://imgur.com/w75task.jpg"
            alt="error page picture"
          />
        </picture>
      </div>
    </div>
  );
};

export default page404;
