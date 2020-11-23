import React from 'react';
import styles from './css_modules/Button.module.scss'

const Button = (props) => {
  return (
    <div className={styles.button_block}>
      <div className={styles.button_text}>{props.text}</div>
    </div>
  );
};

export default Button