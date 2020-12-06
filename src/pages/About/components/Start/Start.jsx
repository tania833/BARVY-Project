import React from 'react';
import styles from './Start.module.css';

const Start = () => {
  return (
    <div className={styles.startContainer}>
      <div className={styles.workingContainer}>
        <div className={styles.workingIllustrationContainer}>
          <img
            src="https://i.imgur.com/RykutBx.png"
            alt="man working on a laptop"
            className={styles.workingIllustration}
          />
        </div>
        <div className={styles.workingPara}>
          Почніть проходити курс <br />
          Дивіться відео, виконуйте завдання. Для того щоб навчання проходило
          плавно і послідовно, кожен наступний урок курсу буде відкритий після
          проходження попереднього.
        </div>
        <div className={styles.workingPictureContainer}>
          <img
            src="https://i.imgur.com/EBezvbM.png"
            alt="poppy"
            className={styles.workingPicture}
          />
        </div>
      </div>
      <div className={styles.photographingContainer}>
      <div className={styles.photographingPictureContainer}>
          <img
            src="https://i.imgur.com/8NAQ7HJ.jpg"
            alt="sunset"
            className={styles.photographingPicture}
          />
        </div>
        <div className={styles.photographingPara}>
          Завантажте роботу та отримайте оцінку спеціаліста Закінчили свій
          перший шедевр? Виконали завдання? Завантажуйте фотографії в Особистому
          кабінеті та отримуйте оцінку викладача.
        </div>
        <div className={styles.photographingIllustrationContainer}>
          <img
            src="https://i.imgur.com/opEjVCb.png?1"
            alt="man taking a photo"
            className={styles.photographingIllustration}
          />
        </div>
      </div>
    </div>
  );
};

export default Start;
