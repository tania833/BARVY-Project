import React from 'react';
import styles from './WannaTry.module.scss';
import WhatToChoose from './1.WhatToChoose/WhatToChoose';
import Professionals from './2.Professionals/Professionals';
import MainTitle from '../../../../components/Title';

const WannaTry = () => {
  return (
    <div className={styles.WannaTry}>
      <MainTitle title="хочу спробувати" />
      <div className={styles.tryContainer}>
        <WhatToChoose />
        <Professionals />
      </div>
    </div>
  );
};

export default WannaTry;
