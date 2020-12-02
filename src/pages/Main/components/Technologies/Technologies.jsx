import React from 'react';
import Title from '../../../../components/Title';
import Button from '../../../../components/Button';
import styles from './Technologies.module.scss';

const Technologies = () => {
  return (
    <div>
      <section className={styles.introText}>
        <p>Це простір творчих курсів, уроків та майстер-класів українських художників, дизайнерів та митців у різних техніках і жанрах.</p>
        <p>Ми впевнені, що творити може кожен, а ми допоможемо знайти своє та спробувати щось нове.</p>
      </section>
      <section className={styles.mainTechnos}>
        <Title title="Популярні" subtitle="техніки" />
        <div className={styles.technoPic}>
        <a className={styles.technoPic__Cont_Big} href="#">
            <div className={styles.technoPic__title}>Акварель</div>
            <img
              className={styles.technoPic__Img}
              src="https://imgur.com/HDj2wyy.png"
              alt="Акварель"
            />
          </a>
          <a className={styles.technoPic__Cont_Big} href="#">
            <div className={styles.technoPic__title}>Рисунок</div>
            <img
              className={styles.technoPic__Img}
              src="https://imgur.com/fC68Wpl.png"
              alt="Рисунок"
            />
          </a>
          <a className={styles.technoPic__Cont} href="#">
            <div className={styles.technoPic__title}>Ілюстрація</div>
            <img
              className={styles.technoPic__Img}
              src="https://imgur.com/70mHf8c.png"
              alt="Ілюстрація"
            />
          </a>
          <a className={styles.technoPic__Cont} href="#">
            <div className={styles.technoPic__title}>Фотографія</div>
            <img
              className={styles.technoPic__Img}
              src="https://imgur.com/sU4BbqC.png"
              alt="Фотографія"
            />
          </a>
          <a className={styles.technoPic__Cont} href="#">
            <div className={styles.technoPic__title}>Історія мистецтв</div>
            <img
              className={styles.technoPic__Img}
              src="https://imgur.com/GQ4q46O.png"
              alt="Історія мистецтв"
            />
          </a>
        </div>
        <div className={styles.mainCourses_buttonWrapper}>
          <Button text="до каталогу" />
        </div>
      </section>
    </div>
  );
};

export default Technologies;
