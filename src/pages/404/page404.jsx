import React from 'react';
import styles from './page404.module.scss';

const page404 = () => {
  return (
    <div className={styles.page404}>
      <div className={styles.page404Container}>
        <div className={styles.page404__logo}>
          <div className={styles.page404__logo_brandname}>Барви</div>
          <div className={styles.page404__logo_description}>
            сайт про українських митців
          </div>
        </div>
        <h1 className={styles.page404__header}>Ой-йой!</h1>
        <p className={styles.page404__text}>Сторінка не знайдена</p>
        <a className={styles.page404__link} href="/">
          повернутися на Головну
        </a>
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
