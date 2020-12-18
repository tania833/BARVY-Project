import React from 'react';
import styles from './Barvy.module.scss';
import PropTypes from 'prop-types';

const Barvy = (props) => {
  const { alt, src, para1, para2, para3 } = props.barvyProps;
  return (
    <div className={styles.generalContainer}>
      <div className={styles.subContainer}>
        <div className={styles.textContainer}>
          <div className={styles.logo}>Барви</div>
          <div className={styles.textBlock}>
            <p className={styles.textBlock__para}>{para1}</p>
            <p className={styles.textBlock__para}>{para2}</p>
            <p className={styles.textBlock__para}>{para3}</p>
          </div>
          <div className={styles.imageContainer}>
            <img src={src} alt={alt} className={styles.barvyPhoto} />
          </div>
        </div>
      </div>
    </div>
  );
};

Barvy.propTypes = {
  barvyProps: {
    src: PropTypes.string,
    alt: PropTypes.string,
    para1: PropTypes.string,
    para2: PropTypes.string,
    para3: PropTypes.string,
  },
};

export default Barvy;
