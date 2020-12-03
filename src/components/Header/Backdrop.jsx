import React from 'react';
import styles from './Backdrop.module.scss';

const backdrop = (props) => (
  <div className={styles.backdrop} onClick={props.click} />
);

export default backdrop;
