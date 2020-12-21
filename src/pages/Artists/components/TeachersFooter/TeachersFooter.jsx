import React from 'react';
import styles from './TeachersFooter.module.scss';
import Button from '../../../../components/Button';
import { Link } from 'react-router-dom';

const TeachersFooter = () => {
  return (
    <section className={styles.teachersFooter}>
      <div className={styles.teachersFooter__container}>
        <div className={styles.teachersFooter__row}>
          <Link to="/" className={styles.teachersFooter__logo}>
            барви
          </Link>
          <div className={styles.teachersFooter__textContainer}>
            <p className={styles.teachersFooter__text}>
              Нам важливо підтримати та заявити про талановитих митців,
              художників, дизайнерів з різних куточків України, які готові
              ділитись та навчати.{' '}
            </p>
            <p className={styles.teachersFooter__text}>
              Долучайтесь до викладачів та поділіться власними знаннями і
              технікою
            </p>
            <div className={styles.teachersFooter__button}>
              <Link to="/contacts">
                <Button text="Написати нам" />
              </Link>
            </div>
          </div>
          <div className={styles.teachersFooter__imageBox}>
            <img
              src="https://i.imgur.com/4i9YzuU.png"
              alt="Running man with flag"
              className={styles.teachersFooter__image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersFooter;
