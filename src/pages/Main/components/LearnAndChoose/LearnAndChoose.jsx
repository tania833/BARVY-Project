import React from 'react';
import styles from './LearnAndChoose.module.scss';

const LearnAndChoose = () => {
  return (
    <div className={styles.learnAndChoose}>
      <div className={styles.learn}>
        <div className={styles.learn__info}>
          <div className={styles.infoTitle}>Навчайся де і коли завгодно</div>
          <div className={styles.infoText}>
            Доступ до курсу відразу після оплати
          </div>
          <div className={styles.infoIcon}>
            <img
              className={styles.infoIconImg}
              src="https://i.imgur.com/e24APXe.png"
              alt="lady_in_armchair"
            />
          </div>
        </div>
        <div className={styles.learn__card}>
          <img
            className={styles.learn__cardImg}
            src="https://i.imgur.com/hZsqj2a.jpg"
            alt="pomegranate_watercolor"
          />
        </div>
      </div>
      <div className={styles.choose}>
        <div className={styles.choose__picture}>
          <img
            className={styles.choose__pictureImg}
            src="https://i.imgur.com/3LJtFC8.jpg"
            alt="hands"
          />
        </div>
        <div className={styles.choose__info}>
          <div className={styles.infoTitle}>Обери свій пакет</div>
          <div className={styles.infoText}>
            З перевіркою чи без, доступ назавжди чи обмежений, для початківців
            чи вже досвідчених
          </div>
          <div className={styles.infoIcon}>
            <img
              className={styles.infoIconImg}
              src="https://i.imgur.com/ghfNlh4.png"
              alt="sitting_man"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndChoose;
