import React from 'react';
import styles from './AboutTeachers.module.scss';
import PropTypes from 'prop-types';

const AboutTeachers = (props) => {
  const items = props.our_teachers_info.map((item) => (
    <div className={styles.teachersRow__item} key={item.id}>
      <a className={styles.teachersPhoto__wrapper} href="/">
        <img
          className={styles.teachersPhoto__photo}
          src={item.imgInfo.url}
          alt={item.imgInfo.alt}
        />
      </a>
      <div className={styles.teachersInfo}>
        <a href="/">
          <div className={styles.teachersInfo__name}>
            {item.teacherInfo.name}
          </div>
        </a>
        <a href="/">
          <div className={styles.teachersInfo__technique}>
            {item.teacherInfo.technique}
          </div>
        </a>
      </div>
    </div>
  ));
  return <>{items}</>;
};

AboutTeachers.propTypes = {
  our_teachers_info: PropTypes.array,
};

export default AboutTeachers;
