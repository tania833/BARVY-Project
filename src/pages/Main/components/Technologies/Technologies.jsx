import React from 'react';
import Title from '../../../../components/Title';
import Button from '../../../../components/Button';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <section className={styles.mainTechnos}>
      <Title title="Популярні" subtitle="техніки" />
      <div className={styles.technoPic}>
        <div className={styles.technoPic__ContBig}>
          <img
            className={styles.technoPic__Img}
            src="https://imgur.com/HDj2wyy.png"
            alt=""
          />
        </div>
        <div className={styles.technoPic__ContBig}>
          <img
            className={styles.technoPic__Img}
            src="https://imgur.com/fC68Wpl.png"
            alt=""
          />
        </div>
        <div className={styles.technoPic__Cont}>
          <img
            className={styles.technoPic__Img}
            src="https://imgur.com/70mHf8c.png"
            alt=""
          />
        </div>
        <div className={styles.technoPic__Cont}>
          <img
            className={styles.technoPic__Img}
            src="https://imgur.com/sU4BbqC.png"
            alt=""
          />
        </div>
        <div className={styles.technoPic__Cont}>
          <img
            className={styles.technoPic__Img}
            src="https://imgur.com/GQ4q46O.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles.mainCourses_buttonWrapper}>
        <Button text="до каталогу" />
      </div>
    </section>
  );
};

export default Technologies;
