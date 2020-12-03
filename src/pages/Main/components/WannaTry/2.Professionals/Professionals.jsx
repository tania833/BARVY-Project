import React from 'react';
import styles from './Professionals.module.scss';
const Professionals = () => {
  return (
    <div className={styles.professionals}>
      <div className={styles.professionals__textBlock}>
        <div className={styles.professionals__titleAndIcon}>
          <div className={styles.professionals__title}>Творчі професіонали</div>
          <div className={styles.professionals__iconContainer}>
            <img
              src="https://i.imgur.com/UldpAXq.png"
              alt="Man Icon"
              className={styles.professionals__icon}
            />
          </div>
        </div>
        <p className={styles.professionals__para}>
          Ми працюємо з митцями, які залюбки діляться досвідом, допоможуть
          виправити помилки та підкажуть як створити неймовірні роботи
        </p>
      </div>
      <div className={styles.professionals__photoBlock}>
        <img
          src="https://i.imgur.com/Fj0MU5Q.png"
          alt="City river boat"
          className={styles.professionals__photo}
        />
      </div>
    </div>
  );
};

export default Professionals;
