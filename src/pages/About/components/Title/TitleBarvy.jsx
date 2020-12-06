import React from 'react';
import styles from './TitleBarvy.module.scss';
import Title from '../../../../components/Title';

const TitleBarvy = () => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.subContainer}>
        <Title title="Ідея" subtitle="Про нас" />
      </div>
    </div>
  );
};

export default TitleBarvy;
