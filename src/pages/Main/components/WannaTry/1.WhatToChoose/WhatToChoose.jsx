import React from "react";
import Button from "../../../../../components/Button";
import styles from "./WhatToChoose.module.scss";

const WhatToChoose = () => {
  return (
    <div className={styles.chooseContainer}>
      <div className={styles.chooseTextBlock}>
        <h4 className={styles.choose__title}>що мені обрати?</h4>
        <p className={styles.choose__paragraph}>
          А якщо я хочу спробувати і не знаю, що саме мені сподобається?
        </p>
        <p className={styles.choose__paragraph}>
          Не дізнаєшся, поки не спробуєш. Ми підготували тест, який допоможе
        </p>
        <Button text='Пройти тест'/>
      </div>
      <div className={styles.choose__pictureContainer}>
        <img src="https://i.imgur.com/w4DfmPP.png" alt="A city" className={styles.choose__picture}/>
      </div>
    </div>
  );
};

export default WhatToChoose;
