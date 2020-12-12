import React from 'react';
import styles from './Ship.module.scss';

const Ship = () => {
  return (
    <div className={styles.shipContainer}>
      <div className={styles.blueContainer}>
        <div className={styles.photoBlock}>
          <img
            src="https://i.imgur.com/zimUqH1.png"
            alt="ship"
            className={styles.photo}
          />
        </div>
        <div className={styles.textBlock}>
          <div className={styles.textBlockSubtitle}>
            Ми впевнені, що творити може кожен!
          </div>
          <p className={styles.textBlockPara}>
            Тут ти знайдеш цінну інформацію, курси і уроки до душі та
            однодумців. Це однокурсники, викладачі та команда Барвів. Разом ми
            створюємо особливу атмосферу всередині нашого онлайн-простору.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ship;
