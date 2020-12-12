import React from 'react';
import styles from './AboutTeachers.module.scss';
import PropTypes from 'prop-types';

const TeachersPhoto = (props) => {
  return (
    <a className={styles.teachersPhoto__wrapper} href="/">
      <img
        className={styles.teachersPhoto__photo}
        src={props.img_info.url}
        alt={props.name_info.alt}
      />
    </a>
  );
};

TeachersPhoto.propTypes = {
  img_info: PropTypes.object,
  name_info: PropTypes.object,
};

const TeachersInfo = (props) => {
  return (
    <div className={styles.teachersInfo}>
      <a href="/about">
        <div className={styles.teachersInfo__name}>
          {props.teacher_info.name}
        </div>
      </a>
      <a href="/about">
        <div className={styles.courseCard__technique}>
          {props.teacher_info.technique}
        </div>
      </a>
    </div>
  );
};

TeachersInfo.propTypes = {
  teacher_info: PropTypes.object,
};

const AboutTeachers = () => {
  return (
    <div className={styles.teachersRow}>
      <div className={styles.teachersRow__item}>1</div>
      <div className={styles.teachersRow__item}>2</div>
      <div className={styles.teachersRow__item}>3</div>
      <div className={styles.teachersRow__item}>4</div>
      <div className={styles.teachersRow__item}>5</div>
      <div className={styles.teachersRow__item}>6</div>
      <div className={styles.teachersRow__item}>7</div>
      <div className={styles.teachersRow__item}>8</div>
      <div className={styles.teachersRow__item}>9</div>
    </div>
  );
};

export default AboutTeachers;
