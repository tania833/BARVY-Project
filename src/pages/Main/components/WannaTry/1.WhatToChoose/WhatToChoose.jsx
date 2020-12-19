import React from 'react';
import styles from './WhatToChoose.module.scss';

const WhatToChoose = () => {
  return (
    <div className={styles.chooseContainer}>
      <div className={styles.chooseTextBlock}>
        <h4 className={styles.choose__title}>що мені обрати?</h4>
        <p className={styles.choose__paragraph}>
          А якщо я хочу спробувати і не знаю, що саме мені сподобається? 
        </p>
        <p className={styles.choose__paragraph}>Не
          дізнаєшся, поки не спробуєш, тому ми маємо різноманітні техніки, уроки
          та вчителів, щоб легше було знайти те, що до вподоби. Творити може
          кожен, треба тільки знайти свій шлях.</p>
        </div>
      <div className={styles.choose__pictureContainer}>
        <img
          src="https://i.imgur.com/w4DfmPP.png"
          alt="A city"
          className={styles.choose__picture}
        />
      </div>
    </div>
  );
};

export default WhatToChoose;
