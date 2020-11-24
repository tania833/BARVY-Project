import React from "react";
import MainTitle from "../../../../components/Title";
import styles from "./HowItWorks.module.scss";

const HowItWorks = () => {
  return (
    <div className={styles.letsStart}>
      <div className={styles.letsStart__wrapper}>
        <MainTitle title="починаємо" subtitle="як це працює?" />
        <div className={styles.letsStart__container}>
          <div className={styles.letsStart__card}>
            <div className={styles.letsStart__number}>1</div>
            <div className={styles.letsStart__icon}>
              <img
                className={styles.letsStart__img}
                src="https://i.imgur.com/hDb15qV.png"
                alt="icon1"
              />
            </div>
            <div className={styles.letsStart__text}>
              Вибери курс чи урок, що сподобався або викладача, у якого хочеш
              навчатись
            </div>
          </div>
          <div className={styles.letsStart__card}>
            <div className={styles.letsStart__number}>2</div>
            <div className={styles.letsStart__icon}>
              <img
                className={styles.letsStart__img}
                src="https://i.imgur.com/nQJBboH.png"
                alt="icon2"
              />
            </div>
            <div className={styles.letsStart__text}>
              Ознайомся з описом курсу, демо відео та викладачем
            </div>
          </div>
          <div className={styles.letsStart__card}>
            <div className={styles.letsStart__number}>3</div>
            <div className={styles.letsStart__icon}>
              <img
                className={styles.letsStart__img}
                src="https://i.imgur.com/kFo5pPg.png"
                alt="icon3"
              />
            </div>
            <div className={styles.letsStart__text}>
              Швидка реєстрація та оплата зручним способом
            </div>
          </div>
          <div className={styles.letsStart__card}>
            <div className={styles.letsStart__number}>4</div>
            <div className={styles.letsStart__icon}>
              <img
                className={styles.letsStart__img}
                src="https://i.imgur.com/VxI6XsL.png"
                alt="icon4"
              />
            </div>
            <div className={styles.letsStart__text}>
              Дивись курс в особистому кабінеті та твори!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
